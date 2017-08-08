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
				
				            maximum: 686750,
				            interval: 68675,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 111677},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 105587},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 190008},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 241717},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 350385},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 294884},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 327833},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 382445},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 332235},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 508226},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 402333},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 378135},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 250567},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 405157},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 423800},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 419561},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 404219},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 458055},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 289062},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 475921},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 372912},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 408658},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 501802},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 432635},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 506795},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 477675},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 686750},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 444412},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 584008},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 450388},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8354},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 160566},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 193858},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 196428},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 275921},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 335166},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 488676},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 380769},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 445492},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 370528},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 403412},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 412333},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 407439},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 377149},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 323356},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 456728},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 486524},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 423602},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 430147},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 579404},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 553399},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 592222},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 486667},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 549594},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 544940},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 645737},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 425898},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 484869},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 631335},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 494402},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 588215},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8446},
]},
],
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
				
				            maximum: 24779418,
				            interval: 2477941,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 111677},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 217264},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 407272},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 648989},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 999374},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1294258},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1622091},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2004536},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2336771},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2844997},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3247330},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3625465},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3876032},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4281189},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4704989},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5124550},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5528769},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5986824},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6275886},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6751807},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7124719},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7533377},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8035179},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8467814},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8974609},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9452284},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10139034},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10583446},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11167454},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11617842},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 11626196},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 160566},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 354424},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 550852},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 826773},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1161939},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1650615},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2031384},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2476876},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2847404},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3250816},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3663149},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4070588},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4447737},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4771093},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5227821},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5714345},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6137947},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6568094},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7147498},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7700897},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8293119},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8779786},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9329380},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9874320},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10520057},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10945955},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11430824},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12062159},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12556561},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13144776},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 13153222},
]},
],
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
				
				            maximum: 534167,
				            interval: 53416,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 27385},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13907},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 34772},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 45225},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 36858},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 49590},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 30016},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 59104},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 51193},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 71207},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 46493},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 59454},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 40409},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 102584},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 64898},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 87339},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 45288},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 93433},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 45060},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 72574},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 67614},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 54129},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 85924},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 72098},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 62626},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 117557},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 130961},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 106802},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 126721},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 56917},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8354},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 121325},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 132680},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 117722},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 205788},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 272573},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 430577},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 238053},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 330709},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 270706},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 341024},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 341919},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 319580},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 213704},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 191694},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 319400},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 305112},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 284349},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 311640},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 430529},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 333738},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 320061},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 332534},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 409971},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 416075},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 534167},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 286254},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 294013},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 426718},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 367807},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 432248},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8446},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 30034},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 34774},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 34744},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 36623},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 34309},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 58099},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 105851},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 99063},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 63894},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 42969},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 52063},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 62630},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 115165},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 107515},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 106645},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 100995},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 104362},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 92050},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 100924},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 103912},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 134175},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 131441},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 113397},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 111305},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 111570},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 85443},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 117783},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 174228},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 109181},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 104240},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 84292},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 91680},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 155236},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 196492},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 258460},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 198881},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 260013},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 267274},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 281042},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 371364},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 322885},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 292539},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 179767},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 282359},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 309386},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 322309},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 338677},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 338945},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 241571},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 375753},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 275835},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 354529},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 381500},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 358730},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 424070},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 344349},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 513631},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 308130},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 421446},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 370609},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 55067},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 46413},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 37804},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 56067},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 65655},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 32955},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26142},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30391},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20214},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 49516},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9913},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20254},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25677},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2431},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 27594},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29463},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 34378},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1807},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20099},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15769},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 42158},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29480},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 35841},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22862},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9207},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26404},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 43962},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 33510},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 28284},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 36865},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15720},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 35928},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19419},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18351},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 25229},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 48280},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24147},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30683},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 80417},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 34891},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26457},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 47951},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 115749},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 137986},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22692},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 26226},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17560},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 54201},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 73073},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 30389},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17414},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 51727},
]},
],
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
				            text: '喵鼠的PT統計(總分1071245)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 86410,
				            interval: 8641,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5584},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4478},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4876},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7882},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6293},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5928},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2825},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8756},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9923},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29273},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8506},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12235},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8267},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7027},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10597},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8566},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8118},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9853},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18895},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 25486},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 61465},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 38118},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22567},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 34144},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 28329},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 58832},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 59385},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 27573},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36400},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 31679},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33434},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 48336},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 80465},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 33914},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 46727},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22213},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 64882},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 86410},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12343},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5184},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7906},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18580},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8881},
]},
],
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

                   text: '喵鼠的PT構成(總分1071245)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 141126, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 877225, name: 'CBC', legendMarkerType: 'square'},
{  y: 52894, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分1006795)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60747,
				            interval: 6074,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6668},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4478},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5914},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6147},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16046},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11274},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 22075},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 60747},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13218},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8669},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6887},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5485},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4151},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 37874},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8082},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22169},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 48074},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15976},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14435},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 39938},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9680},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7563},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7562},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13995},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40063},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9818},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17974},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5761},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 35219},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15202},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3087},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20086},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18006},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 47260},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 32165},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 49621},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 26341},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18142},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 52014},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36510},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 39124},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20725},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12114},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26457},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 36623},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19891},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27485},
]},
],
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

                   text: '雪歌的PT構成(總分1006795)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 437170, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 447055, name: 'CBC', legendMarkerType: 'square'},
{  y: 122570, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分994448)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 88767,
				            interval: 8876,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2764},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10408},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 837},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13188},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13453},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1800},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6031},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11205},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 30736},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4980},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16182},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5607},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34489},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 37099},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 50161},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18603},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10391},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11745},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16148},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2191},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 38824},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16804},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27868},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 31040},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 88767},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20547},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14602},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 48684},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19436},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 50700},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9207},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9125},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9534},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13568},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 27267},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8802},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20768},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18232},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24397},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28661},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6592},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8739},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15929},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10138},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7376},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14514},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18811},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13213},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14790},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 59495},
]},
],
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

                   text: '葬月的PT構成(總分994448)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 655290, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 169561, name: '強襲', legendMarkerType: 'square'},
{  y: 169597, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分937148)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 80202,
				            interval: 8020,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8320},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10130},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14183},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 27805},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 20898},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 70662},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14664},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 28886},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8438},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20090},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 41402},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 52131},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9116},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14785},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9847},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22608},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40202},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19910},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17986},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13228},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15728},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9431},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 59724},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 70459},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 69480},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35993},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 57204},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 80202},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13001},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14073},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13248},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19658},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13656},
]},
],
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

                   text: '阿拉的PT構成(總分937148)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 890586, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32906, name: 'CBC', legendMarkerType: 'square'},
{  y: 13656, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分843490)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 81916,
				            interval: 8191,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7852},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17340},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26122},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 27625},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 24274},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 38505},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 29839},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18138},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 24207},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 28378},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 43142},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 31794},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13929},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31073},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10189},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17358},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 62431},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6184},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 278},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 37992},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 45359},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25807},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 38080},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 38474},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 81916},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19424},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10950},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12454},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18378},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7621},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 38359},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10018},
]},
],
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

                   text: '嘎喵的PT構成(總分843490)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 7852, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 825620, name: '殲滅', legendMarkerType: 'square'},
{  y: 10018, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分772144)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 67226,
				            interval: 6722,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6508},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1941},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4866},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3345},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2149},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11859},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10549},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8332},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 30190},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17117},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3610},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3144},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13681},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7556},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9024},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12355},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 31214},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7861},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1745},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7088},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4244},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12066},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19189},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9929},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11657},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 39912},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7400},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18065},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 61054},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 36822},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 32599},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23132},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 67226},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19781},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23036},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 45454},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36206},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 35179},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9786},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4843},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22009},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19060},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19361},
]},
],
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

                   text: '秋風冷月的PT構成(總分772144)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 298531, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 398554, name: 'CBC', legendMarkerType: 'square'},
{  y: 75059, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分752165)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 71388,
				            interval: 7138,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10578},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6410},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6120},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8755},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16121},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21340},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22105},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 59272},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18498},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9001},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8635},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7950},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16061},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7477},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 43333},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12198},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 67368},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26263},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 34253},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29784},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8219},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 60478},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 37456},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22275},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23143},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6831},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11629},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22835},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 71388},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32322},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5032},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10688},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4023},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4324},
]},
],
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

                   text: '雷克斯的PT構成(總分752165)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 728098, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15720, name: 'CBC', legendMarkerType: 'square'},
{  y: 8347, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分739707)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 76067,
				            interval: 7606,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10602},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13718},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10497},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 35600},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 76067},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 44721},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 53242},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22318},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 30968},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15619},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 30259},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 19660},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14669},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19512},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14826},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 40001},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18969},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12694},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16854},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18110},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 49475},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12054},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 19752},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16414},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 41498},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20509},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18607},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4457},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22948},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15087},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分739707)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 739707, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '冰的PT統計(總分721849)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60790,
				            interval: 6079,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8232},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11237},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11659},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22315},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 19036},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 40709},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12961},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 31382},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12528},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22026},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18636},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16779},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7256},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3865},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 39346},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16309},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16022},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 41342},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15245},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 60790},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21328},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 26205},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14355},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26880},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 42318},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 42974},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 39306},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33172},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23453},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2751},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7491},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13941},
]},
],
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

                   text: '冰的PT構成(總分721849)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 700417, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 21432, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '土土昕的PT統計(總分700554)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44028,
				            interval: 4402,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8544},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10350},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1899},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4945},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 28619},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 34730},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1692},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4191},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7157},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4693},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12443},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13072},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10777},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 37871},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15392},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12085},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3990},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20970},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7956},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1868},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 44028},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17019},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15149},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10878},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6264},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6854},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 38754},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14622},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5307},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8577},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9598},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5189},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13017},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 22073},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33683},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20073},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 24131},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23066},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11132},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16654},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17429},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24455},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28637},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18943},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21778},
]},
],
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

                   text: '土土昕的PT構成(總分700554)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 402119, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 159407, name: '強襲', legendMarkerType: 'square'},
{  y: 139028, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分676838)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 101860,
				            interval: 10186,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1238},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5531},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26648},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5064},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20634},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6192},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 71},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7264},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14793},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14069},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 38690},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6963},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14174},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7111},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16198},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9708},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 35333},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8469},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 24712},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10472},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11857},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20857},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 42975},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19848},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26735},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5434},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 31825},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40428},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 101860},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15720},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11107},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11200},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8905},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7196},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17235},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17728},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6754},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1675},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4148},
]},
],
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

                   text: '依司瑪耳的PT構成(總分676838)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 575170, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 89091, name: '強襲', legendMarkerType: 'square'},
{  y: 12577, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分662716)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 62466,
				            interval: 6246,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5020},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3354},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6353},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8207},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5173},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14258},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8689},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11499},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 14174},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11106},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8516},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11435},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11011},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 62466},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14346},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 43243},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9287},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17577},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1091},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 36321},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14635},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13581},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8788},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14703},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6932},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18471},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39842},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19426},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 31677},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7242},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21607},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12480},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13053},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14814},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3022},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 49400},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31462},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 27244},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11211},
]},
],
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

                   text: '羽龍的PT構成(總分662716)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 62553, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 588952, name: '殲滅', legendMarkerType: 'square'},
{  y: 11211, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分647340)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 74704,
				            interval: 7470,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3630},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19302},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11844},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13113},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11899},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15008},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 54946},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15462},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3710},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13899},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7602},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11477},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15406},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15236},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 43331},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9746},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26038},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 37795},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23604},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17864},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 74704},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10353},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26478},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9212},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9894},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10617},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9019},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16229},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11077},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11482},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16807},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 39859},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11820},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18877},
]},
],
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

                   text: '寇內爾緹的PT構成(總分647340)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 501553, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 115090, name: '強襲', legendMarkerType: 'square'},
{  y: 30697, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分583828)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 72747,
				            interval: 7274,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11361},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7994},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7114},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12103},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16968},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15081},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6259},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16990},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 38028},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19952},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11987},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12059},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5785},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9275},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2581},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22245},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12748},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 40034},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25534},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22151},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13618},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9470},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17597},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4424},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27624},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10264},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 72747},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15715},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 36228},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7097},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4190},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12506},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11310},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15629},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9160},
]},
],
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

                   text: '藏月的PT構成(總分583828)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 531033, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43635, name: 'CBC', legendMarkerType: 'square'},
{  y: 9160, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分476260)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40386,
				            interval: 4038,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2288},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4721},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2958},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 737},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1965},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7783},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4495},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9185},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10234},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6742},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29251},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9539},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11171},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 119},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21864},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14009},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7736},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9597},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13242},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 40386},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7592},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3352},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13711},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7701},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12336},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8722},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9222},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8645},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 62},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 37481},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5484},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7386},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14769},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6879},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12947},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13888},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16080},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10827},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14379},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2801},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9073},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11323},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5729},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12661},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10717},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4471},
]},
],
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

                   text: '冰紅茶的PT構成(總分476260)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 316846, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 154943, name: '強襲', legendMarkerType: 'square'},
{  y: 4471, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分399840)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46898,
				            interval: 4689,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8345},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4847},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2407},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2026},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4644},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18406},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 27597},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21723},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5981},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11092},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12071},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 46898},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8119},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16151},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11391},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8770},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15489},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4711},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3420},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7886},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25547},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9429},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3681},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7775},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5572},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3581},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6951},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7447},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16906},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11676},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5551},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3513},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7333},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10445},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2800},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17388},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12271},
]},
],
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

                   text: '魔法的PT構成(總分399840)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 293978, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 46561, name: 'CBC', legendMarkerType: 'square'},
{  y: 59301, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分385599)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45087,
				            interval: 4508,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11686},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9292},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3802},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13879},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12809},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13384},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9331},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 33183},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8203},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4317},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25401},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 45087},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10751},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12611},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9806},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 36128},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10284},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18309},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7889},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2080},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10042},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13679},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13955},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1940},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15988},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15075},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16688},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分385599)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 298232, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39616, name: '強襲', legendMarkerType: 'square'},
{  y: 47751, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分346378)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42486,
				            interval: 4248,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3633},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4439},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1723},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3420},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18454},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15308},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9295},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9929},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 41547},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8239},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7180},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3602},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4878},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3035},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9383},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4360},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8209},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1694},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8675},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8090},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14749},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 42486},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12514},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9547},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4680},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18833},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7670},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7456},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3193},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5718},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8631},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2616},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8487},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6697},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6938},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2596},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8420},
]},
],
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

                   text: '赤雲天的PT構成(總分346378)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 285626, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 42798, name: '強襲', legendMarkerType: 'square'},
{  y: 17954, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分345811)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48535,
				            interval: 4853,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9153},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8682},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9490},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15458},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6116},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15274},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 33865},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27990},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9282},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2019},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26090},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 45724},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 35043},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 48535},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4347},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4593},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4975},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4909},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 840},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2119},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1682},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 772},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3641},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8730},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 432},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7223},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1137},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7667},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
]},
],
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

                   text: '阿榮的PT構成(總分345811)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 292721, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 53090, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '亞歷的PT統計(總分89067)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28443,
				            interval: 2844,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14285},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 308},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10121},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16369},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28443},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8446},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11095},
]},
],
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

                   text: '亞歷的PT構成(總分89067)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 77972, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11095, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '劍御犬的PT統計(總分987919)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 98032,
				            interval: 9803,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "劍御犬CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9770},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8936},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8354},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "劍御犬殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6229},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11963},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7030},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14592},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21202},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 29720},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11182},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 78628},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30296},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21900},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 45117},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23003},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 46784},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21924},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 50692},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18960},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4621},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 65881},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29280},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 34669},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 33701},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 38235},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 60033},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 98032},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 37733},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 37789},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 39267},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "劍御犬強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15585},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8058},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9194},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9559},
]},
],
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

                   text: '劍御犬的PT構成(總分987919)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 27060, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 918463, name: '殲滅', legendMarkerType: 'square'},
{  y: 42396, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '董香的PT統計(總分952634)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 82275,
				            interval: 8227,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "董香CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7916},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13331},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 27774},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 38632},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17625},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18799},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13704},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 82275},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20484},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 31364},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 36261},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20713},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 54068},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17294},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22833},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 37879},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 42040},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26562},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 68303},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 63186},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 72282},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30517},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4912},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "董香殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 99},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8894},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14053},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3381},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1958},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 354},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3564},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5376},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 52},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7963},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 27},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7338},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9279},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "董香強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 34194},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21116},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30391},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 35841},
]},
],
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

                   text: '董香的PT構成(總分952634)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 768754, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 62338, name: '殲滅', legendMarkerType: 'square'},
{  y: 121542, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '無小昇的PT統計(總分768763)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 74421,
				            interval: 7442,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無小昇殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4073},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 18980},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15499},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19516},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 26047},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14411},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7818},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 32211},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7424},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 49978},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21199},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23956},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8135},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17036},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30476},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20441},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1490},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13510},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29323},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15442},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 44153},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 51727},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 74421},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27929},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14340},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6681},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2615},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18341},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31009},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 47279},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無小昇CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5044},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8744},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13633},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5715},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12364},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7872},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19931},
]},
],
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

                   text: '無小昇的PT構成(總分768763)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 695460, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 73303, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '費爾南多。夜禮布的PT統計(總分765505)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 57007,
				            interval: 5700,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5227},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7771},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20266},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14600},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 21776},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8947},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15519},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 35659},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21473},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15252},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9046},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19561},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 31917},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 50617},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 33338},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32970},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22299},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19411},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25495},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4756},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 40105},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12702},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 28498},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30050},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9617},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 42632},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 27784},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 57007},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14709},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾南多。夜禮布強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9252},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9661},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16691},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13336},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾南多。夜禮布CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12434},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11905},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13201},
]},
],
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

                   text: '費爾南多。夜禮布的PT構成(總分765505)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 679025, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 48940, name: '強襲', legendMarkerType: 'square'},
{  y: 37540, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Ouch的PT統計(總分765284)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56821,
				            interval: 5682,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ouch殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16866},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 365},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 18079},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15208},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12300},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 34051},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26813},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 42936},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25028},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24497},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 31674},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 25463},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14053},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12637},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13554},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 54000},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17531},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14090},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28263},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10223},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21299},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34037},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16751},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 39441},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 56821},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29811},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 53999},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23304},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9296},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30065},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "OuchCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3447},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9382},
]},
],
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

                   text: 'Ouch的PT構成(總分765284)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 752455, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12829, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '從裏Man到外的PT統計(總分754565)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58029,
				            interval: 5802,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "從裏Man到外強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13225},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8388},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29850},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20214},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3192},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9719},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "從裏Man到外殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4590},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6220},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4682},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11713},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11668},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8215},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2396},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 25919},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 408},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3766},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6274},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7316},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7703},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9874},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5303},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8270},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12746},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5800},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3667},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28389},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12095},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8330},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "從裏Man到外CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9832},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7206},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 19745},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13592},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7122},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 45005},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16071},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25165},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 42379},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25457},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 49300},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9570},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19791},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22909},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6085},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 49254},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 58029},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 32730},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15363},
]},
],
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

                   text: '從裏Man到外的PT構成(總分754565)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 84588, name: '強襲', legendMarkerType: 'triangle'},
{  y: 195372, name: '殲滅', legendMarkerType: 'square'},
{  y: 474605, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '沙利昂的PT統計(總分750861)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54416,
				            interval: 5441,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙利昂殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12503},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1949},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11603},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 24432},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 54416},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3972},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 45908},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8783},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15242},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14992},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5660},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 43526},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4706},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17415},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15680},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 34358},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 43820},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17061},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16850},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16029},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33150},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22864},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29042},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 39459},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27406},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 47377},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7492},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26305},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12860},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 50060},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙利昂CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4107},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5788},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6491},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7467},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10685},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11403},
]},
],
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

                   text: '沙利昂的PT構成(總分750861)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 704920, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 45941, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '艾伯丁的PT統計(總分705168)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 78572,
				            interval: 7857,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾伯丁殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8332},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14271},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18038},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 24727},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13794},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8689},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 27841},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 30808},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 30277},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21432},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21964},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7242},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32118},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22526},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12712},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31817},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 27757},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 70539},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9016},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6995},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24360},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10073},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12944},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14303},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 78572},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 30958},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18640},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 43770},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾伯丁CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7614},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7327},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15712},
]},
],
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

                   text: '艾伯丁的PT構成(總分705168)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 674515, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30653, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '琴寤的PT統計(總分641363)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51567,
				            interval: 5156,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "琴寤殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1562},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6067},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12409},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 26201},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15703},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12230},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9533},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 29130},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7535},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14614},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13584},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 27817},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 29469},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 51567},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11988},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29652},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23905},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5860},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20431},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33824},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20988},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18615},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 36000},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10039},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30476},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8412},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 34224},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20644},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17852},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13244},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "琴寤強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13893},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "琴寤CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8428},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6418},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4730},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14319},
]},
],
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

                   text: '琴寤的PT構成(總分641363)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 593575, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13893, name: '強襲', legendMarkerType: 'square'},
{  y: 33895, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '@SuKi@的PT統計(總分636706)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 52257,
				            interval: 5225,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "@SuKi@殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5926},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1082},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5956},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5327},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14526},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7362},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12246},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3529},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13401},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 50235},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14646},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 27905},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6224},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13064},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6273},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11329},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 42707},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 44345},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16545},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11520},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11736},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7884},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5627},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 28435},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 52257},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27697},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19365},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25568},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2910},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 27783},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "@SuKi@強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10412},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 26809},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16481},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13089},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8789},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "@SuKi@CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14982},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1531},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21203},
]},
],
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

                   text: '@SuKi@的PT構成(總分636706)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 523410, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 75580, name: '強襲', legendMarkerType: 'square'},
{  y: 37716, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '檸檬汽水的PT統計(總分633709)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48471,
				            interval: 4847,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "檸檬汽水殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11290},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13458},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 21556},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17849},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 32837},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14041},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7285},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1784},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 28603},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11445},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3528},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1049},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13223},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 34271},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20783},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18333},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 48347},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15443},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 39110},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 959},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12712},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12564},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13221},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7423},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 48471},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11424},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11109},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 20269},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21675},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "檸檬汽水強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11479},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10718},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2431},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7350},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1807},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15587},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "檸檬汽水CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10608},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15931},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15722},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17011},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11003},
]},
],
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

                   text: '檸檬汽水的PT構成(總分633709)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 514062, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 49372, name: '強襲', legendMarkerType: 'square'},
{  y: 70275, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神靈的陪伴的PT統計(總分602040)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 66329,
				            interval: 6632,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神靈的陪伴殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2563},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 521},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1684},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5838},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10229},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 26775},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 28238},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10669},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21820},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 44799},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24967},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8972},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10197},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15640},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 61969},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16738},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21633},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3862},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17304},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7872},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6912},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13925},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 56349},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11860},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17497},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20861},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23605},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26718},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 66329},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8850},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神靈的陪伴CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6844},
]},
],
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

                   text: '神靈的陪伴的PT構成(總分602040)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 595196, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 6844, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '麵包點心的PT統計(總分547132)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50729,
				            interval: 5072,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "麵包點心殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8786},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4686},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5399},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3456},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8995},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 800},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6183},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6926},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 35792},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10452},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6179},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1432},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2525},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8113},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12108},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16798},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29691},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7878},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 50729},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7815},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18413},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8856},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10779},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25710},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25092},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10788},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 37313},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11752},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "麵包點心CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3851},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3594},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7051},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6506},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20258},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12765},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12885},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9746},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26221},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "麵包點心強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6434},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14207},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15053},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10973},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14142},
]},
],
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

                   text: '麵包點心的PT構成(總分547132)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 383446, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 102877, name: 'CBC', legendMarkerType: 'square'},
{  y: 60809, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '黃天航祿的PT統計(總分533606)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56534,
				            interval: 5653,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黃天航祿殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2152},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6900},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11821},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13919},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13833},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12615},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21946},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12210},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7294},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 32106},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8981},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4651},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8284},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2118},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6562},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3188},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15653},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16546},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6813},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3889},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32880},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7859},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25384},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12679},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11712},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17851},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4263},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 56534},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20379},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黃天航祿強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 28773},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18193},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12661},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17179},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18805},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1873},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14698},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黃天航祿CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10498},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7881},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2023},
]},
],
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

                   text: '黃天航祿的PT構成(總分533606)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 401022, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 112182, name: '強襲', legendMarkerType: 'square'},
{  y: 20402, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '威的PT統計(總分481366)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49392,
				            interval: 4939,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "威強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6383},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9721},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8498},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12772},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3571},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13143},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "威殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4223},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1915},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2938},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6657},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2223},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2487},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9205},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6017},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10124},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11018},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8294},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 28168},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11474},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6753},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19647},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9101},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15365},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3292},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3434},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7828},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12366},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2917},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16977},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5790},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 49392},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11789},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9770},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3368},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "威CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3450},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 785},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8577},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12831},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8635},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10144},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18588},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12251},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15762},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20201},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23101},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10421},
]},
],
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

                   text: '威的PT構成(總分481366)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 54088, name: '強襲', legendMarkerType: 'triangle'},
{  y: 282532, name: '殲滅', legendMarkerType: 'square'},
{  y: 144746, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '人類總是.jpg的PT統計(總分366536)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34549,
				            interval: 3454,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人類總是.jpg殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8513},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10783},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5840},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11779},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8664},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7089},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 25829},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7388},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7447},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6158},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6364},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11860},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 274},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 803},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2011},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30226},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10968},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 34549},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19797},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21889},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18563},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7032},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30499},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15512},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14157},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 28},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25636},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9210},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人類總是.jpg強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7648},
]},
],
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

                   text: '人類總是.jpg的PT構成(總分366536)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 358888, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7648, name: '強襲', legendMarkerType: 'square'},
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
				            text: '永恆fung的PT統計(總分348902)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40373,
				            interval: 4037,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "永恆fung殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2596},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3193},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5513},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5518},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11371},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3075},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6223},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6780},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12488},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 28205},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4481},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4475},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16239},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1989},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1008},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1846},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6638},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10083},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12156},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 31703},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5289},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5612},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1683},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8916},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16923},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2549},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8691},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8798},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8330},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 538},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "永恆fungCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5786},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7010},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10128},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7544},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40373},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "永恆fung強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5201},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14182},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15769},
]},
],
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

                   text: '永恆fung的PT構成(總分348902)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 242909, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 70841, name: 'CBC', legendMarkerType: 'square'},
{  y: 35152, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '啊斯的PT統計(總分339676)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38522,
				            interval: 3852,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啊斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6765},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6374},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1845},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 316},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3752},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7401},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6617},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7709},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12890},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18481},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 28471},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4358},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6313},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4313},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13606},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5716},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3986},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11414},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3976},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6929},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18239},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13021},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 38522},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22828},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10431},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16597},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11228},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9874},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11051},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啊斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8211},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啊斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5424},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3105},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9913},
]},
],
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

                   text: '啊斯的PT構成(總分339676)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 313023, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8211, name: 'CBC', legendMarkerType: 'square'},
{  y: 18442, name: '強襲', legendMarkerType: 'circle'},
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
				            text: 'Yuikit的PT統計(總分23872)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16724,
				            interval: 1672,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Yuikit殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3227},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3921},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16724},
]},
],
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

                   text: 'Yuikit的PT構成(總分23872)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 23872, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '白川的PT統計(總分20589)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13318,
				            interval: 1331,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白川殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6594},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 677},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白川強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13318},
]},
],
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

                   text: '白川的PT構成(總分20589)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 7271, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13318, name: '強襲', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
