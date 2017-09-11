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
				
				            maximum: 178520,
				            interval: 17852,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 8019},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 11998},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 30666},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 15658},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 37961},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 20688},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 29402},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 23989},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 47483},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 6276},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 9974},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 60806},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 38484},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 29326},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 72094},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 62814},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 118770},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 100242},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 44442},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 96505},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 83609},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 94369},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 148257},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 172694},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 142940},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 129084},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 112068},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 58059},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 90624},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 111319},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 1136},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 34},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 479},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 4173},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 9161},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 15498},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 17142},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 31213},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 10909},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 47404},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 48379},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 8312},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 46658},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 66625},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 63283},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 75351},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 78786},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 98077},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 129981},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 109756},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 163750},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 109735},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 95220},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 80428},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 120854},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 50019},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 134711},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 178520},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 175016},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 144325},
]},
],
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
				
				            maximum: 4123557,
				            interval: 412355,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 8019},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 20017},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 50683},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 66341},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 104302},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 124990},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 154392},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 178381},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 225864},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 232140},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 242114},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 302920},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 341404},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 370730},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 442824},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 505638},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 624408},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 724650},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 769092},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 865597},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 949206},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 1043575},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1191832},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 1364526},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 1507466},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 1636550},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1748618},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1806677},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 1897301},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2008620},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 2009756},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 36},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 515},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 4688},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 13849},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 29347},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 46489},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 77702},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 88611},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 136015},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 184394},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 192706},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 239364},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 305989},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 369272},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 444623},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 523409},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 621486},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 751467},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 861223},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 1024973},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 1134708},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1229928},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 1310356},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 1431210},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 1481229},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1615940},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1794460},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 1969476},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2113801},
]},
],
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
				
				            maximum: 99159,
				            interval: 9915,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 7247},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 3160},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 11839},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 12780},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 23979},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 12278},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 23079},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 15455},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 39090},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 3071},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 6124},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 19545},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 16637},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 22263},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 46506},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 57314},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 65931},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 66913},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 42048},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 59489},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 61906},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 50707},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 67887},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 69002},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 88370},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 86295},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 65732},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 30129},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 47753},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 59752},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 1136},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2193},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 8674},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 6600},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 776},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1991},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 2686},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 3734},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 2399},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 870},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 590},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 4186},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 18542},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 881},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 7095},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 21372},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 18679},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 11269},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 14921},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 4533},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 12264},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 20787},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 18314},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 12917},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 22828},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 34},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 479},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1048},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1710},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 2186},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 4211},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 14794},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 6086},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 25990},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 6123},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 8312},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 25788},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 35220},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 43106},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 49644},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 35257},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 58362},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 61429},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 46538},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 54229},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 49310},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 77023},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 15338},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 11039},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 17859},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 63554},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 99127},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 67328},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 90822},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1858},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1432},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 5053},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 744},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 9645},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 3864},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 1101},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 10270},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 17793},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 15084},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 15771},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 10796},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 10575},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 17793},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 8685},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 5490},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 18360},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 14422},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 3680},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 13345},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 14882},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 33394},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 3125},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 7451},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 11454},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 11499},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 11366},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 4079},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 11769},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 38392},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 19769},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 21135},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 20177},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 7914},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 28445},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 23944},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 57756},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 52643},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 91728},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 51740},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 12707},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 46730},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 95393},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 28480},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 71157},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 66048},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 92806},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 20109},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 772},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 6645},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 10153},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 2878},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 7382},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 7634},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 4332},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 5848},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 4659},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 3205},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1451},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 40391},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 21257},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2877},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 7046},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 4619},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 45744},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 11957},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 2394},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 18337},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 21703},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 32393},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 65449},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 99159},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 42306},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 42789},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 25549},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9616},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 29954},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 28739},
]},
],
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
				            text: '葬月的PT統計(總分261287)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56004,
				            interval: 5600,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 203},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 167},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 36},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4820},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 4545},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 672},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 33236},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 52643},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 55590},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 36739},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 56004},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 16630},
]},
],
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

                   text: '葬月的PT構成(總分261287)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 9773, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 251514, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '雪歌的PT統計(總分253891)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 95393,
				            interval: 9539,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 29, 0), y: 26529},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 203},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 300},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 832},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 51},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 950},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 1861},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 194},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 585},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9808},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 6451},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2225},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 3125},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 4558},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 38392},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 15702},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 46730},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 95393},
]},
],
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

                   text: '雪歌的PT構成(總分253891)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 23462, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26529, name: '強襲', legendMarkerType: 'square'},
{  y: 203900, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分228417)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48075,
				            interval: 4807,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 02, 0), y: 96},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 5644},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 38},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 181},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 24},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 24},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 7451},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 6896},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 7343},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 3316},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 5117},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 4067},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 4010},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 7914},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 24520},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 36138},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 30393},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 8690},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 28480},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 48075},
]},
],
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

                   text: '土土昕的PT構成(總分228417)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 6007, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 222410, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '喵鼠的PT統計(總分226713)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36802,
				            interval: 3680,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 01, 0), y: 34},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 180},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 177},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 296},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 18},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 3568},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 4721},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 3484},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 8613},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 6652},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 17125},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 20177},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 23167},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 23944},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 21347},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 4017},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 23082},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 29309},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 36802},
]},
],
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

                   text: '喵鼠的PT構成(總分226713)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 8994, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 217719, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '嘎喵的PT統計(總分203875)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50893,
				            interval: 5089,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 16, 0), y: 3352},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 3680},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 6865},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 571},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 248},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 7099},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 11757},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 15958},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 27105},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 21},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 316},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 611},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 282},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 4291},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 11271},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 50893},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 40495},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 5790},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 13270},
]},
],
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

                   text: '嘎喵的PT構成(總分203875)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 189978, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13897, name: '強襲', legendMarkerType: 'square'},
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
				            text: '魔法的PT統計(總分166366)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35872,
				            interval: 3587,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 16, 0), y: 5278},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 3479},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 209},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1253},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 458},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 891},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 268},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 847},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1057},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 381},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 413},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 1134},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 1251},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 16793},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 35872},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 8387},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 565},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 22},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 44},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 23},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 658},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 3541},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 24257},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 12744},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 5838},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 627},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 984},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 3362},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 8884},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 7367},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1010},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 8597},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 9872},
]},
],
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

                   text: '魔法的PT構成(總分166366)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 116906, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 40703, name: '強襲', legendMarkerType: 'square'},
{  y: 8757, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分139117)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19508,
				            interval: 1950,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 05, 0), y: 286},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 35},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 18},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 8631},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 4458},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 4461},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 1305},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 5639},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 13056},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 12124},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 16061},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 2480},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 5625},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 19508},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 18762},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 797},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 3764},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 3823},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4946},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 3649},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 4677},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 5010},
]},
],
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

                   text: '亞歷的PT構成(總分139117)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 112451, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26666, name: '強襲', legendMarkerType: 'square'},
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
				            text: '寇內爾緹的PT統計(總分124378)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25440,
				            interval: 2544,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 04, 0), y: 146},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 229},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 307},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1223},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 21},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 826},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 646},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 15674},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 6731},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 8083},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 436},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 1510},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 25440},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 21165},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8210},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 692},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 3452},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2505},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 9592},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1151},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 729},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 8186},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 7422},
]},
],
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

                   text: '寇內爾緹的PT構成(總分124378)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 106890, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17488, name: '強襲', legendMarkerType: 'square'},
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
				            text: '阿拉的PT統計(總分105036)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19624,
				            interval: 1962,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 07, 0), y: 240},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 4558},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 10108},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 404},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 6506},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 8217},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4274},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 11098},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 19624},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 4305},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9669},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 6808},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 09, 0), y: 5152},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 3957},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 3712},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 4480},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1924},
]},
],
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

                   text: '阿拉的PT構成(總分105036)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 85811, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17301, name: '強襲', legendMarkerType: 'square'},
{  y: 1924, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分96700)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12029,
				            interval: 1202,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 09, 0), y: 4150},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 652},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 6872},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 6868},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 2758},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 6618},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 9697},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 12029},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 740},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 310},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 2178},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 4321},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 8033},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9419},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 58},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 1045},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 10, 0), y: 41},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 2930},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 3429},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 3355},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 7289},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 3908},
]},
],
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

                   text: '藏月的PT構成(總分96700)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 75748, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20952, name: '強襲', legendMarkerType: 'square'},
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
				            text: '依司瑪耳的PT統計(總分88434)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29153,
				            interval: 2915,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1484},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 20},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 583},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 693},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 323},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 26},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 2068},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 10475},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 3335},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4343},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 153},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 29153},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 805},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 17793},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 8370},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 7981},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 829},
]},
],
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

                   text: '依司瑪耳的PT構成(總分88434)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 52656, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 34949, name: '強襲', legendMarkerType: 'square'},
{  y: 829, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分82854)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26107,
				            interval: 2610,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 08, 0), y: 425},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 393},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 2001},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 786},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 673},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 11999},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 16531},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 26107},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 11022},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 360},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4236},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 12, 0), y: 1101},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 7220},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分82854)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 74533, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8321, name: '強襲', legendMarkerType: 'square'},
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
				            text: '冰紅茶的PT統計(總分71687)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30914,
				            interval: 3091,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 04, 0), y: 227},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 146},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 562},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 273},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 20},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 342},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1040},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 17},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 295},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 368},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 300},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 978},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1983},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 12630},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 30914},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 13772},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 41},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 311},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2427},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 887},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 707},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 744},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 1100},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 840},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 08, 0), y: 763},
]},
],
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

                   text: '冰紅茶的PT構成(總分71687)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 67533, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3391, name: '強襲', legendMarkerType: 'square'},
{  y: 763, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分56969)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 9745,
				            interval: 974,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 07, 0), y: 6449},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 211},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 7128},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 3634},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 1806},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 3691},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 2827},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 1552},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 5831},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 4256},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4866},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 4973},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 9745},
]},
],
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

                   text: '冰的PT構成(總分56969)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 33129, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23840, name: '強襲', legendMarkerType: 'square'},
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
				            text: '阿榮的PT統計(總分8077)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 5053,
				            interval: 505,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 25, 0), y: 46},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 478},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1716},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 5053},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 784},
]},
],
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

                   text: '阿榮的PT構成(總分8077)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 8077, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '雪藍的PT統計(總分289903)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45744,
				            interval: 4574,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪藍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 17, 0), y: 17662},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 22828},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪藍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 34},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 194},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 341},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 19},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 19},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 39},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 19},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 20},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 22},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 15838},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1781},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 972},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 1090},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪藍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 11, 0), y: 40391},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 21257},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 45744},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 10822},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 27315},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 26882},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 42789},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 13821},
]},
],
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

                   text: '雪藍的PT構成(總分289903)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 20392, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 40490, name: '強襲', legendMarkerType: 'square'},
{  y: 229021, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿基里斯的PT統計(總分235763)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 99159,
				            interval: 9915,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿基里斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 4936},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 32},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3902},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 7544},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 5030},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 874},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 4573},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 4656},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 4460},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 1330},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿基里斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 4199},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 3982},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿基里斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 6570},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 6711},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 62381},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 99159},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 15424},
]},
],
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

                   text: '阿基里斯的PT構成(總分235763)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 37337, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8181, name: '強襲', legendMarkerType: 'square'},
{  y: 190245, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '梵梵的PT統計(總分232174)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29954,
				            interval: 2995,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "梵梵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 4332},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 5848},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 4659},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 3205},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1451},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2877},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 5198},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 2733},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1899},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 5078},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 11728},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9616},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 29954},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 28739},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "梵梵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 19},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 1333},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 3838},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 21},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 5026},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 4106},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 10080},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 16288},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 5304},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 17351},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 13447},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 16373},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 22},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 1904},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "梵梵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 10, 0), y: 2399},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 3710},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 4177},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 9459},
]},
],
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

                   text: '梵梵的PT構成(總分232174)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 95112, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19745, name: '強襲', legendMarkerType: 'square'},
{  y: 117317, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '索蕾拉的PT統計(總分196545)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27022,
				            interval: 2702,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "索蕾拉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 128},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 384},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 280},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 4217},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 4946},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 5037},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 6599},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 6125},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 4897},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 4815},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 9227},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 984},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 6658},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 26158},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 12783},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 11919},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 24410},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 19408},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 27022},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 1136},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "索蕾拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 3257},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 3734},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 4164},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 6598},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "索蕾拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 772},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 887},
]},
],
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

                   text: '索蕾拉的PT構成(總分196545)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 177133, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17753, name: '強襲', legendMarkerType: 'square'},
{  y: 1659, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '文秀的PT統計(總分196464)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27831,
				            interval: 2783,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "文秀殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 648},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 1357},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1322},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 2052},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 19},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 11315},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 10871},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 19851},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 27831},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1495},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 1875},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 1145},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 7153},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 26091},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 23571},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 21585},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 7236},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 4477},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "文秀強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 12, 0), y: 590},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 5199},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 7804},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 4510},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "文秀CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 671},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1363},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 1848},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 1886},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 495},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 2204},
]},
],
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

                   text: '文秀的PT構成(總分196464)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 169894, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 18103, name: '強襲', legendMarkerType: 'square'},
{  y: 8467, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '帕里克的PT統計(總分143329)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32028,
				            interval: 3202,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "帕里克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 96},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 1345},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 385},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 34},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 2775},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 847},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 36},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 229},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 4689},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 15952},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 58},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 11931},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 3411},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 123},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1014},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 13213},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 32028},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 30173},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 2970},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 6090},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 3072},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "帕里克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1359},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 4404},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 7095},
]},
],
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

                   text: '帕里克的PT構成(總分143329)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 130471, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12858, name: '強襲', legendMarkerType: 'square'},
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
				            text: '尼歐賈斯汀的PT統計(總分122132)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13954,
				            interval: 1395,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "尼歐賈斯汀強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 19, 0), y: 6252},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9079},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "尼歐賈斯汀殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 3849},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 8202},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 5010},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 13954},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 11834},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 2904},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 11553},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 11592},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 12270},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 4980},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 4911},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 5334},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 10406},
]},
],
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

                   text: '尼歐賈斯汀的PT構成(總分122132)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 106801, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15331, name: '強襲', legendMarkerType: 'square'},
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
				            text: '約書亞的PT統計(總分115400)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12685,
				            interval: 1268,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "約書亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 1927},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 671},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 4137},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 5645},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 4004},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 4524},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 208},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 3093},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 2807},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 9742},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 7270},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 12685},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 5828},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 6204},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 10226},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 6350},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 3371},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 8133},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 3550},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 1702},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "約書亞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2193},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 2686},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 3161},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 5283},
]},
],
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

                   text: '約書亞的PT構成(總分115400)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 102077, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13323, name: '強襲', legendMarkerType: 'square'},
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
				            text: '艾克西亞的PT統計(總分95313)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16546,
				            interval: 1654,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾克西亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 1760},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 696},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 9068},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 11199},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 12602},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 16546},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 11214},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 2818},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 7280},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 1309},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 1153},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 12316},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 3506},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾克西亞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 23, 0), y: 3846},
]},
],
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

                   text: '艾克西亞的PT構成(總分95313)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 91467, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3846, name: '強襲', legendMarkerType: 'square'},
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
				            text: '凱爾的PT統計(總分94357)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11342,
				            interval: 1134,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 24, 0), y: 4460},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 11342},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 6644},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 3826},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 3796},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 9159},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 20},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 924},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 8070},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 8272},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 8340},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 2290},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 8517},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5758},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 6271},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 6664},
]},
],
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

                   text: '凱爾的PT構成(總分94357)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 59862, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15802, name: '強襲', legendMarkerType: 'square'},
{  y: 18693, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'RAF的PT統計(總分93325)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25751,
				            interval: 2575,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "RAF殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 4516},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 8497},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 3264},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 5380},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 17863},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 11937},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 25751},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 847},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "RAF強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 21, 0), y: 6035},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9235},
]},
],
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

                   text: 'RAF的PT構成(總分93325)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 78055, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15270, name: '強襲', legendMarkerType: 'square'},
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
				            text: '螢熾的PT統計(總分65075)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 7004,
				            interval: 700,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "螢熾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 2640},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1676},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 4540},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 2318},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 2586},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 3240},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 4806},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 7004},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4574},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 5365},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "螢熾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 3343},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 4186},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 3882},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 5089},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 5234},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 4592},
]},
],
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

                   text: '螢熾的PT構成(總分65075)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 38749, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26326, name: '強襲', legendMarkerType: 'square'},
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
				            text: '威爾喬斯丹的PT統計(總分64904)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16706,
				            interval: 1670,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "威爾喬斯丹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 160},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 694},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 434},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 48},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 5351},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 255},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 3120},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 574},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 9013},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1727},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 2578},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 37},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 5732},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 1610},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 44},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 620},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 114},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 119},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1245},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 294},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 427},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1983},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 40},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 641},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 130},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1252},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 315},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 44},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 16706},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "威爾喬斯丹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 776},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 632},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 870},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 893},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 881},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 870},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 687},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 953},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 1036},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "威爾喬斯丹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 17, 0), y: 1135},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 864},
]},
],
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

                   text: '威爾喬斯丹的PT構成(總分64904)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 55307, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7598, name: '強襲', legendMarkerType: 'square'},
{  y: 1999, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '微笑之安德烈的PT統計(總分33376)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21703,
				            interval: 2170,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "微笑之安德烈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "微笑之安德烈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 19, 0), y: 11673},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 21703},
]},
],
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

                   text: '微笑之安德烈的PT構成(總分33376)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 0, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33376, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '迪克的PT統計(總分23256)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 4890,
				            interval: 489,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 4845},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 2585},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 4890},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3583},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 2878},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 4475},
]},
],
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

                   text: '迪克的PT構成(總分23256)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 12320, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4475, name: '強襲', legendMarkerType: 'square'},
{  y: 6461, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '修貝爾的PT統計(總分8440)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 8440,
				            interval: 844,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "修貝爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 8440},
]},
],
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

                   text: '修貝爾的PT構成(總分8440)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 8440, name: '殲滅', legendMarkerType: 'triangle'},
			]
		}
		]
	});
	PlayerPieChart31.render();
}
