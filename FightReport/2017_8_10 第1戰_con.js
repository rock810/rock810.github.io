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
				
				            maximum: 764627,
				            interval: 76462,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 145896},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 160585},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 234455},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 329806},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 396569},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 464468},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 424426},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 454020},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 531169},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 405678},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 379513},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 442684},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 444157},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 490808},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 507621},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 457219},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 411237},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 418592},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 445521},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 619078},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 515345},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 525828},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 574751},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 604261},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 570976},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 640053},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 587970},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 677472},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 590331},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 484019},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 15058},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 105260},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 132704},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 148415},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 266712},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 264944},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 242206},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 413272},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 402184},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 360326},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 510308},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 357038},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 257082},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 364592},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 389586},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 449352},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 538281},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 448890},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 632197},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 521136},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 643833},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 621646},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 764627},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 621787},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 618481},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 569647},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 684856},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 562325},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 746489},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 569245},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 663448},
]},
],
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
				
				            maximum: 27820435,
				            interval: 2782043,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 145896},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 306481},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 540936},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 870742},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1267311},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1731779},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2156205},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2610225},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3141394},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3547072},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3926585},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4369269},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4813426},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5304234},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5811855},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6269074},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6680311},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7098903},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7544424},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8163502},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8678847},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9204675},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9779426},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10383687},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10954663},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11594716},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12182686},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12860158},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13450489},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13934508},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 13949566},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 105260},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 237964},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 386379},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 653091},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 918035},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1160241},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1573513},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1975697},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2336023},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2846331},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3203369},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3460451},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3825043},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4214629},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4663981},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5202262},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5651152},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6283349},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6804485},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7448318},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8069964},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8834591},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9456378},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10074859},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10644506},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11329362},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11891687},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12638176},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13207421},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13870869},
]},
],
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
				
				            maximum: 511233,
				            interval: 51123,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 115010},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 120832},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 148038},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 212319},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 289360},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 265121},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 309886},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 277448},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 310248},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 295322},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 232717},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 305710},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 277893},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 273911},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 245138},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 239526},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 252566},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 230157},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 196486},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 373145},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 264387},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 298044},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 343327},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 436708},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 350823},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 364276},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 407787},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 366263},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 463015},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 277026},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 15058},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 17348},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 27480},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 39283},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 51554},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 73156},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 69902},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 69237},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 94395},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 78872},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 64259},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 82443},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 96056},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 91298},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 63945},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 79978},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 97937},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 68072},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 89916},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 70123},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 63695},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 102599},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 51192},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 96240},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 115343},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 149874},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 138984},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 62380},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 101029},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 66125},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 53649},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13538},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 12273},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 47134},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 65933},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 34053},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 129445},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 45303},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 82177},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 142049},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 46097},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 64353},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 40918},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 74966},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 152952},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 182505},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 119756},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 90599},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 98519},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 178912},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 182238},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 148359},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 176592},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 135184},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 52210},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 70279},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 136793},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 117803},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 210180},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 61191},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 153344},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 78603},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 92041},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 104044},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 172063},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 205328},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 145361},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 273492},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 245355},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 219130},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 265972},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 217680},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 176236},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 252804},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 295952},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 280610},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 355540},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 300026},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 396367},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 280655},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 334796},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 289910},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 362629},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 307039},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 358012},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 303372},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 304814},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 344651},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 300494},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 426060},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 511233},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13323},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7427},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 15552},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 50515},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 26097},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 58160},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 58012},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 100468},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 101142},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 124458},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 63071},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 41819},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 52843},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 55684},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 88437},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 104995},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 98602},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 171630},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 141342},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 221853},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 262091},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 318541},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 211711},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 159902},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 197541},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 272874},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 99337},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 368527},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 28916},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 79140},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13334},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 33236},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 28819},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 44134},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 33519},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 38685},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 81768},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 56361},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 40054},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 119878},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 76287},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 39027},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 58945},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 37950},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 80305},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 77746},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 50262},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 64200},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 99139},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 87184},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 69645},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 83457},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 103037},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 100567},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 68734},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 107168},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 118337},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 77468},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 114269},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 73075},
]},
],
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
				            text: '喵鼠的PT統計(總分1520015)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 179489,
				            interval: 17948,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1958},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3783},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 774},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1911},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4315},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 37},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6159},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6918},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5617},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6446},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7135},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10236},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 29919},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9163},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8096},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7899},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3293},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10839},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15380},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9279},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 12829},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 19293},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10989},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 16103},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17269},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 29239},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 71923},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 53378},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23474},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 27168},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 30064},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7368},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13304},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 32606},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 38126},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 21157},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11612},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23268},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17855},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 32451},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9959},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 107890},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 41254},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 132126},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 179489},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 140256},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17372},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 95998},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 29313},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 30929},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 76796},
]},
],
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

                   text: '喵鼠的PT構成(總分1520015)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 139878, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1059129, name: '強襲', legendMarkerType: 'square'},
{  y: 321008, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分1184478)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 120850,
				            interval: 12085,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14577},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4120},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11209},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11988},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 23956},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2251},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2189},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6426},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2170},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2544},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13027},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2073},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5424},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8917},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16454},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28893},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2257},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9721},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11190},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2935},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4445},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16502},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15733},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 41736},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2605},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9285},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17212},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10113},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 55391},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 55288},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 30372},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11641},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19815},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2301},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14772},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19363},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 66931},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 120850},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 38263},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 38368},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 93000},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 44961},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 99325},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 40093},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10377},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1440},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 19184},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13390},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12333},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12625},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 30654},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 33789},
]},
],
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

                   text: '雪歌的PT構成(總分1184478)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 289839, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 760847, name: '強襲', legendMarkerType: 'square'},
{  y: 133792, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分958898)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64882,
				            interval: 6488,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13615},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 15243},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 27241},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 29318},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 51190},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 27391},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 24612},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6210},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 28015},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 59601},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14596},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 28551},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 33379},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 24240},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 48973},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24012},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23129},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13698},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4016},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16174},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 50335},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 51967},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 28257},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 44191},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 64882},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30362},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 34713},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12336},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11492},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 53709},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11815},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7206},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8480},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12039},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11026},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8799},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4085},
]},
],
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

                   text: '阿拉的PT構成(總分958898)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 895448, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39540, name: '強襲', legendMarkerType: 'square'},
{  y: 23910, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分934763)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 63175,
				            interval: 6317,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9352},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7680},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4901},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1876},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9184},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5258},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3941},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8907},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 32746},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3399},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9197},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6689},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6968},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2515},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6331},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8295},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7132},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 32462},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7045},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8455},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7484},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2909},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11579},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3085},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19339},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7427},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10052},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 28667},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 17739},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16304},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12453},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 27046},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9482},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9546},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13621},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15585},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18888},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23918},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21843},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 44395},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 54828},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25674},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 30646},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 63175},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 31155},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 24941},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 28916},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9526},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15104},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13796},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14319},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4816},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16166},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11486},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 30873},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17229},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 38418},
]},
],
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

                   text: '葬月的PT構成(總分934763)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 226729, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 536301, name: '強襲', legendMarkerType: 'square'},
{  y: 171733, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分892523)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 74358,
				            interval: 7435,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7115},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9861},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14145},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8767},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16049},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 24811},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 48785},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14355},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21752},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13770},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 26742},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5025},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23508},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 27619},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 56036},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 25923},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 43566},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22883},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18525},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 34386},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 74358},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 40727},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10548},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 26668},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 47998},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 45207},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 64456},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10244},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20302},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9447},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12165},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10324},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14555},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11998},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15524},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14379},
]},
],
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

                   text: '雷克斯的PT構成(總分892523)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 804131, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 29903, name: '強襲', legendMarkerType: 'square'},
{  y: 58489, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分859456)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 76709,
				            interval: 7670,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4789},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 17274},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9357},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4641},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 28026},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17175},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 31663},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29162},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4161},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 30730},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4425},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 39956},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 31458},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13311},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3969},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18967},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 61230},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 26811},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 30652},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11556},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30299},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 73045},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 45929},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 49362},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 57687},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 43751},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7162},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 26525},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 76709},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11243},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7160},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5439},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5832},
]},
],
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

                   text: '嘎喵的PT構成(總分859456)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 829782, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11243, name: '強襲', legendMarkerType: 'square'},
{  y: 18431, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分822197)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 68333,
				            interval: 6833,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4331},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9180},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4570},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5699},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9219},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4285},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 31527},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5016},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10747},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14328},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12518},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8107},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4462},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3866},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 32667},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3506},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4273},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6169},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7354},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9522},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10010},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11025},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1496},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7113},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8441},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 31279},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17414},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5955},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5500},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8544},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13134},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9941},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11101},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 33362},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 33403},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 39265},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22877},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5196},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24180},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25773},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 33087},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 68333},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14490},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23193},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31429},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19332},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27432},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17430},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 52547},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18545},
]},
],
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

                   text: '秋風冷月的PT構成(總分822197)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 278148, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 339651, name: '強襲', legendMarkerType: 'square'},
{  y: 204398, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分772658)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64680,
				            interval: 6468,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7609},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2468},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 17195},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 21588},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13413},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13104},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16123},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 44799},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 23112},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 853},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 34368},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22188},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 50913},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 50685},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22625},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6218},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 40486},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23734},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18184},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4580},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 42650},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16920},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 38840},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12555},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 48529},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20844},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 64680},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16949},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 35273},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11050},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6354},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11921},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11848},
]},
],
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

                   text: '亞歷的PT構成(總分772658)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 731485, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11050, name: '強襲', legendMarkerType: 'square'},
{  y: 30123, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分747879)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 72899,
				            interval: 7289,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6493},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 17935},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4953},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11926},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8032},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2167},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 30433},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10253},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7426},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7050},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11641},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7604},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16208},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 36718},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19016},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12413},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 69681},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 48772},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 45489},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 72899},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 32887},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 37408},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4038},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15003},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5226},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9250},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 44647},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17093},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19327},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11678},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4055},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5589},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12680},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5117},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9848},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12644},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4642},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14486},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11516},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14331},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9305},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分747879)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 643666, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9305, name: '強襲', legendMarkerType: 'square'},
{  y: 94908, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分738863)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64686,
				            interval: 6468,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7838},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8625},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 42171},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10680},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 20814},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20221},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18844},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 26930},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25266},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 29185},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12379},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11876},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8736},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15362},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21387},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17036},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15178},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7548},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 30506},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 24318},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 64686},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8081},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5904},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8323},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6049},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1016},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5241},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6632},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11992},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11139},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 26480},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8849},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13816},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12300},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7093},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 30479},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17036},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 37507},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 549},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3181},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13784},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5616},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2982},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7726},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 24029},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 23444},
]},
],
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

                   text: '土土昕的PT構成(總分738863)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 291196, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 222953, name: '強襲', legendMarkerType: 'square'},
{  y: 224714, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分721743)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 72077,
				            interval: 7207,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10030},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 25108},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11887},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16341},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 17584},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12772},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13784},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17729},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 21313},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 41207},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 72077},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 36178},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 29451},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 26814},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 38346},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 23423},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 35703},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 26756},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5980},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6203},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1594},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2051},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2725},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1938},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1715},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5165},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2128},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4114},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7088},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4480},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9898},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6933},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 29150},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1107},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 2016},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3733},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7853},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9749},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10670},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9261},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6595},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6396},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10393},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14076},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14821},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14924},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 42484},
]},
],
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

                   text: '阿榮的PT構成(總分721743)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 158935, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 86305, name: '強襲', legendMarkerType: 'square'},
{  y: 476503, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分699560)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 65930,
				            interval: 6593,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14536},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4235},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 21595},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10783},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 16078},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10939},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 65930},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 40938},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 162},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9026},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2193},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1282},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14259},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 26223},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14824},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1338},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22692},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 44206},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8962},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 26213},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14431},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31592},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 41670},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14477},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1810},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17461},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14200},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2561},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 59451},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20110},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15310},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9483},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13671},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12083},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14152},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13366},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11324},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11885},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13902},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10207},
]},
],
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

                   text: '羽龍的PT構成(總分699560)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 574177, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24109, name: '強襲', legendMarkerType: 'square'},
{  y: 101274, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分540135)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 69304,
				            interval: 6930,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7612},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3568},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2901},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 31568},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 18298},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8653},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 964},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15644},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2245},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 23656},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 40657},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10029},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18586},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2278},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23835},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3242},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27099},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22468},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2934},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16068},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 38291},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18349},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15017},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19935},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2952},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3239},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18340},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26863},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 69304},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 25250},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8268},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12022},
]},
],
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

                   text: '藏月的PT構成(總分540135)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 519845, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20290, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '赤雲天的PT統計(總分539732)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 87694,
				            interval: 8769,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2290},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 386},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5285},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2011},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11344},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6813},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11376},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9956},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19862},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20598},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 75667},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10178},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16838},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11887},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11503},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10677},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4063},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15843},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 87694},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 46372},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 35725},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8431},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 28020},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11597},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18701},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4100},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9125},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8781},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2744},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13141},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8049},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10675},
]},
],
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

                   text: '赤雲天的PT構成(總分539732)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 483117, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 18724, name: '強襲', legendMarkerType: 'square'},
{  y: 37891, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分533942)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 82433,
				            interval: 8243,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 149},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 581},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1198},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 18},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 19226},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2126},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 28885},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16740},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12898},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3150},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5076},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12497},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13835},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2827},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 48197},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21382},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22802},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7806},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 24293},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21604},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 33441},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26827},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13825},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 58358},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 82433},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2448},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11417},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10974},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9316},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19613},
]},
],
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

                   text: '依司瑪耳的PT構成(總分533942)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 480174, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28929, name: '強襲', legendMarkerType: 'square'},
{  y: 24839, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分472758)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39044,
				            interval: 3904,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2998},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3722},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 681},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2056},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6583},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6898},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8384},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2801},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3599},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 26},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1313},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1649},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 54},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7636},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8438},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5911},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9963},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19317},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 39044},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8358},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7603},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6752},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 21894},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10793},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11507},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9557},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23599},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14251},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18949},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13403},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 32461},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 29596},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22549},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 35794},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21596},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 30230},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14568},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8201},
]},
],
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

                   text: '冰紅茶的PT構成(總分472758)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 131097, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 318892, name: '強襲', legendMarkerType: 'square'},
{  y: 22769, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分463627)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31040,
				            interval: 3104,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8333},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11507},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13719},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14098},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20614},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13240},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15618},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13921},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 19843},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 26839},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20559},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4990},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11176},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 28411},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10023},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7291},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 31040},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15343},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 26076},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3815},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8399},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 29305},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7929},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12060},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10501},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16984},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2424},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9615},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12712},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5789},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 18505},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12948},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分463627)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 335045, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 97129, name: '強襲', legendMarkerType: 'square'},
{  y: 31453, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分438494)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58791,
				            interval: 5879,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14669},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4160},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11036},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4388},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5919},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 17560},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 58791},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5566},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4964},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5019},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23283},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8389},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 40266},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13664},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2924},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10843},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4268},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 39624},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8087},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9229},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 3245},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7387},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3962},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8756},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22010},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25501},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15350},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10168},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8495},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12804},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11005},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17162},
]},
],
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

                   text: '魔法的PT構成(總分438494)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 378860, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 59634, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分29148)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20431,
				            interval: 2043,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4644},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 370},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3703},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20431},
]},
],
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

                   text: '冰的PT構成(總分29148)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 8717, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20431, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '黑瀨栞的PT統計(總分1391093)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 126739,
				            interval: 12673,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黑瀨栞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11204},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14115},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8269},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17798},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黑瀨栞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 15321},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 12616},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 31184},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 37066},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 48691},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 39265},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 31109},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10851},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 20242},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 51129},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 47968},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 45751},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 36231},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 53352},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 30966},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 23364},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 32500},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 37842},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2499},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 48570},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 58417},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 71545},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 126739},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 77386},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 62447},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 46383},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 95542},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 46816},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 77301},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6479},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黑瀨栞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14135},
]},
],
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

                   text: '黑瀨栞的PT構成(總分1391093)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1325572, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 51386, name: '強襲', legendMarkerType: 'square'},
{  y: 14135, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '萊姆布丁的PT統計(總分1071142)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 73082,
				            interval: 7308,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊姆布丁CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6517},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14764},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10525},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16342},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20533},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13459},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7082},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3993},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊姆布丁殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9824},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 23494},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 20535},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 34934},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 66041},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 49566},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 33996},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 50541},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 38055},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10004},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20047},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 57656},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 43315},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 36199},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15767},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 51592},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3782},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13269},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19282},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18675},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 32737},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1153},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 32680},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 44348},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 53547},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20650},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14956},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29187},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 73082},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 44005},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊姆布丁強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15008},
]},
],
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

                   text: '萊姆布丁的PT構成(總分1071142)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 962919, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15008, name: '強襲', legendMarkerType: 'square'},
{  y: 93215, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡歐的PT統計(總分1049020)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64651,
				            interval: 6465,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6436},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13710},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 24026},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14082},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 65},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 33152},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 30029},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 41713},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 20555},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19447},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18658},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17098},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 32306},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16235},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13774},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 33323},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9549},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11078},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15246},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 44976},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21365},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21814},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20545},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 42947},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 64651},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10080},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡歐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15323},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20590},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15648},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 44739},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22319},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 34141},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29856},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡歐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 13228},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 24466},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13746},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19217},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16814},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11563},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27038},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20261},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19273},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 28378},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 21692},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25429},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 28439},
]},
],
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

                   text: '卡歐的PT構成(總分1049020)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 596860, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 182616, name: '強襲', legendMarkerType: 'square'},
{  y: 269544, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '科洛的PT統計(總分1005969)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 78079,
				            interval: 7807,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "科洛殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 24994},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8110},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 20930},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13661},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 22742},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 46165},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 32733},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 53429},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 24470},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 30126},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 24173},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 51650},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 26087},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 35792},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5624},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 21044},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 38779},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14542},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16654},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 54315},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19816},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 38903},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 29135},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 40260},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 54347},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 78079},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 50440},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 38561},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 24167},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 32336},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "科洛強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11966},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12192},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "科洛CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9747},
]},
],
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

                   text: '科洛的PT構成(總分1005969)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 972064, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24158, name: '強襲', legendMarkerType: 'square'},
{  y: 9747, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '貝束刀的PT統計(總分983234)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 70899,
				            interval: 7089,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "貝束刀強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 15641},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15755},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 21559},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 25940},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 26501},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16246},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 34750},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10827},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 29937},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 30077},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "貝束刀殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6734},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6880},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8456},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8789},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7522},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8909},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 21743},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6298},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 31073},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8992},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8812},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7239},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10176},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19382},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14311},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10598},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 35576},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11010},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 488},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11650},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8794},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16901},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15117},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11692},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17740},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 37087},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11109},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11828},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "貝束刀CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8293},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 19538},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 19133},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 40790},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 25696},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 23294},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18276},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 70899},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 26805},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 24942},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 35203},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 36004},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 32222},
]},
],
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

                   text: '貝束刀的PT構成(總分983234)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 374906, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 227233, name: '強襲', legendMarkerType: 'square'},
{  y: 381095, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽鋒的PT統計(總分894577)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 63051,
				            interval: 6305,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽鋒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14262},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2728},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 17852},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6925},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2941},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12914},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 30683},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5137},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11737},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7031},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2576},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9411},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 44364},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 63051},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15459},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7541},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9394},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 2188},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11746},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15821},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 51306},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1725},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 42038},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11202},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7470},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8988},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8646},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 42898},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽鋒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 20565},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8437},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 21107},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 34082},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 42484},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 34602},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16742},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 53290},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21127},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽鋒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 23752},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16261},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 46331},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17770},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 23498},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 24749},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21746},
]},
],
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

                   text: '羽鋒的PT構成(總分894577)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 468034, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 252436, name: '強襲', legendMarkerType: 'square'},
{  y: 174107, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '歐姆蛋的PT統計(總分879508)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59025,
				            interval: 5902,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐姆蛋殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9380},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6363},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10038},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 16260},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 30529},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13881},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7631},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 410},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 22464},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14071},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14969},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15832},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 24469},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4956},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15003},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 50},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32569},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6846},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14049},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14421},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 104},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8815},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7859},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12226},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2298},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 39038},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2644},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4817},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐姆蛋CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14761},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9992},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14728},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19645},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 24391},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18460},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23116},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 37228},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 36715},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12157},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17986},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐姆蛋強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 38092},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 18332},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13857},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9592},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 59025},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8176},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4111},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 43921},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 52414},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 23688},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 27129},
]},
],
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

                   text: '歐姆蛋的PT構成(總分879508)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 351992, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 298337, name: '強襲', legendMarkerType: 'square'},
{  y: 229179, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '黑白郎君的PT統計(總分870051)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 81537,
				            interval: 8153,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黑白郎君殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4603},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11128},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4241},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 22196},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8916},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13896},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5362},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6504},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 26501},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6806},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3467},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7339},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3568},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 2316},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6875},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25541},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 50266},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1118},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 30826},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17386},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21906},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 15058},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黑白郎君強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4592},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4938},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10779},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11578},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8936},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 18776},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 39963},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20727},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19234},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23124},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 81537},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 78519},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15793},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 79047},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29038},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 54138},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黑白郎君CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15279},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 26528},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 31706},
]},
],
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

                   text: '黑白郎君的PT構成(總分870051)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 295819, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 500719, name: '強襲', legendMarkerType: 'square'},
{  y: 73513, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '動感烤布丁的PT統計(總分836556)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 55389,
				            interval: 5538,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "動感烤布丁CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9830},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 50576},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 42340},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17803},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 33630},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 55389},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29568},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 35031},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11933},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 23174},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "動感烤布丁殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8057},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7488},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9255},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11950},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12222},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 26899},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7926},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4504},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8098},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15515},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6684},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 21869},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27829},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9701},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7046},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12632},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3554},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12688},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9366},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6288},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 34976},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7875},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13120},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16567},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6630},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5908},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13922},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 39512},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8359},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "動感烤布丁強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17899},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6623},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11890},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14876},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 29657},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 35462},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6263},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 28172},
]},
],
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

                   text: '動感烤布丁的PT構成(總分836556)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 376440, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 150842, name: '強襲', legendMarkerType: 'square'},
{  y: 309274, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡洛特的PT統計(總分803696)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 62799,
				            interval: 6279,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡洛特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2924},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4794},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1813},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10466},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 26085},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 25877},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 27186},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8883},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29689},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7399},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14394},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4316},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2688},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8917},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6704},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13953},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 26986},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20152},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7862},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31542},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12514},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 608},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 42394},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 25315},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19040},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 32596},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 62799},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8214},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 21218},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡洛特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8178},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15577},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11027},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13863},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9436},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 26426},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18120},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 26768},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 26570},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 30372},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡洛特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21902},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 50612},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13204},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9220},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15093},
]},
],
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

                   text: '卡洛特的PT構成(總分803696)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 507328, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 186337, name: '強襲', legendMarkerType: 'square'},
{  y: 110031, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'LKK的PT統計(總分772408)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 74258,
				            interval: 7425,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "LKK強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11973},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11633},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10725},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9681},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18629},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10469},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11381},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15474},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21886},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21653},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 41745},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4408},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "LKK殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5139},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9452},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8164},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 27181},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17742},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 35467},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7625},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29764},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1841},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4616},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 26232},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22810},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11426},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 29470},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8194},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4924},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 336},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1475},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 74258},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 28541},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 33042},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7124},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 24147},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2347},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16638},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8293},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18818},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4482},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 33436},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "LKKCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6521},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7728},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12780},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11822},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10242},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14926},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15748},
]},
],
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

                   text: 'LKK的PT構成(總分772408)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 502984, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 189657, name: '強襲', legendMarkerType: 'square'},
{  y: 79767, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '楓丞瑜的PT統計(總分765489)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53852,
				            interval: 5385,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "楓丞瑜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2570},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 19135},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7503},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 48065},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 53852},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18937},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5801},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 37636},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16001},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23601},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19794},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "楓丞瑜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 19120},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 31813},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21578},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9706},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5070},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30721},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23817},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8496},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "楓丞瑜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6399},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11732},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6450},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8896},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4383},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6392},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 37046},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6678},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4430},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13220},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14468},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6651},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 35978},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7130},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7676},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2981},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13078},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13888},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 735},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7694},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15330},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 27418},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9710},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15214},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14723},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5905},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16154},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 41914},
]},
],
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

                   text: '楓丞瑜的PT構成(總分765489)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 362273, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 252895, name: '強襲', legendMarkerType: 'square'},
{  y: 150321, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '居的PT統計(總分761282)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 74092,
				            interval: 7409,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "居殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8192},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15946},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8828},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1574},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 26432},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 19428},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 44185},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 32236},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 41565},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 29103},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14996},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 33902},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 21312},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24680},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15369},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21743},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 37306},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 74092},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12663},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22917},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11219},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 23708},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8430},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 55704},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 30057},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20561},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 22830},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 34055},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "居強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15271},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17735},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15243},
]},
],
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

                   text: '居的PT構成(總分761282)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 713033, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 48249, name: '強襲', legendMarkerType: 'square'},
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
				            text: '夜雨聲煩的PT統計(總分719527)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50095,
				            interval: 5009,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜雨聲煩殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7373},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6458},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7770},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 205},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5147},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 62},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16086},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11450},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 29721},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7781},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9577},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18390},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8690},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4032},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9061},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 37085},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4351},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9617},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8155},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15492},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10048},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8535},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32505},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 21236},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15007},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17892},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9086},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 50095},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19604},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜雨聲煩強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8946},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7335},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8741},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 22658},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10111},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10356},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7100},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6048},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11370},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9416},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 17298},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11277},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3701},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12765},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 40323},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23382},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29980},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜雨聲煩CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20010},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17614},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 40585},
]},
],
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

                   text: '夜雨聲煩的PT構成(總分719527)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 400511, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 240807, name: '強襲', legendMarkerType: 'square'},
{  y: 78209, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '哈哈哈UCCU的PT統計(總分711582)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 89242,
				            interval: 8924,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈哈哈UCCU殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2604},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 18},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5416},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3218},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3806},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6061},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14405},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14871},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13021},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6920},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7272},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7357},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1899},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 53234},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20330},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17461},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15106},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7911},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈哈哈UCCU強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 15764},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9598},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 32433},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 29663},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14421},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9274},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 35468},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17119},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16376},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈哈哈UCCUCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10827},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9357},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9932},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12833},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 28425},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 45967},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 54839},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 22283},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17198},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 29653},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 89242},
]},
],
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

                   text: '哈哈哈UCCU的PT構成(總分711582)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 200910, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 180116, name: '強襲', legendMarkerType: 'square'},
{  y: 330556, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '剛勇征一郎的PT統計(總分396159)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51148,
				            interval: 5114,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "剛勇征一郎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13372},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15237},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 38060},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 40049},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 23268},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9435},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 51148},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 42360},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "剛勇征一郎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6985},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3324},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3484},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8002},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8518},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12464},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7428},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 33004},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10300},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12365},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13300},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20385},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "剛勇征一郎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 23671},
]},
],
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

                   text: '剛勇征一郎的PT構成(總分396159)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 139559, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 232929, name: '強襲', legendMarkerType: 'square'},
{  y: 23671, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Pudding的PT統計(總分38273)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16904,
				            interval: 1690,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Pudding強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15026},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16904},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Pudding殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6343},
]},
],
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

                   text: 'Pudding的PT構成(總分38273)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 6343, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 31930, name: '強襲', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart36.render();
}
