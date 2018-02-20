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
				
				            maximum: 723779,
				            interval: 72377,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 146590},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 150288},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 163329},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 211830},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 241603},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 274261},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 255641},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 303996},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 279165},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 281244},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 318168},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 275496},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 345618},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 342364},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 355645},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 416882},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 554686},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 549361},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 425053},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 481032},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 648042},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 553939},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 416562},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 568156},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 575700},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 513413},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 475523},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 565577},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 528734},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 412470},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 5142},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 197251},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 191484},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 239284},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 209874},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 275761},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 309915},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 364553},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 323308},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 457030},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 447761},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 520140},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 439677},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 420334},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 491745},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 473393},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 519676},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 493015},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 511770},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 566257},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 532015},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 560896},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 561285},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 451953},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 443928},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 532213},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 604273},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 694782},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 723779},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 684566},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 529140},
]},
],
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
				
				            maximum: 25406568,
				            interval: 2540656,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 146590},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 296878},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 460207},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 672037},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 913640},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1187901},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1443542},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1747538},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2026703},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2307947},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2626115},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2901611},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3247229},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3589593},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3945238},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4362120},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4916806},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5466167},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5891220},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6372252},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7020294},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7574233},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7990795},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8558951},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9134651},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9648064},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10123587},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10689164},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11217898},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11630368},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 11635510},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 197251},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 388735},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 628019},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 837893},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1113654},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1423569},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1788122},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2111430},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2568460},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3016221},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3536361},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3976038},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4396372},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4888117},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5361510},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5881186},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6374201},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6885971},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7452228},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7984243},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8545139},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9106424},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9558377},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10002305},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10534518},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11138791},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11833573},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12557352},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13241918},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13771058},
]},
],
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
				
				            maximum: 527645,
				            interval: 52764,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 22091},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 29839},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 21609},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15811},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 48959},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 49930},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 23523},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 54339},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 46075},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 56399},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 76852},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 47297},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 43247},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 64775},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 54035},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17328},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 89412},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 86159},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 42869},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 89366},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 297928},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 150916},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 28915},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 158124},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 117648},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 104953},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 133527},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 230672},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 227019},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 152628},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 1764},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 27810},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 20626},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 31479},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 31876},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 46211},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 38686},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 35171},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 36728},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 38229},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 41121},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 57051},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 45468},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 52594},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 52892},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 47891},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 87096},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 138223},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 136166},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 113598},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 119633},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 121263},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 105806},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 66496},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 144452},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 113005},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 150681},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 128034},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 131106},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 81448},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 91235},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 3378},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 22203},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 31572},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 34858},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 36464},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 39307},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 49618},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 63733},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 47809},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 56635},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 65042},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 65353},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 66425},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 36008},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 35397},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 35464},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 61619},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 40150},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 53029},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 51273},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 85334},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 61492},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 50324},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 77845},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 54728},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 57530},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 83155},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 69349},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 94982},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 124317},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 112995},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 154383},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 137148},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 155552},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 149917},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 164802},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 179451},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 227180},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 219068},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 275797},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 332758},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 380444},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 313117},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 362172},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 410768},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 404259},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 391843},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 377975},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 431962},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 465032},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 355960},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 421565},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 446891},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 298642},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 356231},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 427116},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 418759},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 509931},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 527645},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 425656},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 301775},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 96689},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 99823},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 110241},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 164143},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 146433},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 185645},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 196947},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 212929},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 194861},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 183724},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 184265},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 182731},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 249777},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 224697},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 253719},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 312458},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 327051},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 327036},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 268586},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 272033},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 228851},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 297217},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 321151},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 265580},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 345047},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 257779},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 213962},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 203799},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 220267},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 168607},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 20665},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 22764},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 48874},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 23493},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 71652},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 80846},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 73640},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 56431},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 124598},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 49961},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 74343},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 60135},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22154},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 45580},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 33670},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 66214},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 74890},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 26779},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 49952},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 90721},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 77839},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 64070},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 75466},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32969},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 47567},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 102359},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 115502},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 101152},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 134593},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 114370},
]},
],
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
				            text: '雪歌的PT統計(總分760848)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 79804,
				            interval: 7980,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3828},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2243},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8628},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8254},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1845},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 767},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5079},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5270},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6431},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4163},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8172},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3402},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2258},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6673},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9171},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 27},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9103},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7573},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2343},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6192},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6732},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6416},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6201},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2493},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9943},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1049},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14267},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1401},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10440},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5933},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12858},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16953},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18475},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14620},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11571},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24106},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 62815},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 30999},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 46474},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 35189},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 79804},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 36690},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 65444},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 21799},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9291},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16856},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 27532},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 28915},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 34160},
]},
],
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

                   text: '雪歌的PT構成(總分760848)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 134256, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 116754, name: '強襲', legendMarkerType: 'square'},
{  y: 509838, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分723247)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54238,
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
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9029},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10966},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 54238},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31608},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25873},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 22210},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7204},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5351},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8289},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4779},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10917},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13707},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7710},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11642},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 26567},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 24927},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5516},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8458},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9119},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6524},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5138},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15442},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16028},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9491},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20936},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6447},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9996},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8088},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19953},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 36756},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19766},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4348},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8251},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14740},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7874},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5533},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13495},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8797},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15648},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16130},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 24727},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 24750},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 22407},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 25309},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 35050},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 23513},
]},
],
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

                   text: '依司瑪耳的PT構成(總分723247)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 353964, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 215359, name: '強襲', legendMarkerType: 'square'},
{  y: 153924, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫嫣的PT統計(總分694830)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 90980,
				            interval: 9098,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3228},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4234},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10481},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 1764},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8222},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6148},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5278},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5876},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9043},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10503},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9854},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2793},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8210},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12672},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12370},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6504},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7478},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15017},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16386},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4570},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12301},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9472},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 38244},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 70958},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 51873},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 90980},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 59573},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 36324},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 20140},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11635},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14624},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7441},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15317},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6574},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5133},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4055},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11299},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15078},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17597},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16064},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19517},
]},
],
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

                   text: '紫嫣的PT構成(總分694830)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 586380, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19707, name: '強襲', legendMarkerType: 'square'},
{  y: 88743, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分673215)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 80093,
				            interval: 8009,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4880},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3827},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5995},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4780},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8612},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 435},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1986},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7015},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4988},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7483},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2610},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9627},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7840},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 659},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7645},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8110},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1867},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17659},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 2477},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8701},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6044},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10398},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10103},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5832},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17490},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15590},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9390},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3959},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10173},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6658},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8531},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20923},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6462},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5207},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7684},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12694},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 21675},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21087},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 58933},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19081},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 31958},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11012},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4865},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7470},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11496},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11853},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8818},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5495},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 27143},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 35500},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 80093},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 42402},
]},
],
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

                   text: '凱爾的PT構成(總分673215)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 206175, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 235135, name: '強襲', legendMarkerType: 'square'},
{  y: 231905, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '暗之武者的PT統計(總分660946)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43971,
				            interval: 4397,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5799},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6429},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3503},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8640},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9761},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8986},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8589},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11280},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6573},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10364},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11579},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12126},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8033},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14455},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 32382},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 41055},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 40562},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16022},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9413},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9531},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18815},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13163},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16376},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31911},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 35521},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18965},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 30},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7683},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5941},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3662},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8651},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3735},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6176},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5433},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6131},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6269},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 43971},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6110},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5765},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12529},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15985},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 41354},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19797},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 31588},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20303},
]},
],
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

                   text: '暗之武者的PT構成(總分660946)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 423487, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 84028, name: '強襲', legendMarkerType: 'square'},
{  y: 153431, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '龍的PT統計(總分648331)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56476,
				            interval: 5647,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3802},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3362},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8197},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10285},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1699},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9735},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7343},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10224},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6185},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8738},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4926},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8822},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10615},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20890},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 38156},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 47478},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 34821},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18802},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12293},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10682},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6887},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21144},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6204},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19230},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8274},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7352},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12431},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 23117},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12978},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1720},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4456},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9818},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5843},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2611},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10134},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18344},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14798},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 56476},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19930},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20877},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26168},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18640},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2917},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3153},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10533},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10400},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16841},
]},
],
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

                   text: '龍的PT構成(總分648331)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 394672, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 209815, name: '強襲', legendMarkerType: 'square'},
{  y: 43844, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分623823)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37653,
				            interval: 3765,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5753},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3017},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11546},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 24588},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3050},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5550},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 26167},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10063},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 26863},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 25},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5910},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10240},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6412},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15757},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7073},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13359},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 37653},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22588},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7366},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 26049},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11023},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 100},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12922},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14092},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12026},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11059},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9789},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12091},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16374},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5349},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2717},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8264},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6335},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12165},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5720},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6631},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5385},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7340},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21959},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19377},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20111},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 32588},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4411},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4275},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6618},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6021},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6299},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12014},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8537},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17794},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19399},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16009},
]},
],
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

                   text: '嘎喵的PT構成(總分623823)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 373854, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 148592, name: '強襲', legendMarkerType: 'square'},
{  y: 101377, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '迪克的PT統計(總分611761)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31288,
				            interval: 3128,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10145},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8709},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4960},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9237},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7989},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5103},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10791},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7621},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11631},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8074},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13127},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 28720},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6891},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6244},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7679},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10846},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8809},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19806},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11434},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14668},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8932},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9895},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13970},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12052},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15617},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12193},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21318},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7253},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17156},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11990},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3934},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11010},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 17788},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14373},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31288},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29703},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18470},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7880},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13617},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12299},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11592},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13976},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5973},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 29435},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 24414},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23149},
]},
],
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

                   text: '迪克的PT構成(總分611761)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 342860, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 126566, name: '強襲', legendMarkerType: 'square'},
{  y: 142335, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡特爾的PT統計(總分597364)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39068,
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
                                    name: "卡特爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5332},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5757},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10761},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17220},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 39068},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 38611},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13201},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 3378},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6920},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1929},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5226},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9780},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9491},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5546},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6065},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7592},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11222},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5997},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3883},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7565},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8606},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5574},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16306},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20211},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 31486},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 29552},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 30841},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10617},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 1001},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 27907},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 38457},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14466},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16977},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7606},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6909},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14592},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10416},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7531},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6198},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6776},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20051},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19339},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 31401},
]},
],
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

                   text: '卡特爾的PT構成(總分597364)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 372740, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 91296, name: '強襲', legendMarkerType: 'square'},
{  y: 133328, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '湖光的PT統計(總分587110)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40094,
				            interval: 4009,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6215},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8550},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16635},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5841},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19123},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20969},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20461},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 40094},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 29926},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28046},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5222},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8682},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 23207},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22821},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12561},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5155},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6485},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5810},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7454},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7259},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11631},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4471},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8181},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1044},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4197},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7215},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6870},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5058},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18658},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 37378},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27489},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19649},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13487},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7100},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6753},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10539},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6668},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11195},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20276},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19130},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5882},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7998},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15110},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10615},
]},
],
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

                   text: '湖光的PT構成(總分587110)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 318757, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 72493, name: '強襲', legendMarkerType: 'square'},
{  y: 195860, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '裁風的PT統計(總分580307)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36669,
				            interval: 3666,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9710},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6462},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5319},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5315},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5309},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12504},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10071},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7685},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11003},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 791},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 21991},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 31872},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29925},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22182},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5650},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19131},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8210},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17766},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16444},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15167},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21237},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9647},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13910},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7197},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19441},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2530},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14229},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13419},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14991},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6129},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7809},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10186},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10774},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 21443},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23980},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18012},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2701},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6260},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4679},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18002},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24610},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9945},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 36669},
]},
],
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

                   text: '裁風的PT構成(總分580307)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 379108, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 98333, name: '強襲', legendMarkerType: 'square'},
{  y: 102866, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分561106)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29630,
				            interval: 2963,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7777},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6881},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9113},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3042},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22038},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25361},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21468},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29630},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20637},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5396},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7076},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5904},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8034},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2345},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4620},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3181},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2461},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10459},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 23554},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6671},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 897},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19457},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23413},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2528},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10213},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17916},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7320},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14976},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4044},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6349},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6020},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15103},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7148},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13227},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14059},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5377},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4375},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19989},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10302},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7251},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6281},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7074},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8379},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18385},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 28697},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 24457},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7279},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 24942},
]},
],
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

                   text: '羽龍的PT構成(總分561106)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 282414, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 145947, name: '強襲', legendMarkerType: 'square'},
{  y: 132745, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無銘的PT統計(總分553716)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47464,
				            interval: 4746,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3869},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6226},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2731},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8085},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4084},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8392},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9514},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11059},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16241},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15283},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26241},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14102},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20605},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6717},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1039},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5880},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1591},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6749},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 50},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9786},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6358},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4227},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6697},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 17586},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7034},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 35253},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16156},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 31772},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13869},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17497},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 47464},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17564},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6646},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14125},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5568},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13954},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2942},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14821},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3590},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11918},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11482},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7051},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4819},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6031},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17748},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 22201},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11099},
]},
],
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

                   text: '無銘的PT構成(總分553716)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 345386, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 146432, name: '強襲', legendMarkerType: 'square'},
{  y: 61898, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分546937)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29410,
				            interval: 2941,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4295},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5380},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6403},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11136},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18184},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17174},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20656},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11230},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4170},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6069},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7218},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 16291},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10572},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 26815},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16591},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 29410},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10017},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16926},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14095},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 27332},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22513},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8342},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4431},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15768},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19969},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7193},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12806},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21725},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10668},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14491},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5275},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16579},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21522},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8419},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16764},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3034},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16553},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15101},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3473},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3923},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4957},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13467},
]},
],
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

                   text: '冰的PT構成(總分546937)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 426659, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 94458, name: '強襲', legendMarkerType: 'square'},
{  y: 25820, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Abbey的PT統計(總分516647)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31546,
				            interval: 3154,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3183},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5897},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6041},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2069},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6468},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 21615},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13182},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17884},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4231},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7808},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12467},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4821},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5961},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2433},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5182},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15089},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6752},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13038},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5969},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11262},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12333},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10514},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10486},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8455},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11296},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10136},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10686},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15529},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9776},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4947},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AbbeyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9490},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4148},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22984},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19180},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Abbey強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12779},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11606},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 21621},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11778},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12991},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 20288},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20048},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25532},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17146},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 31546},
]},
],
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

                   text: 'Abbey的PT構成(總分516647)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 275510, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 185335, name: '強襲', legendMarkerType: 'square'},
{  y: 55802, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽西的PT統計(總分484191)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39282,
				            interval: 3928,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8527},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3630},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2791},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6757},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 19341},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 25627},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 25739},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 39282},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13550},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11874},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7194},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1217},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10878},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11138},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2552},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10979},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7186},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10103},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16610},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7669},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9385},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6883},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10340},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13232},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9099},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10504},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9590},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8328},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6333},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15037},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3495},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5334},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6714},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18445},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20333},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17003},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19383},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 24047},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16876},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11186},
]},
],
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

                   text: '賽西的PT構成(總分484191)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 341375, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 131630, name: '強襲', legendMarkerType: 'square'},
{  y: 11186, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西沙斯的PT統計(總分480420)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51620,
				            interval: 5162,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6695},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8269},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1635},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5106},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10675},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4541},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13518},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12529},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15653},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 21812},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15937},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12035},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12977},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1362},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12675},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6397},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11519},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6759},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12870},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12866},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11838},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13779},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7149},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11811},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7386},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14880},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9834},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19887},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4097},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14557},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25833},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1484},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15701},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 32890},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31844},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 51620},
]},
],
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

                   text: '西沙斯的PT構成(總分480420)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 250407, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 133539, name: '強襲', legendMarkerType: 'square'},
{  y: 96474, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'gotice的PT統計(總分473998)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38130,
				            interval: 3813,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2693},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5884},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6839},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8421},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8997},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4773},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7403},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5977},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9869},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9380},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2387},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10943},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8313},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8510},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9765},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11570},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7315},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19536},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12216},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21190},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7593},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 25266},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 37394},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20621},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 38130},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16359},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10193},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14358},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7091},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10156},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2709},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3767},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2557},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14204},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7852},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14885},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16509},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 27540},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "goticeCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1662},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3773},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5147},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4251},
]},
],
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

                   text: 'gotice的PT構成(總分473998)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 369142, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 90023, name: '強襲', legendMarkerType: 'square'},
{  y: 14833, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分457431)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40047,
				            interval: 4004,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6235},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10514},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3457},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12045},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10517},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16574},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12623},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7322},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16478},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11771},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 40047},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 883},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9703},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9625},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14569},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5938},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7803},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2838},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3368},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10039},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10375},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12624},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7542},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25071},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20582},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8932},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17236},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9116},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8963},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2682},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4588},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11955},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14980},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16451},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18178},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16424},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9506},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5090},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3534},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3866},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17387},
]},
],
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

                   text: '葬月的PT構成(總分457431)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 332790, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 94764, name: '強襲', legendMarkerType: 'square'},
{  y: 29877, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分399282)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41257,
				            interval: 4125,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1888},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 919},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4602},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9569},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 54},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16207},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5103},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7096},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3450},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 919},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 524},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9992},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1868},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7180},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6379},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12598},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6351},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12970},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8879},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9445},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6982},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5899},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11814},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7779},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12397},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13040},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12367},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4886},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4955},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7871},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5644},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11209},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8424},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12596},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8205},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3824},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8431},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 41257},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19792},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16550},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7164},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 28567},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13636},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分399282)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 206112, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 143803, name: '強襲', legendMarkerType: 'square'},
{  y: 49367, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '傻的嗎的PT統計(總分762418)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50953,
				            interval: 5095,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傻的嗎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9291},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7514},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12847},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9359},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9787},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11107},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5424},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8359},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8496},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 40781},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 24202},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 32690},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 50953},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27834},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7420},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5929},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27118},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 42835},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 30308},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10932},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21719},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 38157},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 37339},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1032},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26353},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 45168},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20025},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10980},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16017},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傻的嗎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2823},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4325},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10925},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19031},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11521},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16379},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傻的嗎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5859},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16852},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8350},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8328},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3651},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7609},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16162},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17546},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13081},
]},
],
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

                   text: '傻的嗎的PT構成(總分762418)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 599976, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 97438, name: '強襲', legendMarkerType: 'square'},
{  y: 65004, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '蒼月的PT統計(總分761423)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56374,
				            interval: 5637,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蒼月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7805},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8648},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14695},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6683},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9739},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10089},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 27689},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 29309},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 40222},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17068},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8997},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18524},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16386},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8014},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2976},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13388},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13100},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 37104},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 37235},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 28713},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 32249},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31523},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19482},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9538},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 44940},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 56374},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 34260},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 36392},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12185},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蒼月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8438},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12774},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25826},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11724},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21333},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蒼月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3591},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9673},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8720},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4652},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9393},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11972},
]},
],
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

                   text: '蒼月的PT構成(總分761423)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 633327, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 80095, name: '強襲', legendMarkerType: 'square'},
{  y: 48001, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾佛烈的PT統計(總分758545)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49988,
				            interval: 4998,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6179},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11428},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2032},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13970},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11071},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11208},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6735},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11787},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6037},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10717},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16267},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9201},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8313},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4746},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16468},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 41922},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7375},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17611},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 32461},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1627},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 36104},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 38699},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19640},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 31245},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 28135},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11863},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 35086},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 49988},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 26117},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17164},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5229},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6331},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7373},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 22456},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12484},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4950},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12740},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12010},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11914},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19657},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2722},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4728},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10626},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12451},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13585},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10623},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6949},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9958},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11367},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9815},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9381},
]},
],
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

                   text: '艾佛烈的PT構成(總分758545)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 541196, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 115144, name: '強襲', legendMarkerType: 'square'},
{  y: 102205, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '沙撒比的PT統計(總分740183)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 55176,
				            interval: 5517,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙撒比殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9876},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10081},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3238},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8620},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8398},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13299},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5594},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9851},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7859},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11576},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5925},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5968},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 33249},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 39531},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 38960},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5834},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6341},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10903},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16031},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 33743},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 33137},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14851},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20067},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19002},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 35249},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 55176},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13788},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5843},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14996},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 24529},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙撒比強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8343},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2591},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11709},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10120},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16502},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9712},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙撒比CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8306},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10919},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9079},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14001},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14573},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 27121},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12109},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10183},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5325},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11310},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13722},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23043},
]},
],
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

                   text: '沙撒比的PT構成(總分740183)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 521515, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 58977, name: '強襲', legendMarkerType: 'square'},
{  y: 159691, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '軲轆的PT統計(總分737384)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45067,
				            interval: 4506,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "軲轆殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6263},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7241},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9111},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2120},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9215},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4762},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3934},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10139},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6026},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 23161},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 38372},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8621},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13484},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3996},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7037},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17423},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 20596},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 30041},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 45067},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 25328},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14235},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 42325},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16236},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9700},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7197},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18040},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21767},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 44109},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 27899},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12393},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "軲轆強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7090},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2144},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9449},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12406},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7334},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15458},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13823},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6287},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4759},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12822},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18142},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12343},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8358},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11572},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 26052},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "軲轆CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13689},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11762},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13685},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5504},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7824},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11043},
]},
],
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

                   text: '軲轆的PT構成(總分737384)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 505838, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 168039, name: '強襲', legendMarkerType: 'square'},
{  y: 63507, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Skyz的PT統計(總分734646)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 76114,
				            interval: 7611,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Skyz殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11845},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6871},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9331},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10621},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7042},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11612},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8875},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5184},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15481},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11970},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14802},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13495},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 21492},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 76114},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 52046},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 58031},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18208},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10473},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3296},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17120},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22231},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7687},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6838},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 32044},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 41791},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20029},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 43366},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14365},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SkyzCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8174},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9344},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11046},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 18157},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11804},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10330},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12687},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11366},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Skyz強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11373},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11506},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1745},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12319},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12176},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10768},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9591},
]},
],
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

                   text: 'Skyz的PT構成(總分734646)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 572260, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 69478, name: '強襲', legendMarkerType: 'square'},
{  y: 92908, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Dot的PT統計(總分717037)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35851,
				            interval: 3585,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "DotCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9764},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5406},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7767},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10690},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12407},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8111},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20764},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8930},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5382},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9327},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17374},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 35851},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dot殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1707},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3733},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9381},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11793},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4852},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10572},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15930},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8624},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10516},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 25159},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 29532},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 34020},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7199},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6811},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23436},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15290},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 23222},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 28727},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7075},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17172},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17843},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 34344},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 35640},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 20895},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12209},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 28740},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 33705},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 168},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6785},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dot強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6321},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7920},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6068},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4670},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4702},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8832},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11950},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9305},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20416},
]},
],
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

                   text: 'Dot的PT構成(總分717037)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 485080, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 80184, name: '強襲', legendMarkerType: 'square'},
{  y: 151773, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡歐的PT統計(總分714181)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43340,
				            interval: 4334,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡歐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8747},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6606},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7638},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7107},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7039},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5315},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10570},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5306},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 17839},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 22145},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 43340},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5756},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 51},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11908},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11180},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5319},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 25729},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6046},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17317},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3119},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 33523},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 41431},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 30922},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16304},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21816},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18749},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 25408},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26224},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 26100},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 24311},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡歐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11232},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4995},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8798},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6125},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7477},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12846},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16033},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 33379},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6491},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7340},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20546},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡歐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4891},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8552},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8945},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14875},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9526},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9664},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14922},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5941},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8738},
]},
],
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

                   text: '卡歐的PT構成(總分714181)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 492865, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 86054, name: '強襲', legendMarkerType: 'square'},
{  y: 135262, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冬日黎明的PT統計(總分711020)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41298,
				            interval: 4129,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冬日黎明CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 15966},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8825},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7632},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7061},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6563},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13853},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12498},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10931},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12254},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12976},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 36686},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 41298},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19034},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冬日黎明殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9561},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10972},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9142},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 15486},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5565},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15733},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8993},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11463},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20362},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18635},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 21457},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11771},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9142},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2706},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 34200},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13038},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19972},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 32851},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 36158},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20091},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8899},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6988},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17929},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5123},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10401},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22651},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16718},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10054},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3096},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冬日黎明強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11145},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12716},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5811},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 26742},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8864},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11008},
]},
],
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

                   text: '冬日黎明的PT構成(總分711020)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 429157, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 76286, name: '強襲', legendMarkerType: 'square'},
{  y: 205577, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '哭哭★以撒的PT統計(總分692820)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51596,
				            interval: 5159,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哭哭★以撒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8330},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3637},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7838},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7546},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9656},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14802},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12389},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13855},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 19754},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13888},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 33480},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 35861},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7978},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4148},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12050},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 21511},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 32171},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 33163},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17313},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 51596},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 37502},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19105},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19183},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9396},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10984},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13600},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10417},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26905},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 32143},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13873},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哭哭★以撒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8281},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4589},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6733},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12901},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 28720},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15406},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哭哭★以撒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6263},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16410},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4878},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13736},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7478},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13351},
]},
],
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

                   text: '哭哭★以撒的PT構成(總分692820)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 554074, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 62116, name: '強襲', legendMarkerType: 'square'},
{  y: 76630, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羅蘭的PT統計(總分680394)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44456,
				            interval: 4445,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅蘭強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4953},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4954},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9403},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4477},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7531},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8438},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10441},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13280},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7347},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28859},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅蘭殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6028},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3774},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8204},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5444},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11455},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 416},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 22917},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16890},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10765},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17737},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13604},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13687},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 44456},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 38350},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 40014},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 44369},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19401},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16461},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 29710},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11481},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21093},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31967},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8383},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10513},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7300},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 31829},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 39174},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 26531},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6947},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅蘭CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4431},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3653},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7568},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6159},
]},
],
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

                   text: '羅蘭的PT構成(總分680394)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 558900, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 99683, name: '強襲', legendMarkerType: 'square'},
{  y: 21811, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '大香豬的PT統計(總分673964)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37038,
				            interval: 3703,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大香豬殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9788},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7935},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6930},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2124},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4403},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13722},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16690},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7389},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9782},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9641},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10236},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9270},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 23050},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 34006},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22946},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 33588},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9552},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20810},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 24655},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 22008},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25330},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 27547},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21742},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15938},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 37038},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 35554},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6138},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12727},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5679},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16147},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大香豬CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6293},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11533},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11909},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 22635},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大香豬強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6598},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16631},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16671},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12578},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2556},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8017},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11442},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10319},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11887},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 22530},
]},
],
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

                   text: '大香豬的PT構成(總分673964)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 502365, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 119229, name: '強襲', legendMarkerType: 'square'},
{  y: 52370, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '蘭斯特的PT統計(總分667323)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36227,
				            interval: 3622,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蘭斯特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6574},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5487},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2558},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3687},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5657},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5397},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5327},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7843},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13250},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10081},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14545},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8700},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6977},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 34057},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 36227},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14229},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12684},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6714},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20701},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8292},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14928},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 29},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29777},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 33090},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 22597},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 33956},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18819},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18790},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17505},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蘭斯特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5816},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9182},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10962},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12089},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12050},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12243},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4219},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9209},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11951},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 22049},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23786},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8268},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蘭斯特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14416},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13336},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11329},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14144},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11336},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 26068},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16392},
]},
],
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

                   text: '蘭斯特的PT構成(總分667323)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 418478, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 141824, name: '強襲', legendMarkerType: 'square'},
{  y: 107021, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '桐人的PT統計(總分660224)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51659,
				            interval: 5165,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "桐人強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10869},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9155},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9898},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3684},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9273},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10814},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15396},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10577},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 35152},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "桐人殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12142},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8482},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 13845},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5573},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5822},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9659},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11271},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16432},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12130},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7483},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14904},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13770},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 42564},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16239},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23472},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7795},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17203},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20063},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19161},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14849},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20351},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5905},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3149},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8173},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 51659},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 44517},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 51312},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 27215},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5728},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5402},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "桐人CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4329},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5012},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7273},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7313},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5209},
]},
],
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

                   text: '桐人的PT構成(總分660224)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 516270, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 114818, name: '強襲', legendMarkerType: 'square'},
{  y: 29136, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小天的PT統計(總分655480)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46828,
				            interval: 4682,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6398},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9094},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4328},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10155},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15349},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10595},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10039},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6127},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11682},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3985},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9391},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18680},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 43458},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3789},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6715},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12075},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22208},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 29178},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21392},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17789},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3537},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5990},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18677},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 46828},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30033},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12923},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25386},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 44137},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 31628},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9697},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7102},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7933},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12184},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10657},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8055},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15974},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9913},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6809},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5574},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9609},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4680},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10020},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7830},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4518},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6318},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7344},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9918},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9779},
]},
],
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

                   text: '小天的PT構成(總分655480)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 491566, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 71602, name: '強襲', legendMarkerType: 'square'},
{  y: 92312, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '萊姆布丁的PT統計(總分643281)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36149,
				            interval: 3614,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊姆布丁殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9093},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7417},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3367},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12969},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12405},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10792},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16227},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14167},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16920},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 25295},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 30723},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 23371},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6926},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19436},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9792},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 26953},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 35969},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15999},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5903},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 29686},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 36149},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12848},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9750},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2167},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9872},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12191},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1484},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20910},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25646},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14921},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊姆布丁強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11610},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10404},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10761},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2894},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2472},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10658},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12157},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16491},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊姆布丁CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11926},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12508},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8901},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10929},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17125},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11367},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13730},
]},
],
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

                   text: '萊姆布丁的PT構成(總分643281)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 479348, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 77447, name: '強襲', legendMarkerType: 'square'},
{  y: 86486, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '不同角度的世界的PT統計(總分630456)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47312,
				            interval: 4731,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不同角度的世界CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5322},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8983},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2284},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11834},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14249},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20069},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不同角度的世界殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10302},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10694},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9300},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2619},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5108},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5634},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5945},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 42110},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7338},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 30985},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9237},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10252},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3958},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12293},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 591},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7914},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24454},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 27205},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 26576},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 26429},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14022},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18278},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18994},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 47312},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18880},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 27708},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10942},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7118},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不同角度的世界強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6996},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8239},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10018},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12607},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8095},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13195},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4715},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1195},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17851},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11188},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11464},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19954},
]},
],
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

                   text: '不同角度的世界的PT構成(總分630456)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 442198, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 125517, name: '強襲', legendMarkerType: 'square'},
{  y: 62741, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Almis的PT統計(總分621824)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42130,
				            interval: 4213,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1128},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4125},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9063},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11812},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9834},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10382},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4998},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11311},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16413},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14128},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14160},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18817},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 26760},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29571},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 39096},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27640},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16476},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 28114},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 27641},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7547},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7245},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16088},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11497},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10070},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9335},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7811},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26995},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 38451},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 42130},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20345},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Almis強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6657},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9399},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7103},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8973},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10777},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13251},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14595},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AlmisCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4417},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5871},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5636},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16162},
]},
],
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

                   text: 'Almis的PT構成(總分621824)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 518983, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 70755, name: '強襲', legendMarkerType: 'square'},
{  y: 32086, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾蕾爾的PT統計(總分608209)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47821,
				            interval: 4782,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6596},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10154},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6638},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5348},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7535},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5341},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10025},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12635},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10656},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 18022},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2581},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7543},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15793},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 47821},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14440},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31558},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19341},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3930},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17221},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6791},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6664},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10047},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 28064},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18736},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15868},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5508},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26523},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7036},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17172},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾蕾爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6290},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7319},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9744},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12562},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22645},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11307},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13597},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14665},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20615},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾蕾爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7579},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9166},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10951},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7841},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7706},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 34661},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15974},
]},
],
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

                   text: '艾蕾爾的PT構成(總分608209)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 395587, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 118744, name: '強襲', legendMarkerType: 'square'},
{  y: 93878, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嫩咖王的PT統計(總分600246)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47171,
				            interval: 4717,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嫩咖王殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6730},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4227},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8564},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9052},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5251},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4954},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10623},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5010},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9432},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11013},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14001},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12431},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3835},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6250},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3843},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 833},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8571},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 34104},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13095},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3613},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15673},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 25914},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 47171},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20794},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12055},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4441},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19716},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12926},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10822},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19872},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嫩咖王強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2530},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14824},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9674},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15897},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5894},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5211},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11657},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9868},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11210},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13739},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26880},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 22435},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嫩咖王CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7719},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14686},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17826},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5889},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18031},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21460},
]},
],
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

                   text: '嫩咖王的PT構成(總分600246)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 364816, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 149819, name: '強襲', legendMarkerType: 'square'},
{  y: 85611, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
