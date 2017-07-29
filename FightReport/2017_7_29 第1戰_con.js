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
				
				            maximum: 178938,
				            interval: 17893,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14581},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 125},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3931},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9430},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3956},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8638},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17658},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11256},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 23594},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 19466},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 40572},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 45853},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 31836},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 39839},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 37006},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 25762},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2414},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 38178},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 61043},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 89369},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 104484},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 118873},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 89668},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 78539},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 46812},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 73735},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 132659},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 91080},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 178938},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 151272},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 9960},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13654},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 13527},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12596},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13088},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4754},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 21089},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6130},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6126},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 42734},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9583},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 26916},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 33480},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 26786},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30912},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 32539},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15849},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 47574},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 23680},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9445},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5285},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5533},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20985},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 57663},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 150343},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 141077},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 129027},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 129093},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 83296},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 177137},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 120648},
]},
],
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
				
				            maximum: 3011076,
				            interval: 301107,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14581},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 14706},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 18637},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 28067},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 32023},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 40661},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 58319},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 69575},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 93169},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 112635},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 153207},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 199060},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 230896},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 270735},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 307741},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 333503},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 335917},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 374095},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 435138},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 524507},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 628991},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 747864},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 837532},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 916071},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 962883},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1036618},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1169277},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1260357},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1439295},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1590567},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 1600527},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13654},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 27181},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 39777},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 52865},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 57619},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 78708},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 84838},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 90964},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 133698},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 143281},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 170197},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 203677},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 230463},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 261375},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 293914},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 309763},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 357337},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 381017},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 390462},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 395747},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 401280},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 422265},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 479928},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 630271},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 771348},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 900375},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1029468},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1112764},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1289901},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1410549},
]},
],
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
				
				            maximum: 114591,
				            interval: 11459,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14067},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 125},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2541},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7918},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1086},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3762},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14224},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5743},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 17732},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6961},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 25260},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5123},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12516},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9577},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8813},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4034},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2414},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18743},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 46004},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 71722},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 59989},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 63300},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 48895},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17023},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31305},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 27160},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 57464},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 49999},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 114591},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 99051},
{ x: new Date(0, 0, 0, 12, 45, 0), y: 9960},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9920},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9786},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6907},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11635},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3398},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17988},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6130},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6126},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15618},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9583},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11495},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 23903},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15790},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23948},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23000},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4283},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 32147},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20459},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9445},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 919},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2668},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20137},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 38789},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 55512},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 57045},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 38495},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 41942},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 28245},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 80163},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 58701},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 514},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 322},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1769},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4876},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3434},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5513},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1850},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12505},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13750},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 39335},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18350},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 26973},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20896},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19132},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16226},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14214},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8216},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 26484},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 37307},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20867},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 57017},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14252},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 39629},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 65619},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 36791},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 43715},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 40538},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2989},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1207},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4315},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5569},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 652},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4186},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2010},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3902},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8991},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4366},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 848},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16947},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 50331},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16067},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 36957},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15830},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 30439},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1390},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1190},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1101},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4012},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1562},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1395},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 970},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3289},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7297},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2596},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3209},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 825},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9431},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18011},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18266},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19906},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4499},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1255},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6946},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9576},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4290},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20632},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11683},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 745},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2534},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1374},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1453},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1356},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3101},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 21547},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15421},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8925},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10996},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2778},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7529},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7664},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6436},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3221},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2865},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1927},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 44500},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 84032},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 90532},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 71084},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18094},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 81144},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 31508},
]},
],
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
				            text: '土土昕的PT統計'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 65619,
				            interval: 6561,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 65},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 411},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 186},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 595},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 39},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8112},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 545},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1333},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 870},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20896},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19132},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 65619},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23312},
]},
],
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

							
}




