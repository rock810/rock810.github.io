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
				
				            maximum: 1160274,
				            interval: 116027,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 239377},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 271564},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 346410},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 404597},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 361962},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 428747},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 449138},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 472690},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 383250},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 376433},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 481259},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 368774},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 379364},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 377521},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 450239},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 467973},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 612340},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 713540},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 790694},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1023747},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 865872},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 704191},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 719272},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 797598},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 789102},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 811110},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1160274},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 892441},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 786160},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 792163},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 9292},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 160136},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 193062},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 211432},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 284102},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 364750},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 408216},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 447238},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 533596},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 568482},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 524241},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 524794},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 566673},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 665976},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 366692},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 518789},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 546152},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 623990},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 713856},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 459896},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 598433},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 615383},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 388221},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 613753},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 640011},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 456536},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 572694},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 615948},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 727391},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 567036},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 462076},
]},
],
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
				
				            maximum: 32666649,
				            interval: 3266664,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 239377},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 510941},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 857351},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1261948},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1623910},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2052657},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2501795},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2974485},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3357735},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3734168},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4215427},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4584201},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4963565},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5341086},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5791325},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6259298},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6871638},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7585178},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8375872},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9399619},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10265491},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10969682},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11688954},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12486552},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13275654},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14086764},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15247038},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16139479},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16925639},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17717802},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 17727094},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 160136},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 353198},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 564630},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 848732},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1213482},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1621698},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2068936},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2602532},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3171014},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3695255},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4220049},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4786722},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5452698},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5819390},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6338179},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6884331},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7508321},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8222177},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8682073},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9280506},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9895889},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10284110},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10897863},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11537874},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11994410},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12567104},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13183052},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13910443},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14477479},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14939555},
]},
],
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
				
				            maximum: 556326,
				            interval: 55632,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 181241},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 218582},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 238167},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 291366},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 256979},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 315437},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 268777},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 266838},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 254122},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 280584},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 304458},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 257722},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 284266},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 270170},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 296885},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 312524},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 357295},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 413636},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 319577},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 360433},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 514832},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 418118},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 368164},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 479645},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 403995},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 427328},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 522609},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 405835},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 378910},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 522994},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 9292},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 117491},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 109225},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 88713},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 162885},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 192713},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 232933},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 198005},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 187691},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 388607},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 288873},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 278490},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 380426},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 300576},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 212759},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 206866},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 357712},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 340113},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 341354},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 244728},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 297090},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 254760},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 222530},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 435695},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 340099},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 213165},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 251555},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 231304},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 385664},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 276971},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 273267},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 17915},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 51200},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 88932},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 87617},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 111729},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 116860},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 143960},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 241916},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 88758},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 118480},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 174516},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 91900},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 245055},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 58864},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 234672},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 50929},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 169661},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 260336},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 152045},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 231372},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 259372},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 76047},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 100510},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 196168},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 161216},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 261049},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 229686},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 238846},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 186540},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 123675},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 26167},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 25044},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 29117},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 43520},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 27086},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 40597},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 57435},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 40981},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 48197},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 43068},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 47161},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 50163},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 31652},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 50341},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 54785},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 65188},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 75983},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 43252},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 63162},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 106988},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 96154},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 91768},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 167056},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 116401},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 122594},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 72858},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 107353},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 102027},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 109313},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 70734},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 31969},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 27938},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 79126},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 69711},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 77897},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 72713},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 122926},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 164871},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 80931},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 52781},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 129640},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 60889},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 63446},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 57010},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 98569},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 90261},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 179062},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 256652},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 407955},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 556326},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 254886},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 194305},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 184052},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 201552},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 262513},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 310924},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 530312},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 384579},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 297937},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 198435},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 24730},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 32637},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 33787},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 33600},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 60308},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 58423},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 105273},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 103989},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 91117},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 116888},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 71788},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 94347},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 120345},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 95069},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 77251},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 137511},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 114216},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 112166},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 63123},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 69971},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 101251},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 89644},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 77548},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 103744},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 82155},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 60090},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 154958},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 102881},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 103525},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 65134},
]},
],
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
				            text: '喵鼠的PT統計(總分1667919)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 121801,
				            interval: 12180,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8287},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5376},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5637},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8697},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1332},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4016},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6429},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2403},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6108},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1456},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5820},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 21004},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12501},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11549},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10814},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7375},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9645},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8404},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 59},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1997},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7622},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4077},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11614},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 19287},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9235},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 50170},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 19046},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10097},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 34030},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 89553},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 92251},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 120875},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 54785},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 107296},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 77338},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32008},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 121801},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 60975},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 44006},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 52282},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 57297},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11889},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7394},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10779},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9439},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 24382},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16997},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19884},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10465},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 34929},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 29347},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 65391},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 80152},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33047},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23146},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 76124},
]},
],
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

                   text: '喵鼠的PT構成(總分1667919)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 146531, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1079912, name: '強襲', legendMarkerType: 'square'},
{  y: 441476, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分1423148)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 158493,
				            interval: 15849,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 17, 0), y: 13073},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 22203},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 52437},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 30274},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 30431},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15262},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13979},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 26522},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11630},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9659},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25464},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 38949},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8717},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22069},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 95029},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 93280},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 49603},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9479},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 32125},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 22515},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 58482},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 58549},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 146487},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 158493},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 49414},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 59871},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11744},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4245},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5330},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7754},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2605},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14475},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2134},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1735},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1057},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 24336},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3214},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8249},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7618},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7923},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5506},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7650},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6096},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12100},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5672},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1708},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30377},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7969},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4514},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4018},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8670},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7700},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6253},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15555},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10778},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11020},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11931},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9216},
]},
],
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

                   text: '雪歌的PT構成(總分1423148)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 196699, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1153996, name: '強襲', legendMarkerType: 'square'},
{  y: 72453, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分1396573)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 187548,
				            interval: 18754,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 20997},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14250},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 20489},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7890},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 36183},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 33160},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10235},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 25455},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14634},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16823},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18607},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 52490},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 131570},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 132294},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11127},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 51265},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 28700},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 41310},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 60487},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 187548},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 54442},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11812},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 21730},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8423},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 27647},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 18119},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12018},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 35066},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30264},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 37366},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28636},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11320},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5584},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4282},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9483},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2225},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5912},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3214},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5859},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24157},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10112},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7471},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5698},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4991},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4969},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10486},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8230},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2167},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12933},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31354},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13271},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8042},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3776},
]},
],
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

                   text: '葬月的PT構成(總分1396573)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 195536, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1003498, name: '強襲', legendMarkerType: 'square'},
{  y: 197539, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分1319161)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 89290,
				            interval: 8929,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 31946},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 20928},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 51803},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 73963},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 49645},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 29589},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 48893},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 29472},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 58132},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 48437},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 46859},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24528},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16997},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 38784},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 39922},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 26494},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 35926},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 30552},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 24621},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17847},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 89290},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 80759},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 63912},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 64561},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 40341},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 49566},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 36955},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19548},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 24615},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 37335},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17862},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13362},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7790},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13444},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14483},
]},
],
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

                   text: '阿拉的PT構成(總分1319161)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1252220, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 31224, name: '強襲', legendMarkerType: 'square'},
{  y: 35717, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分1203095)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 111137,
				            interval: 11113,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 26680},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 29829},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 32699},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 42408},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 55317},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 23444},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17468},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 52301},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14351},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 18811},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 77995},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12218},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 27435},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1401},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23832},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 37423},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 84248},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19273},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9911},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 28898},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 43673},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 42341},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25173},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 58151},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 63758},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26180},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 69282},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 54618},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 50922},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 111137},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15560},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6358},
]},
],
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

                   text: '嘎喵的PT構成(總分1203095)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1181177, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15560, name: '強襲', legendMarkerType: 'square'},
{  y: 6358, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分1173043)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 114604,
				            interval: 11460,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12628},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 27998},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 27170},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 27913},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 16036},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 47222},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6146},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17241},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14685},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11155},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 30427},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 20967},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 35692},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12682},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15540},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31799},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 29102},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 61431},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 114604},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 84163},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 47716},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 40997},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20290},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 46044},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 37998},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 45138},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 70143},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 42636},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 38691},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 77749},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7835},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7775},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6973},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4756},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4823},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8497},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4772},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5792},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9817},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分1173043)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1112003, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 22583, name: '強襲', legendMarkerType: 'square'},
{  y: 38457, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分1116541)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 81165,
				            interval: 8116,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11235},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 19836},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12321},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9844},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 24754},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 27632},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 20406},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7308},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 78296},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12816},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 31201},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 48924},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3925},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 50316},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18957},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19313},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 47464},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13611},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 71437},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 78370},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 46501},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 30038},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29971},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16883},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 81165},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 53285},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 36240},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 49142},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 45279},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 33, 0), y: 24364},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21738},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20065},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6043},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11023},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11547},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10568},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14723},
]},
],
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

                   text: '雷克斯的PT構成(總分1116541)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 996470, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 66167, name: '強襲', legendMarkerType: 'square'},
{  y: 53904, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分1093368)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 71174,
				            interval: 7117,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2193},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8550},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15113},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14593},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20572},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18328},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18024},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16006},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 33982},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 38301},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 28444},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 61856},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12675},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20497},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 39782},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 18927},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 26355},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15748},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 55227},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 29642},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 20305},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 33929},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15162},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 32721},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 57531},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 43548},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22281},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1424},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17815},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 23950},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 45321},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 38735},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13872},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25055},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 71174},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 56987},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2634},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 42356},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9521},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10026},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14206},
]},
],
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

                   text: '羽龍的PT構成(總分1093368)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 946236, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33753, name: '強襲', legendMarkerType: 'square'},
{  y: 113379, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分1054570)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 110920,
				            interval: 11092,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4923},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2393},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2130},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 852},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4504},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2798},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6492},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7593},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6912},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2562},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6921},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6667},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7163},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29181},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8383},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4771},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9000},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7321},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 23440},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10956},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8938},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10689},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16014},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3602},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14144},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19908},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 69818},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 110920},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 53820},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 51533},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 24566},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 50898},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 39486},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 39638},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28465},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8832},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9950},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9545},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8763},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9371},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10292},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 19010},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16451},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2120},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10673},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18169},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 37026},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19464},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 43122},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 70247},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 38941},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25193},
]},
],
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

                   text: '土土昕的PT構成(總分1054570)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 113245, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 584156, name: '強襲', legendMarkerType: 'square'},
{  y: 357169, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分983102)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 98298,
				            interval: 9829,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4004},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1895},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2341},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 702},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1390},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3004},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1371},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5031},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10186},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1719},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4397},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1904},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9308},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9369},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 25136},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1531},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9195},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2443},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11443},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9841},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5168},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3097},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10076},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10059},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 35082},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3984},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9003},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9076},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11851},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 19365},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17086},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 98298},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 31660},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 31845},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17118},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6654},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16996},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 31656},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 60282},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 28607},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 28688},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 42548},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 92757},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 22188},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 35216},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 43083},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21995},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 33852},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8874},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 21161},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9501},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 25184},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 24882},
]},
],
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

                   text: '秋風冷月的PT構成(總分983102)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 183676, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 709824, name: '強襲', legendMarkerType: 'square'},
{  y: 89602, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分905107)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 90131,
				            interval: 9013,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1270},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 13876},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 18047},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11802},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 47970},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 27311},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 49313},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 38476},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2197},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11138},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 27216},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 24165},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27448},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 29170},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 50612},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4385},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 53154},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 48830},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 37476},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17380},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21766},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 29365},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27234},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24971},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 22889},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 90131},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22684},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 24446},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 35437},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7276},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14046},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 20645},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7575},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15406},
]},
],
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

                   text: '依司瑪耳的PT構成(總分905107)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 840159, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15406, name: '強襲', legendMarkerType: 'square'},
{  y: 49542, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分846697)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 61707,
				            interval: 6170,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 18401},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 27563},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 23360},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11566},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 25203},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 49987},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17356},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 23407},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7123},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17027},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18262},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 26875},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 39124},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2336},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20078},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24630},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 30288},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24087},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7400},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13115},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18855},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 34433},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 37461},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 61707},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4278},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16302},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5032},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 36617},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 31712},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 30126},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3705},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11686},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10907},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8261},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17433},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18258},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17550},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4007},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8979},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20971},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21229},
]},
],
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

                   text: '魔法的PT構成(總分846697)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 703711, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 51179, name: '強襲', legendMarkerType: 'square'},
{  y: 91807, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分781845)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 67440,
				            interval: 6744,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15128},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7173},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13769},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8293},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14001},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25142},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 37943},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18732},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 34849},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22107},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 46767},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 46357},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28943},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8263},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4848},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1129},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 22},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7233},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2570},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6098},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1197},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1715},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10806},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2586},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7193},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3867},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3441},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10980},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33488},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17222},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13443},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16403},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3731},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12168},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6777},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28512},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 26148},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20753},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10605},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 26484},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25676},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 28093},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 67440},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 40232},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13518},
]},
],
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

                   text: '阿榮的PT構成(總分781845)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 168403, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 319204, name: '強襲', legendMarkerType: 'square'},
{  y: 294238, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分762714)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59264,
				            interval: 5926,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12591},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8371},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 23292},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 27399},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11275},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 23970},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 26338},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3142},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 18400},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 26209},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4425},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6659},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7083},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9346},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22871},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5942},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19017},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 38586},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10260},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 37842},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 54477},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 37539},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25248},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17793},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 40324},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 59050},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4927},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 48358},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 29429},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 59264},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13463},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14445},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6083},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3619},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5677},
]},
],
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

                   text: '藏月的PT構成(總分762714)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 719427, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 27908, name: '強襲', legendMarkerType: 'square'},
{  y: 15379, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分737202)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 74190,
				            interval: 7419,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15429},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17767},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 18058},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6500},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18427},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 34652},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22254},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 74190},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 735},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 29678},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14415},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 23325},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23277},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 37797},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 69593},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22135},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 27062},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18223},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 42875},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13632},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 45026},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 39388},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 68698},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14207},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7532},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11069},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8538},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12720},
]},
],
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

                   text: '亞歷的PT構成(總分737202)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 697343, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12720, name: '強襲', legendMarkerType: 'square'},
{  y: 27139, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分594602)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38639,
				            interval: 3863,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6411},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8794},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7274},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1396},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6512},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1904},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5865},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2113},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4283},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3009},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9354},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1563},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19366},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7458},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3461},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11816},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6503},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3653},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8760},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7247},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 24158},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12427},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7294},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22445},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1269},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8873},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 9292},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6895},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5933},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6614},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8683},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7164},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11263},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7834},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11096},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12797},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11246},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15146},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 27731},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 38418},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 29309},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19747},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 38639},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13685},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1100},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 21461},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 22829},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10282},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12324},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12141},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12428},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7144},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10193},
]},
],
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

                   text: '冰紅茶的PT構成(總分594602)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 212500, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 272200, name: '強襲', legendMarkerType: 'square'},
{  y: 109902, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分546699)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41920,
				            interval: 4192,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8374},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8851},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10727},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5691},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 33315},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14134},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 27261},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16696},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 20366},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20259},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12171},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6227},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8325},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3647},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 41920},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13336},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22208},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17815},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11866},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 34075},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 23701},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 18168},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2149},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 38582},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10725},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9455},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8417},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7358},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13177},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18537},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14391},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10240},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28302},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6233},
]},
],
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

                   text: '寇內爾緹的PT構成(總分546699)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 468996, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 59166, name: '強襲', legendMarkerType: 'square'},
{  y: 18537, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分110341)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25572,
				            interval: 2557,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13547},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3645},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14643},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12234},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6628},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5476},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7498},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2124},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2834},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16140},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25572},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分110341)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 55082, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 41712, name: '強襲', legendMarkerType: 'square'},
{  y: 13547, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分11367)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 5711,
				            interval: 571,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5711},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5656},
]},
],
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

                   text: '冰的PT構成(總分11367)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 11367, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '甜心寶貝胖龐龐的PT統計(總分1265571)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 126690,
				            interval: 12669,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "甜心寶貝胖龐龐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1745},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10383},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3084},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5868},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7589},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5332},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6858},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3969},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7702},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7222},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 27292},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1639},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8682},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17017},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5435},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 83},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8590},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2418},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8162},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "甜心寶貝胖龐龐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 19479},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 41206},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 28835},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 41331},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 33936},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 28384},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 32781},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 126690},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 27574},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 52180},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21825},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 42817},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 74399},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 38574},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 36545},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "甜心寶貝胖龐龐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8870},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 12558},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 15954},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3121},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22680},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 32259},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 58108},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 22796},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24317},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14621},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 64514},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 37841},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 32288},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 22235},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 30913},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 31649},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 45221},
]},
],
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

                   text: '甜心寶貝胖龐龐的PT構成(總分1265571)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 139070, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 646556, name: '強襲', legendMarkerType: 'square'},
{  y: 479945, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '沙撒比的PT統計(總分1180330)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 94113,
				            interval: 9411,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙撒比強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7272},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 23424},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 40458},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 44078},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 29601},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 34700},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 29654},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 32357},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 59258},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 41023},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 30381},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 51192},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 38561},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 94113},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 82950},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 43794},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙撒比殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11205},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 739},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8011},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5753},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16686},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5369},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5811},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 22319},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16320},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12235},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5698},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 74},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10796},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22133},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14182},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 33902},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8169},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 55},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3722},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10685},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6946},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙撒比CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9634},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21729},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 50070},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22928},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 63965},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 71418},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 36940},
]},
],
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

                   text: '沙撒比的PT構成(總分1180330)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 220830, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 682816, name: '強襲', legendMarkerType: 'square'},
{  y: 276684, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱的PT統計(總分1174797)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 107164,
				            interval: 10716,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 17603},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 26776},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6642},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 32159},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 47564},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 28564},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 26073},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 43209},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 69141},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 51400},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 25370},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 44934},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 50117},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16857},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25842},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 39811},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 30022},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 40946},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19940},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 45755},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23376},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31628},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 107164},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 71180},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 30420},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 64548},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22966},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 34463},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 37041},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 22324},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5848},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13434},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15630},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6050},
]},
],
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

                   text: '凱的PT構成(總分1174797)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1133835, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 40962, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '兔美菇菇醬的PT統計(總分1166892)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 78565,
				            interval: 7856,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "兔美菇菇醬殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 16514},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 18762},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10112},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 27100},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 40031},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 18165},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 25980},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 30930},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 78565},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 31149},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 40437},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 35857},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 39142},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 47335},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 30439},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24432},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21970},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 61027},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 61094},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 37784},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 28618},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30370},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 24586},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 61624},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 29517},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17112},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 50491},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 73027},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 68800},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28892},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "兔美菇菇醬CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11504},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14029},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18996},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "兔美菇菇醬強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12501},
]},
],
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

                   text: '兔美菇菇醬的PT構成(總分1166892)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1109862, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12501, name: '強襲', legendMarkerType: 'square'},
{  y: 44529, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿斯八樂[X]的PT統計(總分1145013)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 119799,
				            interval: 11979,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿斯八樂[X]強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5151},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9632},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 13060},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 33253},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 66288},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16630},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 41331},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 27624},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 33770},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 61198},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 119799},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 35968},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 24640},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 35670},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12442},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20913},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿斯八樂[X]殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9813},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9010},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6600},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8042},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2592},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7006},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6608},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2349},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29580},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7157},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8103},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13698},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7603},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15444},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9813},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 29132},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7185},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14018},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7473},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3922},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4925},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5212},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10703},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13335},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 39154},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11763},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4293},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿斯八樂[X]CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 16523},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 32127},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17644},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30650},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 48495},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 29654},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 118018},
]},
],
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

                   text: '阿斯八樂[X]的PT構成(總分1145013)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 294533, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 557369, name: '強襲', legendMarkerType: 'square'},
{  y: 293111, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Lunar的PT統計(總分1104076)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 84013,
				            interval: 8401,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Lunar殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9660},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 17444},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9913},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 28067},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 27834},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 43775},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 25786},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14573},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 24477},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20642},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 46712},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 84013},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 44960},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13910},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 35015},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 30529},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 64625},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 33494},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8297},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 47150},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 60316},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30579},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 68809},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 38431},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 28626},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20535},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1759},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14177},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 47414},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 68421},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "LunarCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2351},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12710},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6852},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13146},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19515},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 39559},
]},
],
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

                   text: 'Lunar的PT構成(總分1104076)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1009943, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 94133, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '紫月的PT統計(總分1057341)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 87392,
				            interval: 8739,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9045},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14002},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15025},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 55170},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 62368},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 33150},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 37051},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5203},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 23054},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 35491},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25170},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 52944},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 28565},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15939},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4316},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 327},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12915},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 40},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 40},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4520},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6429},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6203},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6953},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2987},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6940},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4844},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 29808},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14032},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 77},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12434},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7899},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8250},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16955},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5580},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 56},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 31503},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5759},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2379},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5492},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8055},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13231},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16606},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5332},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 80147},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23054},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 32303},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 45491},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5909},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 87392},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18377},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 34092},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 36023},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 42414},
]},
],
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

                   text: '紫月的PT構成(總分1057341)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 191246, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 453918, name: '強襲', legendMarkerType: 'square'},
{  y: 412177, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '米霍克的PT統計(總分1009422)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 81053,
				            interval: 8105,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米霍克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6612},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 272},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4314},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6753},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 691},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13609},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14852},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14693},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5160},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6135},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 24582},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32506},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14751},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4007},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22897},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4850},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 974},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7444},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1488},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 59},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米霍克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 24996},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 42116},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 27009},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 44655},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 24419},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 23511},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 26083},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 41310},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9328},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 31227},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 68759},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11159},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 42814},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 64311},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9690},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 81053},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 72607},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4596},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16461},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 22423},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "米霍克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 12396},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 64545},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25632},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 31673},
]},
],
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

                   text: '米霍克的PT構成(總分1009422)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 186649, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 688527, name: '強襲', legendMarkerType: 'square'},
{  y: 134246, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Hide的PT統計(總分980077)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58316,
				            interval: 5831,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Hide殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5374},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11350},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10193},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 40826},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 25910},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9534},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 25709},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 43728},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 37361},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 24778},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 32163},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 52008},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 34680},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9987},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20000},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15833},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21248},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 34691},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 58316},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 47629},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6283},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20497},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26768},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19461},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14869},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9530},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "HideCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7449},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 29177},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13329},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23240},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15916},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7293},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Hide強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9836},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 18282},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 24840},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9511},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 31790},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15304},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16809},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 26582},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 23117},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29804},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19072},
]},
],
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

                   text: 'Hide的PT構成(總分980077)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 658726, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 224947, name: '強襲', legendMarkerType: 'square'},
{  y: 96404, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Ace18的PT統計(總分969042)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45377,
				            interval: 4537,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ace18殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11496},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9852},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2701},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5981},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3959},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6577},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6208},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 761},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 28275},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6354},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 41974},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 31094},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13592},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 164},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7488},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 42186},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2757},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16220},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16771},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17060},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5829},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4073},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7216},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8295},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 23554},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11729},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14095},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 33972},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16462},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ace18CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 24394},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 20926},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13137},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32326},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21579},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 29739},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 41902},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ace18強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7310},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15751},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 17086},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3586},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16592},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 27662},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 36669},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11871},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 26253},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12752},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 36766},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13178},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 45377},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16450},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 43921},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26445},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 30675},
]},
],
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

                   text: 'Ace18的PT構成(總分969042)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 396695, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 388344, name: '強襲', legendMarkerType: 'square'},
{  y: 184003, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '《龍霸巧一》的PT統計(總分864400)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53394,
				            interval: 5339,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "《龍霸巧一》殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10393},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4451},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8757},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7629},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6794},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8483},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6995},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2390},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29945},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6890},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16524},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7114},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14730},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15459},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 29202},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3325},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8552},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3320},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3373},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10002},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13156},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8389},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2368},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8723},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12501},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 38665},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2291},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17103},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "《龍霸巧一》強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4693},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9921},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17461},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 31312},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29272},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11423},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 51186},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 29695},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3242},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12210},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 23205},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22130},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 53394},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 24056},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10764},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8795},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 36834},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20313},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 41474},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 24940},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "《龍霸巧一》CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 30790},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 36614},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 23152},
]},
],
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

                   text: '《龍霸巧一》的PT構成(總分864400)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 307524, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 466320, name: '強襲', legendMarkerType: 'square'},
{  y: 90556, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞蓮沃克的PT統計(總分617240)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 96253,
				            interval: 9625,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞蓮沃克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5749},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7507},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5673},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5933},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11692},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8093},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6060},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 27843},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13580},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7603},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11991},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9239},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11239},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4108},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25236},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5414},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3890},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞蓮沃克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10306},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14812},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 25234},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14019},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8706},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 28277},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 32477},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6017},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 21987},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 96253},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 36183},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 29588},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18423},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞蓮沃克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7683},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 25708},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 41179},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 29538},
]},
],
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

                   text: '亞蓮沃克的PT構成(總分617240)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 170850, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 342282, name: '強襲', legendMarkerType: 'square'},
{  y: 104108, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '加百列的PT統計(總分592040)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54929,
				            interval: 5492,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "加百列殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 16696},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5531},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 330},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 38},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11567},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 48229},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9377},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 31763},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 37509},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 54929},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15607},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15020},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10639},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13720},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17057},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16562},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 45482},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22831},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 58},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24806},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 1145},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 23409},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14916},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27029},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4246},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16968},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1883},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 46400},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15328},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 39593},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "加百列CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3372},
]},
],
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

                   text: '加百列的PT構成(總分592040)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 588668, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3372, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '夜焰的PT統計(總分542482)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 70133,
				            interval: 7013,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜焰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 22603},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7193},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 38378},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1225},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14492},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14249},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 21266},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15417},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 39145},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15190},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15586},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7490},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16597},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6293},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 50877},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 27638},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6930},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 70133},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 36283},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 859},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21596},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18612},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 28392},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6576},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11263},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜焰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13161},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15038},
]},
],
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

                   text: '夜焰的PT構成(總分542482)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 514283, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28199, name: 'CBC', legendMarkerType: 'square'},
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
				            text: 'Pitt的PT統計(總分486749)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 78314,
				            interval: 7831,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Pitt殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12694},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 28530},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11912},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13261},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 44086},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 35576},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 60084},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17335},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5040},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 26117},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 821},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13432},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 36711},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 35309},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 78314},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20902},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5720},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 24702},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "PittCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16203},
]},
],
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

                   text: 'Pitt的PT構成(總分486749)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 470546, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16203, name: 'CBC', legendMarkerType: 'square'},
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
				            text: 'Jp (萊）的PT統計(總分466801)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53447,
				            interval: 5344,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jp (萊）殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1108},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2764},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1336},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8107},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6099},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1674},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7454},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1791},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6787},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6572},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4124},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7563},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3075},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3065},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32880},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4737},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6150},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5004},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6874},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jp (萊）強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9341},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1707},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10205},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22671},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7831},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21830},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9813},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22848},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jp (萊）CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6815},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 21912},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 34430},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 18941},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 37488},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19539},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29961},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20829},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 53447},
]},
],
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

                   text: 'Jp (萊）的PT構成(總分466801)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 117193, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 106246, name: '強襲', legendMarkerType: 'square'},
{  y: 243362, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '加西亞的PT統計(總分295013)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38189,
				            interval: 3818,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "加西亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5786},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2831},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6143},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2273},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10589},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7534},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11008},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 18850},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 19451},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5256},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4028},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13319},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3074},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 38189},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 48},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 72},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22224},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 50},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2360},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23936},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5809},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 891},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 26},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5578},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13780},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2689},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 54},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15532},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25020},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13138},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "加西亞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6507},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8968},
]},
],
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

                   text: '加西亞的PT構成(總分295013)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 279538, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15475, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '香吉士的PT統計(總分22269)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12840,
				            interval: 1284,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "香吉士殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12840},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6233},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3196},
]},
],
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

                   text: '香吉士的PT構成(總分22269)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 22269, name: '殲滅', legendMarkerType: 'triangle'},
			]
		}
		]
	});
	PlayerPieChart37.render();
}
