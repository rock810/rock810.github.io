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
				
				            maximum: 3240301,
				            interval: 324030,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 407129},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 676568},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1013263},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1350696},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1738129},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1508420},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1734534},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1421131},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1602834},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1916030},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2673998},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1790918},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2128869},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2333175},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2074601},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2050622},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1465615},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1648765},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2022671},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 2151349},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2324266},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2175659},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1564363},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2557544},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2555497},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2549570},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2206696},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3240301},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2864868},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2482637},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 24479},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 334631},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 279542},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 343551},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 343165},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 456021},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 505956},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 607336},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 939002},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 754372},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 867310},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 720451},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1102518},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 917679},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 766172},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1020324},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1112222},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1361819},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1523674},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1354702},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1560713},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 1839656},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1667001},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1728122},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1560087},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1392385},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1829998},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1521871},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1461027},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1485652},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1177314},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 9934},
]},
],
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
				
				            maximum: 90799404,
				            interval: 9079940,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 407129},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1083697},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2096960},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3447656},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5185785},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6694205},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8428739},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9849870},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11452704},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13368734},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16042732},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17833650},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19962519},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 22295694},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 24370295},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 26420917},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27886532},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 29535297},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 31557968},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 33709317},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 36033583},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 38209242},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 39773605},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 42331149},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 44886646},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 47436216},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 49642912},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 52883213},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 55748081},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 58230718},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 58255197},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 334631},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 614173},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 957724},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1300889},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1756910},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2262866},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2870202},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3809204},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4563576},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5430886},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6151337},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7253855},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8171534},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8937706},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9958030},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11070252},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12432071},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13955745},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15310447},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16871160},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18710816},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20377817},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22105939},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 23666026},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25058411},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26888409},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 28410280},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29871307},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 31356959},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 32534273},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 32544207},
]},
],
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
				
				            maximum: 2363167,
				            interval: 236316,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 276172},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 192169},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 239091},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 323631},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 397655},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 292570},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 398642},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 367060},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 531755},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 426102},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 419355},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 411829},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 433886},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 564216},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 367926},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 381578},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 509889},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 366803},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 506098},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 410730},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 417414},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 586475},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 446766},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 496312},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 768192},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 534547},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 584017},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 588577},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 680770},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 581897},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 24479},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 221192},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 178619},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 175874},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 187434},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 264006},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 336517},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 413043},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 531997},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 544169},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 555928},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 478617},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 695440},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 498513},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 285874},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 599753},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 581657},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 668604},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 793616},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 549231},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 634284},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 827408},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 908428},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 655661},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 766754},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 495926},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 743627},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 894919},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 575373},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 601924},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 437297},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 9934},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 41878},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 103640},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 128009},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 184764},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 155049},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 167500},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 154970},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 91046},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 153796},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 142676},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 238381},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 61464},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 213793},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 252625},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 147651},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 187941},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 109644},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 196529},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 185866},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 238646},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 114650},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 228408},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 230373},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 282136},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 363450},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 239627},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 255506},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 288557},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 287094},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 283564},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 15703},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 12615},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 48372},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 37638},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 39592},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 48495},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 57655},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 86290},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 52270},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 86922},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 74133},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 64571},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 87856},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 72647},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 112957},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 99870},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 87959},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 85875},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 156677},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 143705},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 130677},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 165023},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 141411},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 132575},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 128679},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 156647},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 138054},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 209441},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 79621},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 101972},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 89079},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 380759},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 646163},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 842301},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1185425},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1048350},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1180922},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 963025},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 917283},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1347252},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2016262},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1317625},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1481190},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1516334},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1559024},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1481103},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 846082},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1085433},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1330707},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1501973},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 1792202},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1360776},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 887224},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1779096},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1423855},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1775396},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1367173},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2363167},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1897004},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1617176},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 97736},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 88308},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 119305},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 118093},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 152423},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 120944},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 136638},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 320715},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 157933},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 224460},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 167701},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 342507},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 331310},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 407651},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 307614},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 430695},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 605256},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 644183},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 648794},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 782724},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 881571},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 593550},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 931050},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 660758},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 767780},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 929724},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 488898},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 676213},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 804107},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 638045},
]},
],
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
				            text: '喵鼠的PT統計(總分2869232)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 270882,
				            interval: 27088,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5997},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3101},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4091},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3211},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4352},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 113},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4488},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 846},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 78},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 911},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2836},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2338},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4944},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1703},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12318},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 24881},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 24615},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 30608},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 28501},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 19485},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 32273},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 33722},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11246},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12388},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 32128},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 21776},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 69313},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 44000},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 66144},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 192281},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 136503},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 78236},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 270882},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 211421},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 98709},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 149351},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 83981},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 159782},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 97617},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 42194},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 232642},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 154941},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 45908},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3903},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10315},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15677},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14616},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 23301},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23535},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 28112},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 77131},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 88500},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 40371},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 24551},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 30218},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 32147},
]},
],
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

                   text: '喵鼠的PT構成(總分2869232)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 39009, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2417846, name: '強襲', legendMarkerType: 'square'},
{  y: 412377, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分2665835)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 273222,
				            interval: 27322,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10342},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 18800},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7950},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13140},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 29216},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15656},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15160},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 41103},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 20471},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 36110},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19741},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18490},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19625},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 40008},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 125905},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 196341},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 161024},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 170369},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 145206},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 174229},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 40409},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 120713},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 132371},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 84507},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 28755},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 273222},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 175069},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2675},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2901},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5541},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2770},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4602},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2824},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7159},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10076},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1241},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6796},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4047},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31761},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2294},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2688},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13143},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8417},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3286},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5950},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13158},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11536},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16283},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 24998},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 22396},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 27936},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 52951},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 44476},
]},
],
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

                   text: '雪歌的PT構成(總分2665835)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 118171, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2333930, name: '強襲', legendMarkerType: 'square'},
{  y: 213734, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分2513007)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 275562,
				            interval: 27556,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8008},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 26008},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 27852},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 42507},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 43283},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 50542},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 34321},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 38153},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 84567},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 57815},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 113988},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 44368},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 39758},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16649},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 83794},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 94752},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 175961},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 275562},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 264237},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 46323},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 56109},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 131432},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 188269},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 117229},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 56711},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 66821},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 72378},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4386},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5430},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1893},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2292},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7024},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16069},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7896},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3059},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2616},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9613},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16552},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22134},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15109},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 18815},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16895},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 18039},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 36655},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 51133},
]},
],
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

                   text: '葬月的PT構成(總分2513007)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 50665, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2257397, name: '強襲', legendMarkerType: 'square'},
{  y: 204945, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分2470594)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 284194,
				            interval: 28419,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 20893},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8834},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6392},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3450},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5686},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 18189},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 38606},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 36123},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 22007},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 32925},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 20196},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22109},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30319},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 50326},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 58938},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 48789},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 84361},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 47059},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 67749},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 284194},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 170238},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 197138},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 159476},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 78495},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 149147},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 49624},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3032},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3300},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11236},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10806},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17240},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16699},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22855},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 45086},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 28739},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 40410},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 30091},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 35601},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 53130},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 24337},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 136473},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 41872},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2798},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 363},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3787},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 321},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5878},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2404},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6906},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1255},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7210},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7480},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
]},
],
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

                   text: '土土昕的PT構成(總分2470594)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 38426, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1811262, name: '強襲', legendMarkerType: 'square'},
{  y: 620906, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分2429673)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 183775,
				            interval: 18377,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 63941},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 21863},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 36833},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 39929},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 40506},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 63071},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 127613},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 30443},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 73213},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 37921},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 29584},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 76920},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4490},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7694},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 68846},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 70684},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 61496},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 161607},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 67655},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 88382},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 65984},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 125702},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 54558},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 156128},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 64732},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 183775},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 170737},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 171890},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 86059},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 96102},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4542},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10793},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11514},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20469},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12489},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21508},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分2429673)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2348358, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 81315, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '羽龍的PT統計(總分2253873)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 209198,
				            interval: 20919,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 22413},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5829},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11825},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12075},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14112},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 22701},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 29177},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 92751},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 31208},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 39914},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 40731},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 101519},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 90163},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 64911},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 31789},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 126398},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 29539},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 86329},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 93979},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 65126},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19733},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 118366},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 66564},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 52454},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 112824},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 110191},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 157774},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 72811},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 209198},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3917},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4309},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 429},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2875},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3039},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4252},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 596},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6806},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1133},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5535},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2560},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2410},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8521},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8113},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3143},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 32781},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7585},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7942},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5680},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 16500},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13911},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 33164},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15107},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 34300},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 38363},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13942},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 44556},
]},
],
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

                   text: '羽龍的PT構成(總分2253873)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 105946, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1932404, name: '強襲', legendMarkerType: 'square'},
{  y: 215523, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分2250963)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 169927,
				            interval: 16992,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1760},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 89702},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 125654},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 75259},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 65442},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 120930},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 59864},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 88365},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31869},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 69451},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 89225},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 169927},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 110569},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 124944},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 157519},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 77573},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 128824},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 118785},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 85655},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 164262},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 76550},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 81547},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 83208},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11539},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 25511},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17029},
]},
],
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

                   text: '阿拉的PT構成(總分2250963)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2196884, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 54079, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '嘎喵的PT統計(總分2076655)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 168788,
				            interval: 16878,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 32626},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 71333},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 45},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 32881},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4608},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 79944},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 142031},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 20614},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 92509},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 103155},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 60854},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 132466},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 103972},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2150},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 82775},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 46897},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 67406},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 168788},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 42359},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 87626},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 64801},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 96394},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 18915},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 141837},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 50600},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 34321},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 59741},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 38232},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 61431},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 48064},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8983},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12291},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7994},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12251},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16061},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18857},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10843},
]},
],
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

                   text: '嘎喵的PT構成(總分2076655)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1989375, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 87280, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '魔法的PT統計(總分1895162)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 170114,
				            interval: 17011,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 73513},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 32451},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 34748},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 29682},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 38508},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2508},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 80168},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 42976},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 43484},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 39523},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 42786},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 72874},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 46557},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 114734},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 52019},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 66746},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 77709},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 50584},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 110074},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 47411},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 170114},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 135139},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 109982},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 51249},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 93023},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 95602},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 379},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 83235},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5942},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8528},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7960},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18951},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16003},
]},
],
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

                   text: '魔法的PT構成(總分1895162)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1837778, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57384, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '雷克斯的PT統計(總分1889863)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 178070,
				            interval: 17807,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 17, 0), y: 20584},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 23314},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 33987},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 56010},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7771},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 37506},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 62611},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 38794},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 73810},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 48339},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 70282},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 21784},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 178070},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 115928},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 117446},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 86555},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 77171},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 58617},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 88584},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 44319},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 69190},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 69256},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 91812},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 49734},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 142521},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 34841},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 54532},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 52228},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6793},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10397},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11866},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9819},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25392},
]},
],
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

                   text: '雷克斯的PT構成(總分1889863)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1825596, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 64267, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '依司瑪耳的PT統計(總分1769332)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 114176,
				            interval: 11417,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 24721},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 20923},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3567},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 34672},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 46013},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 42643},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 73786},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 31861},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 57839},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7410},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 73578},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 88137},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 42831},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 76021},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 35778},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 51033},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 28551},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 40371},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 77015},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 114176},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 77648},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 107228},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 79251},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 40891},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 36898},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 112026},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 65430},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 66123},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 66332},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8644},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 28485},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14013},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 35008},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 35106},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5598},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19725},
]},
],
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

                   text: '依司瑪耳的PT構成(總分1769332)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1622753, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 146579, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '阿榮的PT統計(總分1546833)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 183800,
				            interval: 18380,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10910},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10492},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5574},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2107},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 37429},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21246},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19492},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 31242},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4346},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 869},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7570},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7641},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1341},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10331},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 34497},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12576},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 45621},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 30599},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 29734},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 28019},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 89173},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 39598},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13552},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4451},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 135995},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 93918},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 30109},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 87642},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31923},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 140187},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 85914},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 94603},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 183800},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 77167},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 87165},
]},
],
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

                   text: '阿榮的PT構成(總分1546833)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 17421, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1386574, name: '強襲', legendMarkerType: 'square'},
{  y: 142838, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分1452044)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 152220,
				            interval: 15222,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7852},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 18447},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 30968},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10277},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14133},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 25808},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 29494},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 23234},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7683},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 17241},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12649},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 35570},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20322},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 45355},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 117206},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 40538},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 33179},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 60567},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20532},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11200},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 152220},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 77239},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 79042},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 80303},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 39377},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 85868},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1007},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8447},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1261},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4412},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1742},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2405},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7538},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8455},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8130},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 977},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 61},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1382},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9718},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9970},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17161},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15546},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15016},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14465},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22836},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17395},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 27503},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25752},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 29488},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26015},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 31788},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 47270},
]},
],
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

                   text: '冰紅茶的PT構成(總分1452044)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 45817, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1096304, name: '強襲', legendMarkerType: 'square'},
{  y: 309923, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分1281890)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 165537,
				            interval: 16553,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 35454},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1285},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 34629},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 39356},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 33198},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17111},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4091},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10590},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10586},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10756},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 77716},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 65147},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7906},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 36498},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 27940},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 41767},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 99198},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 33359},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10002},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5238},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 44742},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 55204},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 44335},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13323},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8546},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 165537},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 86891},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 100451},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 31983},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 38128},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8267},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14046},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8630},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14881},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18482},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10658},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15959},
]},
],
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

                   text: '藏月的PT構成(總分1281890)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1190967, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 90923, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分1264546)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 147206,
				            interval: 14720,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9811},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15679},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6636},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 21996},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 25969},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 37681},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 43245},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6340},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 61339},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 74157},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9883},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 27848},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 147206},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 78067},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 81162},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 35198},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20006},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 132998},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 83415},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 85829},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 42179},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21794},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 37063},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 34249},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8179},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 109874},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6743},
]},
],
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

                   text: '冰的PT構成(總分1264546)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1232420, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32126, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分687265)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 67312,
				            interval: 6731,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6451},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16442},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16971},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12861},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2336},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 17670},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20429},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 34552},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 59352},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 37538},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 32626},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 63461},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 30307},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 36221},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 36830},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 67312},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 29813},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5975},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2580},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 39155},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15625},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 59358},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3196},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 40204},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分687265)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 647401, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39864, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '寇內爾緹的PT統計(總分585765)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60600,
				            interval: 6060,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5744},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7658},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9264},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 834},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 35335},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7851},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7694},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7087},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 18527},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 29462},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5930},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14970},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10601},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5790},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14129},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8332},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 41752},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17281},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18832},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 32737},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 35545},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 26118},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 60600},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16334},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 23791},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10049},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10115},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9183},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3244},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 9934},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6879},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5700},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 24189},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 31731},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12543},
]},
],
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

                   text: '寇內爾緹的PT構成(總分585765)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 504723, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 81042, name: '強襲', legendMarkerType: 'square'},
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
				            text: '秋風冷月的PT統計(總分348058)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 61714,
				            interval: 6171,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11161},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 29059},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 25946},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 23762},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 22112},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 17189},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 27810},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 23726},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14076},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 61714},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 57368},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12170},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5140},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1287},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4129},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1775},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1728},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7906},
]},
],
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

                   text: '秋風冷月的PT構成(總分348058)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 21965, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 259927, name: '強襲', legendMarkerType: 'square'},
{  y: 66166, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分283800)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 92178,
				            interval: 9217,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4265},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 28994},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 817},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 92178},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4094},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 70796},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 24884},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 42099},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8315},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7358},
]},
],
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

                   text: '亞歷的PT構成(總分283800)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 268127, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15673, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '赤雲天的PT統計(總分9817)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 9817,
				            interval: 981,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9817},
]},
],
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

                   text: '赤雲天的PT構成(總分9817)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 9817, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '慕夏的PT統計(總分3834051)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 264348,
				            interval: 26434,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "慕夏殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11612},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3416},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7939},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7678},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8113},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8464},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14677},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 38594},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3787},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2487},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9206},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "慕夏CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 34996},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 31785},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 69332},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 47061},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 38614},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 21460},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 49239},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 57327},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 51375},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 141392},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 38926},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "慕夏強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 25998},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11113},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 97350},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 188159},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 123148},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 149180},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 47971},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 43313},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 152455},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 164326},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 149193},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 143363},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 56584},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 67408},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 91294},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 113291},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 140555},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 175970},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 126302},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 222668},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 81640},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 94468},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 143296},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 264348},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 62011},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 56976},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 103074},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 41117},
]},
],
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

                   text: '慕夏的PT構成(總分3834051)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 115973, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3136571, name: '強襲', legendMarkerType: 'square'},
{  y: 581507, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'JACOB的PT統計(總分3541284)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 290413,
				            interval: 29041,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "JACOB強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 17067},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 43059},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 37763},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 19260},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 193183},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 86846},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 120984},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 50874},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 65429},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 95963},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 101524},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 78556},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 145560},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 220651},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 155088},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 102117},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 47775},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 109355},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 44140},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 81310},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 131488},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 224055},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 50930},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 138274},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 290413},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 191644},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 65435},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 37749},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 165205},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 129495},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "JACOB殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5802},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 109},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8087},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9263},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9212},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13279},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "JACOBCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11744},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 22747},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 41502},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 41740},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 65929},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 70678},
]},
],
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

                   text: 'JACOB的PT構成(總分3541284)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 45752, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3241192, name: '強襲', legendMarkerType: 'square'},
{  y: 254340, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '力投查查的PT統計(總分3426716)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 289879,
				            interval: 28987,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "力投查查強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 66504},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 28818},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 63298},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 46892},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 49840},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 56166},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 270310},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 62043},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 98427},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 41691},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 173750},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 264206},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 151499},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 137427},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 114591},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 84941},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 278396},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 64257},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 154521},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 142660},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 82685},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 289879},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 74131},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "力投查查殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11637},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7755},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1169},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13733},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12796},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6760},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 35969},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13179},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 111},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3282},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11737},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "力投查查CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16229},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 60710},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 71078},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 59051},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 69307},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 35283},
]},
],
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

                   text: '力投查查的PT構成(總分3426716)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 118128, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2896931, name: '強襲', legendMarkerType: 'square'},
{  y: 411657, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '霓凰郡主依蓓妮妮的PT統計(總分3420057)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 231399,
				            interval: 23139,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "霓凰郡主依蓓妮妮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4824},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7673},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5928},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4860},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2841},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10402},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6682},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13733},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9062},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 34493},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "霓凰郡主依蓓妮妮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11694},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11339},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 31673},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 16625},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 89502},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 92786},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 40336},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 26025},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 122103},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 218555},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 93035},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 124868},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 120951},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 71174},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 54271},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 87150},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 231399},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 190694},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 43568},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 31937},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 201999},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 168864},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 128740},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 59901},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 106968},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 142132},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 66769},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "霓凰郡主依蓓妮妮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 24339},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 28885},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 84138},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6031},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 30673},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 50732},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 39791},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 37304},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 104008},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 50107},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 36010},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 71964},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 49730},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20790},
]},
],
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

                   text: '霓凰郡主依蓓妮妮的PT構成(總分3420057)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 100498, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2685057, name: '強襲', legendMarkerType: 'square'},
{  y: 634502, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '薩姆的PT統計(總分3252354)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 273587,
				            interval: 27358,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薩姆強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6751},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 32477},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 16496},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 20712},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 140448},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 62327},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 139233},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 70435},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 169893},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 210958},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 53319},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 115624},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 117274},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 149173},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 128356},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 38422},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 36778},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 31379},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17850},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 52841},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 235657},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 146524},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 162300},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 87538},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 39677},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 199998},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 273587},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薩姆殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5172},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5956},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6081},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2814},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5746},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4353},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7539},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8261},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8413},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3187},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5013},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 28896},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9135},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7455},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12781},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 926},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9112},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薩姆CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7892},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 19524},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 18787},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 29491},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30700},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 35442},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21654},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17077},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 22224},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 62697},
]},
],
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

                   text: '薩姆的PT構成(總分3252354)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 130840, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2856026, name: '強襲', legendMarkerType: 'square'},
{  y: 265488, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '謝莎菈的PT統計(總分3242596)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 289795,
				            interval: 28979,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "謝莎菈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4840},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6159},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2178},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6495},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1592},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7573},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6533},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2732},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3443},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4684},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20881},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4953},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 30790},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12082},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14098},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "謝莎菈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9254},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 52868},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 86266},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 102398},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 35640},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 86697},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 72854},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 96120},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 51542},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 78853},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 206370},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 60765},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 97091},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 70853},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 102645},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 101739},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 35219},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 27190},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 85129},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 123090},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 39127},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 77243},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 75597},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 198931},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 156192},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 288111},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 289795},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "謝莎菈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12316},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 12573},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 38114},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 25973},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6594},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 37050},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 42473},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 78300},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 52592},
]},
],
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

                   text: '謝莎菈的PT構成(總分3242596)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 129033, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2807578, name: '強襲', legendMarkerType: 'square'},
{  y: 305985, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凝淵的PT統計(總分3170765)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 226694,
				            interval: 22669,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凝淵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4683},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 19070},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 21046},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 85754},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 71365},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 149141},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 79792},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 101496},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 111218},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 47499},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 85825},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 70242},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 144763},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 91307},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 134696},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 78646},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17532},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 26607},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 136357},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 95933},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 27838},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 86714},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 220081},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 199998},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 119669},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 226694},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 26152},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凝淵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5869},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2099},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4770},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2800},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7681},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8527},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6665},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13008},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 3250},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 39519},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3173},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凝淵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6878},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 49321},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22803},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 36662},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 30306},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31962},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7370},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 30354},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 54356},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 107002},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 69449},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 46824},
]},
],
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

                   text: '凝淵的PT構成(總分3170765)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 97361, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2580117, name: '強襲', legendMarkerType: 'square'},
{  y: 493287, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '帥哲的PT統計(總分3147049)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 270893,
				            interval: 27089,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "帥哲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4138},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23198},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7474},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "帥哲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 19831},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 45092},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 50772},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 50334},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 64451},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 67805},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 88024},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 90722},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 186371},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 64061},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 88513},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 33793},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 117856},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 76677},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 126806},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 95118},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 202914},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 28865},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 103383},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 134858},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 38703},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 80779},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 56127},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 115537},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 246367},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 176050},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 118048},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 270893},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 192515},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 80974},
]},
],
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

                   text: '帥哲的PT構成(總分3147049)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 3112239, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 34810, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '✤Issac✤的PT統計(總分2968527)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 231189,
				            interval: 23118,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "✤Issac✤CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 70041},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 118743},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 50501},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 27296},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11745},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 42353},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 59344},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 89912},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 131850},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 149295},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "✤Issac✤殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6387},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5363},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9827},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9008},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 54},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1372},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2239},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "✤Issac✤強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5055},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 82960},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 112718},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 52520},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 95834},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 46217},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 87431},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 79478},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 42997},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 153143},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 91630},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 89039},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 219941},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 85006},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 62360},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 127824},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 34460},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 91717},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 45980},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 57844},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18279},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 199998},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 231189},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 69577},
]},
],
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

                   text: '✤Issac✤的PT構成(總分2968527)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 34250, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2183197, name: '強襲', legendMarkerType: 'square'},
{  y: 751080, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '語的PT統計(總分2917268)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 198954,
				            interval: 19895,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "語強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 28140},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 55942},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 51954},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 28766},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 103031},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 98152},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 113694},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 81139},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 59836},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 60610},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 63365},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 192780},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 62602},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 39591},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 27755},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 198954},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 163208},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 122324},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 51016},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 110737},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 133158},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 78015},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 67727},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 171274},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 190026},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "語殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6541},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1782},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4645},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7137},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8164},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11414},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13169},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13012},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9880},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "語CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 15071},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 42726},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 32218},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 36993},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 23934},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 33470},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 57510},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27818},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32543},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22499},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 62947},
]},
],
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

                   text: '語的PT構成(總分2917268)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 75744, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2453795, name: '強襲', legendMarkerType: 'square'},
{  y: 387729, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '楓痕的PT統計(總分2910209)'
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
                                    name: "楓痕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9778},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6031},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2883},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6180},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6814},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13614},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16139},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23074},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8832},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8520},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9448},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9247},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9339},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "楓痕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11011},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 36261},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 45496},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 46353},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 47907},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 76658},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 91266},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 65586},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 64199},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 115915},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 75145},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 110312},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 88809},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 107305},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 82491},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 37053},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17834},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 85866},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 136575},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 159021},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 62260},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 111121},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 198519},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 67643},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 112251},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 98755},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 199998},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 76747},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "楓痕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 28667},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 52564},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 55792},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 62897},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 52034},
]},
],
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

                   text: '楓痕的PT構成(總分2910209)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 129899, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2528356, name: '強襲', legendMarkerType: 'square'},
{  y: 251954, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'HUSKY的PT統計(總分2834657)'
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
                                    name: "HUSKY強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 21781},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 40571},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 29414},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 65593},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 27052},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 96667},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 80335},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 147881},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 48287},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 94766},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 61811},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 133860},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 55659},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 35588},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 104783},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 104983},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 47042},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 55618},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 76529},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 55247},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 138563},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7139},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 118737},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 69948},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 67839},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 299997},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 99999},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 269491},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "HUSKY殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2268},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6112},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6237},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11448},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7490},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14068},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3716},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7921},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 26955},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17293},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7708},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2214},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8574},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15896},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11709},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "HUSKYCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 20967},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 33048},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 26920},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16297},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 27635},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 41034},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 63967},
]},
],
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

                   text: 'HUSKY的PT構成(總分2834657)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 149609, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2455180, name: '強襲', legendMarkerType: 'square'},
{  y: 229868, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '影武的PT統計(總分2813359)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 167263,
				            interval: 16726,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "影武殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 38023},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 66628},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 72291},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 73385},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 125574},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 38808},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 111124},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 144160},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 105967},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 78157},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 56042},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 96348},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 104166},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 115234},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 26969},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 117802},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 108760},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 96863},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 157069},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 75327},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 127480},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 129234},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 75564},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 167263},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 112114},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 28675},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 77500},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 38645},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 122375},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 75148},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 24479},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "影武CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13998},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12187},
]},
],
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

                   text: '影武的PT構成(總分2813359)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2787174, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26185, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '藍諾的PT統計(總分2791963)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 225333,
				            interval: 22533,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍諾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 25037},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 66167},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 78348},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 120096},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 47183},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 84361},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 24195},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 18767},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 80496},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 46446},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 225333},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 89546},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 75658},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 60916},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27003},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28073},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 87878},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 118468},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 152477},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 74763},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 106802},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 187172},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 147970},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 71218},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 95052},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 81603},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍諾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10940},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 22798},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 18739},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 27491},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 37784},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 39135},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 51971},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 37406},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 44262},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 43922},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 60411},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 63428},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 41045},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藍諾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5483},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6576},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4396},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1378},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5845},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2475},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11880},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4692},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9160},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19718},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
]},
],
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

                   text: '藍諾的PT構成(總分2791963)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 71603, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2221028, name: '強襲', legendMarkerType: 'square'},
{  y: 499332, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿基里斯的PT統計(總分2646916)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 180397,
				            interval: 18039,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿基里斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 13407},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 31659},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 96023},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 71382},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 58560},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 40606},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 115502},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 177617},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 108963},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 72224},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 127956},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 103980},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 42863},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 113609},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 125206},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 68031},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 56624},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 104092},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 92349},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 180397},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 87574},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 117879},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 106573},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 128661},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 99623},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿基里斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 199},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4943},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8868},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6701},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5351},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13337},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1145},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7515},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4359},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8080},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 138},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 56},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1965},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8496},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 32726},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8813},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2373},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3772},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿基里斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 46753},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 40926},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 51735},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 47305},
]},
],
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

                   text: '阿基里斯的PT構成(總分2646916)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 118837, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2341360, name: '強襲', legendMarkerType: 'square'},
{  y: 186719, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風竹的PT統計(總分2621087)'
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
                                    name: "秋風竹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5060},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3148},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3627},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 818},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5960},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7627},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4165},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2229},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9146},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6567},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11953},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13497},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風竹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6838},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 41026},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14434},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 101752},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 50447},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 124254},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 62782},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 115870},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 40744},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 118660},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 36277},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 45903},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 104576},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 104071},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 66286},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 65626},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 90401},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 93751},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 158529},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 78098},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 132924},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 78038},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 85709},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 94621},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 63606},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 166528},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 199998},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 72211},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風竹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4817},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 40817},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 43724},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 43972},
]},
],
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

                   text: '秋風竹的PT構成(總分2621087)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 73797, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2413960, name: '強襲', legendMarkerType: 'square'},
{  y: 133330, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '汝肉寶的PT統計(總分2385200)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 209384,
				            interval: 20938,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "汝肉寶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2272},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3395},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1160},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7753},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2656},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 556},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7711},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10778},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11478},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7914},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "汝肉寶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6451},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 49230},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14666},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 62305},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 108969},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 56392},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 82064},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 65678},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 114475},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 102157},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 122225},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 128117},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 56038},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 91812},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 60613},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 38729},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 66439},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22990},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16169},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 104078},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 90947},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 82090},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 49386},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 67645},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 81499},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 209384},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 101818},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 146647},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "汝肉寶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 20726},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 31888},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 35944},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 41956},
]},
],
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

                   text: '汝肉寶的PT構成(總分2385200)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 55673, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2199013, name: '強襲', legendMarkerType: 'square'},
{  y: 130514, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '蜻夜的PT統計(總分2342434)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 177851,
				            interval: 17785,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蜻夜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 90188},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 23539},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 85401},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 110795},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 110548},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 51739},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 77185},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 118163},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 81167},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24366},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23930},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 68917},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 129021},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 86601},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 99442},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 131252},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 94287},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 93856},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 177337},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 116817},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 91612},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 123144},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 119604},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 177851},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蜻夜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16964},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18708},
]},
],
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

                   text: '蜻夜的PT構成(總分2342434)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2306762, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35672, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '蘭斯的PT統計(總分2324012)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 178598,
				            interval: 17859,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蘭斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 68442},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 25995},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 30143},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 100064},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 83535},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 72955},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 59784},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 21134},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 36177},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2250},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 81034},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 113179},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13049},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 105416},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 27078},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 73434},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 130521},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 116790},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 33652},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 110757},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 102884},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 178598},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 105013},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 39528},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 63454},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 62224},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 144886},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 81816},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 110841},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 46169},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蘭斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17129},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15826},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5636},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23121},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 21498},
]},
],
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

                   text: '蘭斯的PT構成(總分2324012)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2240802, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 83210, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '小次郎的PT統計(總分1664693)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 169694,
				            interval: 16969,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小次郎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 74674},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 37742},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 53468},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 52643},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 92558},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 74515},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11604},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 66637},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 38468},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 169694},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 74177},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 78661},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 75517},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 135319},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 99373},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 48517},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4984},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 53918},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33816},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 93378},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 74206},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 41850},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 40647},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 106263},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小次郎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 32064},
]},
],
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

                   text: '小次郎的PT構成(總分1664693)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1632629, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32064, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
