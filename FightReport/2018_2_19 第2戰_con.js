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
				
				            maximum: 660285,
				            interval: 66028,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 174595},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 220829},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 297635},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 221976},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 250098},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 274605},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 262080},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 325922},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 296294},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 238658},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 250654},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 246857},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 236251},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 271704},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 272379},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 463345},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 508830},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 524313},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 419445},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 541412},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 435716},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 546864},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 494742},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 557957},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 562741},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 478797},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 554921},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 534290},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 612442},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 440438},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 7877},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 152667},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 170519},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 178607},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 177323},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 174842},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 262307},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 251184},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 267734},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 273461},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 491052},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 512581},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 569099},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 342219},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 438091},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 446045},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 571868},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 438216},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 349565},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 443405},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 367825},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 513259},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 609760},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 548273},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 411005},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 431449},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 476000},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 633794},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 660285},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 521917},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 557396},
]},
],
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
				
				            maximum: 23766415,
				            interval: 2376641,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 174595},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 395424},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 693059},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 915035},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1165133},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1439738},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1701818},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2027740},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2324034},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2562692},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2813346},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3060203},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3296454},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3568158},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3840537},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4303882},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 4812712},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5337025},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5756470},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6297882},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6733598},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 7280462},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7775204},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 8333161},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8895902},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9374699},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 9929620},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 10463910},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 11076352},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11516790},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 11524667},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 152667},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 323186},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 501793},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 679116},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 853958},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1116265},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1367449},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 1635183},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1908644},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2399696},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2912277},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3481376},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3823595},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4261686},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4707731},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5279599},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5717815},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6067380},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 6510785},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6878610},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 7391869},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 8001629},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 8549902},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 8960907},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9392356},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9868356},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 10502150},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 11162435},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 11684352},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 12241748},
]},
],
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
				
				            maximum: 445207,
				            interval: 44520,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 115362},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 129291},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 163379},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 160561},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 138044},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 191640},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 193600},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 255785},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 189994},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 179095},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 184296},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 171320},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 202252},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 219596},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 207711},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 285414},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 286834},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 353253},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 261415},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 417579},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 314102},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 319008},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 304770},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 350735},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 281121},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 293203},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 278447},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 246559},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 283687},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 223498},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 7877},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 19741},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 26635},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 32670},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 32147},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 36022},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 43254},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 44922},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 48070},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 45111},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 53535},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 51275},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 62844},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 28667},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 50872},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 42623},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 99850},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 50886},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 37471},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 59934},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 32161},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 96549},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 107861},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 75653},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 42732},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 55058},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 68577},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 105021},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 148396},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 97153},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 126451},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 108352},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 130801},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 116971},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 128457},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 126697},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 165031},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 166484},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 127333},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 189354},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 376224},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 375254},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 445207},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 297414},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 324724},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 376631},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 404013},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 290371},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 296249},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 337425},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 205220},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 362865},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 437461},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 435033},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 347264},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 320904},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 376468},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 443913},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 432857},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 337453},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 194571},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 24574},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 13083},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 28966},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 16719},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 12123},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 54022},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 39778},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 92331},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 38996},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 61293},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 86052},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 61048},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 16138},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 62495},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 26791},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 68005},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 96959},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 15845},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 46046},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 130444},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 53845},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 64438},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 37587},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 21009},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 55487},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 30955},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 84860},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 79032},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 87311},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 236374},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 37795},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 58293},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 89842},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 27441},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 69426},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 54929},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 31154},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 25352},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 55596},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 32309},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 24405},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 45565},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 10240},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11977},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 23449},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 77523},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 104805},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 104115},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 80789},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 49072},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 40196},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 115308},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 52086},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 94062},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 183053},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 64516},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 169721},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 167600},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 200062},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 93868},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 21438},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 33245},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 44414},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 33974},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 42628},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 28036},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 37326},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 44785},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 50704},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 27254},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 41953},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 29972},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 23759},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 40131},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 41219},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 100408},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 117191},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 66945},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 77241},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 74761},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 81418},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 112548},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 137886},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 113160},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 98567},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 121078},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 106753},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 120131},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 128693},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 123072},
]},
],
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
				            text: '雪歌的PT統計(總分844477)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 67402,
				            interval: 6740,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7479},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4212},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4072},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 13697},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7432},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4494},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6805},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7694},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 24},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 2589},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8446},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 865},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1758},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 56},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11951},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6053},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 9462},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 9406},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 9864},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 11143},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 14560},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 3889},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5446},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 11628},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7112},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 18521},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 11270},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 13864},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7934},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 10123},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 21065},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 44719},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 42052},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 37714},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18002},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 23091},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 27709},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 38349},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 33861},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 39590},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 33414},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 67402},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 39593},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 27962},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2242},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 31134},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 12437},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10122},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7869},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 11906},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 22696},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 19699},
]},
],
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

                   text: '雪歌的PT構成(總分844477)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 170137, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 118105, name: '強襲', legendMarkerType: 'square'},
{  y: 556235, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫嫣的PT統計(總分678730)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 100711,
				            interval: 10071,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 12907},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6664},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5486},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7417},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 703},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 16142},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8803},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6187},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 16007},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11979},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 11733},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9177},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11343},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 13250},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 16884},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 18654},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 238},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 42810},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 100711},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 53775},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 54494},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 20832},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10163},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 11691},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9603},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 14929},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 9056},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 14879},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 13015},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 9773},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4854},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5563},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5622},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 24740},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 14820},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 18362},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 16774},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 11287},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9649},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4367},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9024},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4385},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 9978},
]},
],
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

                   text: '紫嫣的PT構成(總分678730)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 529532, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 121444, name: '強襲', legendMarkerType: 'square'},
{  y: 27754, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分667424)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49288,
				            interval: 4928,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 9631},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 10231},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8817},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5707},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9752},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7628},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10916},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 1512},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7024},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7568},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 9680},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3801},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 19414},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 19296},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 13846},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 7715},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 13301},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 49288},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13784},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 24650},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 23439},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 24347},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 15094},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 43321},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 33758},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12391},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 18195},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 22282},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 7569},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11751},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7316},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14819},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 13806},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 18766},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 19983},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5292},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8638},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5472},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7572},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3832},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 10473},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 16537},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 9709},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 16790},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6092},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 16595},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 20024},
]},
],
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

                   text: '葬月的PT構成(總分667424)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 465708, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 127026, name: '強襲', legendMarkerType: 'square'},
{  y: 74690, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '暗之武者的PT統計(總分645261)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54907,
				            interval: 5490,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3636},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4703},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 11353},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 10580},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6998},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5080},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8267},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10795},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5169},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8896},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11045},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5451},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 7822},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11902},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 14271},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14321},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 10790},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 24686},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 22234},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 37489},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 54907},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 33858},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 46366},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 23580},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 13258},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 11005},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 12695},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7030},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 12465},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 13122},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2382},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 13855},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6716},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6497},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 3511},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3218},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5023},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 15015},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 22986},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7416},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5278},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6245},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 4192},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 19282},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 17541},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 18466},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 23864},
]},
],
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

                   text: '暗之武者的PT構成(總分645261)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 463774, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 79203, name: '強襲', legendMarkerType: 'square'},
{  y: 102284, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Abbey的PT統計(總分620957)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 66934,
				            interval: 6693,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3194},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7362},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5738},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 11086},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3107},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4835},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 12316},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10736},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5349},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6196},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5019},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3156},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8665},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 717},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6766},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 11851},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7981},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 12740},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10444},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 9665},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 5731},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 44916},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 28481},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 25376},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 12285},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13127},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 7034},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6413},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 13031},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10640},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Abbey強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4978},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8418},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6160},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6869},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 20319},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9803},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 66934},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 36206},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 22856},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AbbeyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7679},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10897},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 14350},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10847},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 9381},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6501},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 24484},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 20532},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 19786},
]},
],
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

                   text: 'Abbey的PT構成(總分620957)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 313957, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 182543, name: '強襲', legendMarkerType: 'square'},
{  y: 124457, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '迪克的PT統計(總分617739)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45496,
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
                                    name: "迪克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7116},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2089},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 11766},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4320},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8788},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5660},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3121},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10041},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 15275},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8456},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11999},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 16070},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 17163},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 14596},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8325},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 7689},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 12351},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 19526},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4707},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 11405},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6832},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 19895},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7895},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 20267},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7005},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 15298},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 12362},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 14069},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 7036},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9793},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 13679},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2648},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8128},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 9555},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8376},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 15873},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 17720},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 34383},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 30204},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 45496},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7803},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8480},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 3173},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8835},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9808},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11040},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 21315},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 14307},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 21585},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 4416},
]},
],
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

                   text: '迪克的PT構成(總分617739)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 320915, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 186062, name: '強襲', legendMarkerType: 'square'},
{  y: 110762, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'gotice的PT統計(總分616648)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41960,
				            interval: 4196,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 8411},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8845},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8887},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9269},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5758},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 11189},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10876},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9945},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10376},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2839},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 12641},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8352},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 10234},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 12118},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3899},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 18525},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 26451},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 28504},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 3495},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 11443},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 16155},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 13354},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 6452},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 20369},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 7419},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 18259},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 27336},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18753},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6190},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5237},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 2746},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6492},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5826},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5081},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 13245},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11241},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 13146},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 41960},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 41148},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 21718},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "goticeCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7174},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 9314},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10686},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12902},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 17897},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 13097},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 21394},
]},
],
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

                   text: 'gotice的PT構成(總分616648)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 356344, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 167840, name: '強襲', legendMarkerType: 'square'},
{  y: 92464, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分611947)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40542,
				            interval: 4054,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4067},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 22218},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 28536},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5373},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 13950},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6256},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 34007},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 35084},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 19301},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 9471},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7411},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5331},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 12203},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4192},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8435},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 19538},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 40542},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 35617},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16499},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 30514},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12333},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 19517},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 14870},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 21347},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9113},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 16774},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6513},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 17285},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15398},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5204},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4120},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2818},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 19052},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 16947},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 22092},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 8930},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6275},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7373},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 3470},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1981},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 12682},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 9308},
]},
],
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

                   text: '冰的PT構成(總分611947)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 491695, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 50019, name: '強襲', legendMarkerType: 'square'},
{  y: 70233, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分598836)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36774,
				            interval: 3677,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9947},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10397},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 3504},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4547},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4620},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 17946},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 36774},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 24006},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 13107},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 8879},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4607},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6148},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7243},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4735},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4935},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7852},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9519},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2546},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 25},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10208},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9371},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8104},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 2621},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 16838},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 13310},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 9452},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6141},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8885},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 13331},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9087},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 12510},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 3634},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 20122},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7869},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13224},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 16276},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 13417},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 17028},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11291},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8157},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10697},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9028},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3605},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 12047},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6897},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 8290},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6831},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4874},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 28274},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 30225},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 32535},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 33320},
]},
],
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

                   text: '凱爾的PT構成(總分598836)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 279208, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 124848, name: '強襲', legendMarkerType: 'square'},
{  y: 194780, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '龍的PT統計(總分576833)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59176,
				            interval: 5917,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6821},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6714},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9454},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5925},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9445},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5990},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10202},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 13577},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11577},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12539},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7777},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 16550},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 7111},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6506},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 13719},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 15288},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11335},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13347},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 17617},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 14877},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 21485},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 10412},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 19729},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7713},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 40544},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 39619},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 59176},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 54915},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9525},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4077},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6811},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7401},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 25432},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 21341},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11634},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4868},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2789},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 12991},
]},
],
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

                   text: '龍的PT構成(總分576833)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 479489, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20648, name: '強襲', legendMarkerType: 'square'},
{  y: 76696, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分565674)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40350,
				            interval: 4035,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3233},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6374},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14655},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10664},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 21116},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 29881},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 21972},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6173},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9440},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8663},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4664},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8726},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 14288},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5423},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 11397},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10766},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12073},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11386},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9851},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9023},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8279},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3404},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 6720},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 10315},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 16769},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13175},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 40350},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 26528},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 17569},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12834},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 13560},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 15865},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 17526},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 18744},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2952},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18513},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 36620},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7381},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6306},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8471},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4455},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4099},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3492},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4887},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 17092},
]},
],
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

                   text: '依司瑪耳的PT構成(總分565674)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 401596, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 107895, name: '強襲', legendMarkerType: 'square'},
{  y: 56183, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分562862)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49454,
				            interval: 4945,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9426},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6147},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9174},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 7793},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6741},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 8810},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 29358},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3890},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4953},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8330},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9150},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 13108},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8722},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7766},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 12768},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 13504},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 14344},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 24745},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7102},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4067},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8449},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8603},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 8732},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 17518},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 19031},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2411},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15990},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 11510},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 13879},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 29732},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 49454},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 44541},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13616},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 11871},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6421},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 4925},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3190},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7541},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6853},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8864},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2399},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5981},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2813},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 17947},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 11963},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18730},
]},
],
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

                   text: '嘎喵的PT構成(總分562862)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 402322, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 83091, name: '強襲', legendMarkerType: 'square'},
{  y: 77449, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡特爾的PT統計(總分549826)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49130,
				            interval: 4913,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5478},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6950},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7034},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8754},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11042},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5657},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 8949},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7751},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8324},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5612},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 11547},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 29687},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 16181},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 31276},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16673},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15544},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13997},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6473},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 13775},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 6664},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 18430},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 49130},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 28190},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 8888},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 23715},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14786},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5507},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6046},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 3923},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 3995},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 2983},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 10166},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 15999},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 19008},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18541},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 10949},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6522},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6672},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5276},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1810},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3040},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 10494},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 17771},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 20617},
]},
],
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

                   text: '卡特爾的PT構成(總分549826)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 380507, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 83151, name: '強襲', legendMarkerType: 'square'},
{  y: 86168, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '裁風的PT統計(總分544573)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40723,
				            interval: 4072,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 8696},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 12110},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4801},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7257},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3586},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4860},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 12997},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10915},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6248},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 10434},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11623},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 18024},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 31358},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 40723},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 28289},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 12778},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 17242},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5727},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10762},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15904},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 4518},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6720},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12774},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 14098},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 22497},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 10168},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 12035},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 14819},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 9086},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6589},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 7877},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8242},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9993},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3402},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 12220},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6202},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10694},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 23594},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 26284},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6407},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 16543},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 3963},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 21514},
]},
],
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

                   text: '裁風的PT構成(總分544573)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 395515, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 100631, name: '強襲', legendMarkerType: 'square'},
{  y: 48427, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分541069)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38773,
				            interval: 3877,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7368},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3740},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6925},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 11559},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6712},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 11446},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2812},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7471},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9549},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 1320},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7024},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 132},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 16196},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 5385},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 28067},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15931},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16089},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10040},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9635},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 60},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 11940},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 15337},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 13589},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5121},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 10345},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 14721},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7167},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 11785},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9917},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4892},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 22317},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 15124},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 38773},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 4365},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 23368},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 27138},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 25486},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 09, 0), y: 10527},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7230},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4264},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15040},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 15954},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 17786},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 4554},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 4100},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 22768},
]},
],
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

                   text: '羽龍的PT構成(總分541069)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 255681, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 183165, name: '強襲', legendMarkerType: 'square'},
{  y: 102223, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西沙斯的PT統計(總分488016)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27280,
				            interval: 2728,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4714},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3579},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 12461},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8483},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 2465},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1775},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5128},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10346},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6110},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7355},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6207},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 4409},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 18310},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 13210},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 22567},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 20327},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11419},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13052},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13091},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10113},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 15867},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 2122},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 10295},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10908},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 12464},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 18104},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 3741},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 14138},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10017},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9739},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 10155},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9414},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5907},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7136},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6378},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 16534},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 14812},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 27280},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 7090},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 14476},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4425},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 8679},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 26676},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 26538},
]},
],
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

                   text: '西沙斯的PT構成(總分488016)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 302516, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 80794, name: '強襲', legendMarkerType: 'square'},
{  y: 104706, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽西的PT統計(總分477525)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41302,
				            interval: 4130,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 8020},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2521},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4454},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 14399},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 12476},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 41302},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8550},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 34339},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 13330},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8164},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5348},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8723},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9796},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6645},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 10950},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 6409},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7296},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 3893},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13868},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12598},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6541},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 6265},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 14653},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 6686},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 11378},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 7541},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6609},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 1619},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14317},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6580},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7263},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7328},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 16418},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 16983},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 24718},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 18907},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 24232},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 22028},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4569},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6018},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 13791},
]},
],
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

                   text: '賽西的PT構成(總分477525)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 308690, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 144457, name: '強襲', legendMarkerType: 'square'},
{  y: 24378, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無銘的PT統計(總分453050)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35183,
				            interval: 3518,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6888},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6587},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9526},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9834},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 22},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9853},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5585},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5274},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6809},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 27006},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 17309},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 11481},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 286},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 10746},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 136},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 19257},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15947},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 35183},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8798},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 34761},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10912},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 10939},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14706},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 8013},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 8807},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 3947},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 10908},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 8313},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 12255},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5192},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5424},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1715},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3063},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 10623},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8532},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 20700},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 19639},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4485},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7256},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2770},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1221},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 32342},
]},
],
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

                   text: '無銘的PT構成(總分453050)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 330088, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 74888, name: '強襲', legendMarkerType: 'square'},
{  y: 48074, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分451500)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54118,
				            interval: 5411,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13422},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 20055},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 54118},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1722},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2971},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5577},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9386},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9762},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 17159},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 13477},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 28211},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11688},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8618},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4041},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 10746},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4858},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8802},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 5141},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4032},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5105},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13862},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 7612},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12913},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6807},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11244},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12866},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 13385},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9666},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9624},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 11623},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2261},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 11651},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4331},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8779},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8656},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5994},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 4861},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 1420},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 8463},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 21409},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 25182},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分451500)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 274810, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 89095, name: '強襲', legendMarkerType: 'square'},
{  y: 87595, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '湖光的PT統計(總分411720)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24228,
				            interval: 2422,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 8657},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3714},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5279},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 11150},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 215},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9228},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10731},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 11804},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11339},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5753},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5585},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3805},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 7759},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 16778},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 10582},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 24228},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7072},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 18320},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8999},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 752},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 10651},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 15279},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 9757},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 6866},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7897},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 14116},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 19166},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3926},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6538},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10998},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5326},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7950},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8136},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 11372},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 16865},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 12497},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7498},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2564},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8032},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 2388},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18425},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 15790},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7933},
]},
],
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

                   text: '湖光的PT構成(總分411720)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 286944, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 69644, name: '強襲', legendMarkerType: 'square'},
{  y: 55132, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Fatcats的PT統計(總分717479)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47598,
				            interval: 4759,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fatcats殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3760},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6937},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4785},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4007},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8201},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 15838},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3861},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11459},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 25120},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 29555},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 40145},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 16664},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 784},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 24001},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 33534},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 19704},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4436},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 18230},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 17770},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 1359},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 47598},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 28018},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 28248},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 15772},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12831},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 43896},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 39548},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 30599},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 17872},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fatcats強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4071},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6667},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8414},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10577},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8573},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 9825},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 9400},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 7681},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 15170},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 11650},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 11273},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "FatcatsCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 12791},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 11583},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8930},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3824},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 9283},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13235},
]},
],
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

                   text: 'Fatcats的PT構成(總分717479)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 554532, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 103301, name: '強襲', legendMarkerType: 'square'},
{  y: 59646, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Candy的PT統計(總分717374)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49445,
				            interval: 4944,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Candy強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4063},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 12123},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6856},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7409},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7603},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8363},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9524},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7698},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2680},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 3473},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 4830},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 20200},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 17812},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Candy殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 9320},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 10508},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6520},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7794},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4942},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2475},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8259},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8812},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 11256},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 45133},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 21753},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 42352},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 12871},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 18421},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 30960},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 16371},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 40718},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10569},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15263},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 32656},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 35054},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 42603},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 25915},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 1343},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 23268},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 41786},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 49445},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 16338},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9194},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "CandyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 13, 0), y: 2841},
]},
],
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

                   text: 'Candy的PT構成(總分717374)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 601899, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 112634, name: '強襲', legendMarkerType: 'square'},
{  y: 2841, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '靈糕的PT統計(總分713313)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 85871,
				            interval: 8587,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈糕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5861},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 12543},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5866},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8994},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10075},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9689},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7215},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11949},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 10836},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 9007},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 13686},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 18718},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 17247},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6139},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 9383},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7800},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 9179},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 45807},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15657},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 11472},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 21761},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 34381},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 31564},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 3749},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 27184},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 17113},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 85871},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 19209},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 20856},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈糕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4442},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3664},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6795},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 15759},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 3328},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 15361},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 12175},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 20090},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18056},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈糕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4450},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5917},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 9218},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 18028},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11093},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 8880},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 18168},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10407},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18671},
]},
],
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

                   text: '靈糕的PT構成(總分713313)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 508811, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 99670, name: '強襲', legendMarkerType: 'square'},
{  y: 104832, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '♛愛德華✵剎那♐的PT統計(總分707610)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54444,
				            interval: 5444,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "♛愛德華✵剎那♐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6135},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8041},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7320},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7940},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 17618},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 18935},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4273},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 8961},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 13292},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 20924},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "♛愛德華✵剎那♐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2391},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5319},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6047},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6027},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8068},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 15581},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8709},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9857},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10831},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 25856},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 15744},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 54444},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 14890},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 42334},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 34403},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 9853},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 15293},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10482},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 433},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 26745},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 36195},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 29258},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 34036},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 10092},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9832},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 37901},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 33318},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 53851},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "♛愛德華✵剎那♐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6410},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 8167},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 11804},
]},
],
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

                   text: '♛愛德華✵剎那♐的PT構成(總分707610)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 567790, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 113439, name: '強襲', legendMarkerType: 'square'},
{  y: 26381, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Fumm的PT統計(總分682365)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41833,
				            interval: 4183,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "FummCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1022},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3434},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6274},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 13353},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 15941},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 16743},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fumm殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6621},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4593},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6890},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7210},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3697},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 14768},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10364},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8280},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 12477},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 38160},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 35327},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 23919},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 19914},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3878},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 7267},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 30682},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15192},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 16468},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11737},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1536},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13418},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 14943},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 30864},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 27055},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 19051},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9393},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 38191},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 41324},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 41833},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 13508},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fumm強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4512},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9703},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 10838},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 14753},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 9045},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12951},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 15062},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 20174},
]},
],
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

                   text: 'Fumm的PT構成(總分682365)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 528560, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 97038, name: '強襲', legendMarkerType: 'square'},
{  y: 56767, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無極的PT統計(總分655524)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46317,
				            interval: 4631,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無極殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6861},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5592},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 15161},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7889},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11437},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 16799},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 11446},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3304},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 16573},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 15986},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 14435},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 16114},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 12306},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 13320},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 19857},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 13110},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 409},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 8805},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 43517},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 26376},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 30133},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 43835},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 22949},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2081},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 18342},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 46317},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15753},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7029},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 20087},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 5760},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無極強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3849},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2931},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 10757},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 13576},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4714},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 7839},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 9993},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 19140},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無極CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7694},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7154},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 13395},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9781},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 9347},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 18015},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 25756},
]},
],
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

                   text: '無極的PT構成(總分655524)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 491583, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 72799, name: '強襲', legendMarkerType: 'square'},
{  y: 91142, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '希比的PT統計(總分642346)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50438,
				            interval: 5043,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希比強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8104},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14649},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15047},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14439},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 36611},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 49084},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希比殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2856},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 10480},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3415},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6916},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6540},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 3400},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8632},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8534},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 12509},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 26733},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 24955},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 37477},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 16188},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 43545},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 50438},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 27916},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 26920},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 19889},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 7746},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 9765},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9930},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6500},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 8325},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 11026},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 422},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 3995},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 10507},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 8468},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 32},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希比CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4040},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1235},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7826},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8298},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9246},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 35550},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 24158},
]},
],
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

                   text: '希比的PT構成(總分642346)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 414059, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 137934, name: '強襲', legendMarkerType: 'square'},
{  y: 90353, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '夏的PT統計(總分635495)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42743,
				            interval: 4274,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夏殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4427},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3819},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4600},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 914},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6439},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5014},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4896},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5070},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 24081},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 20036},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 42743},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 34615},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 16265},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 29688},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 7777},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2536},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 3394},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 6712},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 8447},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 8343},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 4105},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 5727},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 2446},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5478},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 5346},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 7014},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 454},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夏CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3845},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9097},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8786},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 11717},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 10541},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 25264},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8969},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 16194},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 1690},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 10328},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 15156},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 13873},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 30787},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2328},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 16415},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 30107},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 29708},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 21692},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 28995},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夏強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6464},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 13551},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 10253},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 19847},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 19502},
]},
],
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

                   text: '夏的PT構成(總分635495)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 270386, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 69617, name: '強襲', legendMarkerType: 'square'},
{  y: 295492, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '萊茵哈特的PT統計(總分625797)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47294,
				            interval: 4729,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊茵哈特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4773},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7056},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5012},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8621},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3874},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5059},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10202},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11972},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 41350},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 30000},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 14334},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 26325},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 41730},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 47217},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 47294},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 10397},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 12630},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 225},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 8579},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13264},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 17416},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 16400},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 8467},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 14033},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12546},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 16262},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 14539},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10094},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 13943},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊茵哈特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4625},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7329},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9998},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10590},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 19019},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊茵哈特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 10163},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 13589},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 16209},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 21019},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8120},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5038},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15192},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11292},
]},
],
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

                   text: '萊茵哈特的PT構成(總分625797)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 473614, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 51561, name: '強襲', legendMarkerType: 'square'},
{  y: 100622, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '朱里安的PT統計(總分617138)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41396,
				            interval: 4139,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "朱里安殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5859},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5184},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6050},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7368},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8575},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4813},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7667},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4482},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 22213},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 41396},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 39364},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 11413},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 15523},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 30965},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 6891},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6775},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 8058},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5673},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 11897},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7554},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 7583},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 219},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 8206},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 11001},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3873},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 12751},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 8163},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "朱里安CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4424},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2824},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7986},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 22034},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12304},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 9528},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 11616},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11042},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11604},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10757},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 34554},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 13669},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 12506},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 20294},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 26614},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 21296},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "朱里安強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9586},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11516},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 11707},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13592},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 28169},
]},
],
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

                   text: '朱里安的PT構成(總分617138)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 309516, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 74570, name: '強襲', legendMarkerType: 'square'},
{  y: 233052, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '血狼的PT統計(總分604246)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45678,
				            interval: 4567,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "血狼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 8818},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8060},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3160},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 11436},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5350},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9805},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2268},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4449},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9907},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 33497},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 18980},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 45678},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9635},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 17876},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 12947},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 16328},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 12692},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 8538},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4167},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 13410},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 30148},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 26089},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 41561},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 18192},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 35716},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 14200},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 20631},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 17620},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 19339},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 25140},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "血狼強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5754},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7379},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 11882},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6057},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2744},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 3909},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10538},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 11016},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12533},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 4264},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "血狼CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 27, 0), y: 22533},
]},
],
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

                   text: '血狼的PT構成(總分604246)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 505637, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 76076, name: '強襲', legendMarkerType: 'square'},
{  y: 22533, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '星日的PT統計(總分602649)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54970,
				            interval: 5497,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星日CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6047},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 16417},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 13484},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 11019},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 18333},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星日強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7665},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 9036},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9013},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 7093},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 14018},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 14867},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 19468},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星日殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 10058},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 12604},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4446},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 12144},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6589},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8673},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8206},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5490},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 14230},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10016},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5179},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 11318},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6011},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 16382},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 13726},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15914},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 27017},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 42146},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 25113},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 17114},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 629},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 36711},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 9503},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 30357},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 54970},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 19137},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 17890},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 14616},
]},
],
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

                   text: '星日的PT構成(總分602649)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 456189, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 81160, name: '強襲', legendMarkerType: 'square'},
{  y: 65300, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '費爾南多。夜禮布的PT統計(總分586665)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39548,
				            interval: 3954,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾南多。夜禮布殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6628},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7525},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9192},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7200},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8449},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4615},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 17297},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3644},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 12109},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5347},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 10354},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9339},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 15219},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 12198},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5892},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 28411},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 26397},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13130},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 7814},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 23191},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 31081},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 2996},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 9973},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 16353},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13372},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 39548},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 27315},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 9149},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6382},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾南多。夜禮布強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3213},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6800},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9802},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 9159},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11827},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 10446},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7633},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 18398},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 28509},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 24663},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾南多。夜禮布CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6573},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 21235},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8115},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8892},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 19962},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 1318},
]},
],
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

                   text: '費爾南多。夜禮布的PT構成(總分586665)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 390120, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 130450, name: '強襲', legendMarkerType: 'square'},
{  y: 66095, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '咖哩的PT統計(總分585977)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37996,
				            interval: 3799,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "咖哩殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3881},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 10025},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4578},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9439},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9591},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 13024},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10544},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8322},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4912},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6047},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 4808},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 9869},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6339},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6501},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 28916},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 37996},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 17753},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 18489},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 32312},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 32834},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 26822},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12451},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 18316},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 35234},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 19348},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 21319},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3568},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 13853},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14977},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "咖哩強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7587},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8615},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9818},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 4424},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 20467},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "咖哩CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7982},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8982},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4933},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10297},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 21797},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8611},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 9135},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8755},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 12506},
]},
],
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

                   text: '咖哩的PT構成(總分585977)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 442068, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 50911, name: '強襲', legendMarkerType: 'square'},
{  y: 92998, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羅倫施的PT統計(總分581194)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59434,
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
                                    name: "羅倫施CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7531},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8624},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 17983},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8678},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 14108},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 12679},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 14565},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 46017},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11869},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10566},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 16544},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 59434},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 15256},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 15284},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13252},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 45273},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 27368},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 26598},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅倫施殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3207},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1596},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2166},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4269},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5269},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6442},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 3037},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 41187},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 20808},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 14621},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4222},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 15235},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 10357},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3896},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 4916},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4208},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2290},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1671},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 2164},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 6105},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7335},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 7324},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2984},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 1987},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3242},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅倫施強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8473},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 14628},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5926},
]},
],
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

                   text: '羅倫施的PT構成(總分581194)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 180538, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 29027, name: '強襲', legendMarkerType: 'square'},
{  y: 371629, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嵐武耀空的PT統計(總分569925)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42602,
				            interval: 4260,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嵐武耀空殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6908},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8448},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3068},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9191},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11006},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 12892},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5690},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 13516},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4571},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 13828},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 15439},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 32020},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 882},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11963},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 13216},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 37998},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 30101},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 21400},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13049},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12390},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12377},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 23846},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 20963},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 42602},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 11962},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12101},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 22570},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7227},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6299},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7258},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嵐武耀空強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5886},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8730},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11405},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7581},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 1652},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4797},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 2213},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 6251},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 11498},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7365},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 17930},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 34532},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嵐武耀空CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4504},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 800},
]},
],
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

                   text: '嵐武耀空的PT構成(總分569925)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 444781, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 119840, name: '強襲', legendMarkerType: 'square'},
{  y: 5304, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '杰克的PT統計(總分539022)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43180,
				            interval: 4318,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "杰克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 8318},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5046},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 9421},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5344},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9084},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6078},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 23},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9170},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 18511},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6831},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 19712},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8540},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8772},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11060},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4303},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 12409},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 3728},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 11540},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 43180},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 16325},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 23519},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 20970},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 23248},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 28602},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 26157},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 37480},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 21028},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 24104},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10208},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "杰克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 15, 0), y: 7995},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 2225},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 3360},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14486},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "杰克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 11490},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8893},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5816},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5945},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 12501},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 3450},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6446},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 17984},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 5720},
]},
],
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

                   text: '杰克的PT構成(總分539022)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 432711, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 78245, name: '強襲', legendMarkerType: 'square'},
{  y: 28066, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '煉心的PT統計(總分516022)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41964,
				            interval: 4196,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煉心殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6793},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7953},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6798},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5935},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6385},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 10242},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 16492},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5580},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12871},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 8687},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 6195},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 14168},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 12935},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 9377},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 15929},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15576},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 8188},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 23777},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 3617},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 18566},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 17752},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 41964},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 16590},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 36139},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 13584},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15396},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 19742},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 17280},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11568},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煉心強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7802},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 8253},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 20816},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10245},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 10599},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14535},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 10049},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 14593},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 5629},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煉心CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 17, 0), y: 7422},
]},
],
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

                   text: '煉心的PT構成(總分516022)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 406079, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 102521, name: '強襲', legendMarkerType: 'square'},
{  y: 7422, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '上人的PT統計(總分491289)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33834,
				            interval: 3383,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "上人殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1012},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4450},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7644},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6420},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7683},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7185},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 4457},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7898},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1391},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 9924},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5429},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5976},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 1796},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 13909},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6722},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 30795},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 16484},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 21840},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16499},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5067},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 33834},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 30705},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 20267},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 19480},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 28293},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 17466},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 8981},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 4173},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15406},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "上人CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11576},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 20248},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5288},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 7007},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10299},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 31034},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "上人強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8198},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8797},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 27656},
]},
],
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

                   text: '上人的PT構成(總分491289)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 361186, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44651, name: '強襲', legendMarkerType: 'square'},
{  y: 85452, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Taco的PT統計(總分450318)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33737,
				            interval: 3373,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Taco殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7684},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 11210},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9127},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 15624},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6236},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4548},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7857},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 14028},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6680},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 16232},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 30577},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8596},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 10498},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 17095},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 29611},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 10693},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 7658},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 33737},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 32064},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 24468},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15702},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6409},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 10608},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Taco強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7606},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 9666},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3480},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8370},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 9298},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 23343},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 20128},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15271},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "TacoCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 17, 0), y: 7917},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8297},
]},
],
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

                   text: 'Taco的PT構成(總分450318)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 336942, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 97162, name: '強襲', legendMarkerType: 'square'},
{  y: 16214, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
