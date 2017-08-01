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
				
				            maximum: 508026,
				            interval: 50802,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 29819},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 54725},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2260},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3697},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 177358},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 158300},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 175794},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 193067},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 164661},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 66383},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 741},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3870},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13737},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 333302},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 372184},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 369848},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 307273},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 172715},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 117494},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1133},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5575},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3802},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5948},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 508026},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 471711},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 381041},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 479273},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 341307},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 253822},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8794},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 21335},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 31196},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 27231},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 41363},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 30069},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 58730},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4619},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4318},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9955},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 142723},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 324553},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 276356},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 188354},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 94702},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2883},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2023},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1567},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 131792},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 253467},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 270509},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 208642},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 322518},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 238952},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 160318},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 172071},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 207178},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 222616},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 254454},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 140243},
]},
],
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
				
				            maximum: 9022397,
				            interval: 902239,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 29819},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 84544},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 86804},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 90501},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 267859},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 426159},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 601953},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 795020},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 959681},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1026064},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1026805},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1030675},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1030675},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1044412},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1377714},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1749898},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2119746},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2427019},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2599734},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2717228},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2718361},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2723936},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2727738},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2733686},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3241712},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3713423},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4094464},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4573737},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4915044},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5168866},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5177660},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 21335},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 52531},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 79762},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 121125},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 151194},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 209924},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 214543},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 218861},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 228816},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 228816},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 371539},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 696092},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 972448},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1160802},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1255504},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1258387},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1260410},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1261977},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1393769},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1647236},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1917745},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2126387},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2448905},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2687857},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2848175},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3020246},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3227424},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3450040},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3704494},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3844737},
]},
],
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
				
				            maximum: 280521,
				            interval: 28052,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8366},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7405},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10320},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18416},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17120},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15208},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4884},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13795},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 38200},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 43981},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21034},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12293},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4364},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1109},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3802},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12378},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 50338},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13861},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 72588},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28900},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 34948},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8794},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16114},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 38338},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2260},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3697},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 108316},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 110783},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 104854},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 89496},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 76074},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 36782},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 741},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3870},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13737},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 181534},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 159117},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 224460},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 99808},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 80689},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 52189},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5575},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5948},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 263306},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 255903},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 280521},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 247671},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 163365},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 137431},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10875},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15123},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11625},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16548},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14504},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5952},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4619},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4318},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9955},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 125360},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 156411},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 98602},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 70746},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11369},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2883},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2023},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1567},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29008},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 103274},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 148456},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 125020},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 95171},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 94988},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 61342},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 101737},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 124557},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 128311},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 139580},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 65724},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9965},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8581},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10660},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11167},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15565},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 42525},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12710},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 148271},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 164343},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 110369},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 83333},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 99159},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 130692},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 83249},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 63634},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 191954},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 131631},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 90329},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 61417},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 64167},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 58434},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 90582},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 45882},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 495},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7492},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4946},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13648},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10253},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4653},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 19871},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13411},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7239},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3625},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19501},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 38804},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19988},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 35393},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12333},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8647},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8917},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18454},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 35871},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24292},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28637},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5339},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16387},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 61637},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 37197},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 52524},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 86451},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 73379},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24717},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 137973},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 174867},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 101407},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 186431},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 79733},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 60941},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 232342},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 165470},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 86659},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 159014},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 149042},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 81443},
]},
],
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
				            text: '喵鼠的PT統計(總分498389)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 151244,
				            interval: 15124,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2692},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7528},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5319},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 151244},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 111341},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 34899},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16058},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 59785},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25938},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 79753},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 68},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1099},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2665},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
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
                                          PlayerChart1.render();
                                        }
                                      }
                                    });
                            PlayerChart1.render();
var PlayerPieChart1 = new CanvasJS.Chart('PlayerPieChartContainer1',

    {

        title:{

                   text: '喵鼠的PT構成(總分498389)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 494557, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 3832, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '羽龍的PT統計(總分390402)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 106252,
				            interval: 10625,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 162},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 551},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1637},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 262},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5011},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3826},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3323},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5611},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1740},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 86038},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 106252},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47167},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 47118},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 39226},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17553},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19695},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1622},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3580},
]},
],
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

                   text: '羽龍的PT構成(總分390402)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 20411, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 364789, name: 'CBC', legendMarkerType: 'square'},
{  y: 5202, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分373991)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 128132,
				            interval: 12813,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 68},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 167},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10757},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5748},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5566},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 38002},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 97213},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 128132},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 42250},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21743},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24345},
]},
],
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

                   text: '雪歌的PT構成(總分373991)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 22306, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 351685, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '土土昕的PT統計(總分336590)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 84799,
				            interval: 8479,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2536},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 225},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1246},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 131},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7645},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5444},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5454},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 76},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5488},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3246},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12589},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1397},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7545},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14826},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 71107},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 83333},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 84799},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29499},
]},
],
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

                   text: '土土昕的PT構成(總分336590)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 44084, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23768, name: '強襲', legendMarkerType: 'square'},
{  y: 268738, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分281859)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46914,
				            interval: 4691,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 404},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 270},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 300},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 165},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 282},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 46914},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 32632},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21017},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4894},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 161},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 30257},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21846},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17215},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5826},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 926},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17635},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5341},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 37878},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 20828},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 131},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1457},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5345},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1380},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5402},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1085},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 718},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1484},
]},
],
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

                   text: '嘎喵的PT構成(總分281859)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 264988, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13584, name: '強襲', legendMarkerType: 'square'},
{  y: 3287, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分255825)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28208,
				            interval: 2820,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3235},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2146},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2197},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 891},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4051},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3869},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15851},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8366},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1808},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18775},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22376},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28208},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20173},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6046},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7154},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4035},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17325},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22100},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12291},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15619},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1592},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4523},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4065},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6536},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9141},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4653},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4553},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4244},
]},
],
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

                   text: '雷克斯的PT構成(總分255825)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 218110, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24265, name: 'CBC', legendMarkerType: 'square'},
{  y: 13450, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分231349)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32699,
				            interval: 3269,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1046},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 426},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 769},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 345},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 32699},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20797},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9489},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1880},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5158},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8242},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16391},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13317},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14375},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6426},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4777},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10456},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12968},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19372},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8251},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1473},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1059},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4117},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4382},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8039},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 808},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1383},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3540},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5527},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4278},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5538},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3978},
]},
],
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

                   text: '葬月的PT構成(總分231349)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 188700, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17597, name: 'CBC', legendMarkerType: 'square'},
{  y: 25052, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分218536)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22837,
				            interval: 2283,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8948},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5799},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14247},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9435},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19609},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 915},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3302},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2977},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14024},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5826},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10242},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11172},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5802},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9786},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9715},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3828},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6974},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7162},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9965},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15507},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7198},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13180},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22837},
]},
],
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

                   text: '依司瑪耳的PT構成(總分218536)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 131799, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43436, name: '強襲', legendMarkerType: 'square'},
{  y: 43301, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分179363)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16100,
				            interval: 1610,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3502},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2418},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10041},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16100},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15551},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3678},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1567},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4187},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15911},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9296},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7760},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14284},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3509},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2559},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11891},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2105},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11962},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15533},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2228},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1377},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3660},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8301},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1299},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6916},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3706},
]},
],
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

                   text: '赤雲天的PT構成(總分179363)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 151876, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15566, name: 'CBC', legendMarkerType: 'square'},
{  y: 11921, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分158081)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20091,
				            interval: 2009,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1171},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2585},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4318},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15273},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16434},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4356},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4407},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2023},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12199},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9713},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20091},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5242},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2608},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2598},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3503},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3957},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8437},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 674},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 686},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 779},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5093},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5753},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8812},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17345},
]},
],
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

                   text: '亞歷的PT構成(總分158081)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 118939, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2139, name: 'CBC', legendMarkerType: 'square'},
{  y: 37003, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分146335)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28858,
				            interval: 2885,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 349},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 846},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1793},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2826},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11109},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 28858},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12314},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2640},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 393},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1241},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13194},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14755},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6888},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10311},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2987},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2422},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10921},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5971},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1566},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3731},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4673},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5139},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1385},
]},
],
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

                   text: '寇內爾緹的PT構成(總分146335)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 129841, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16494, name: '強襲', legendMarkerType: 'square'},
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
				            text: '魔法的PT統計(總分145490)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20866,
				            interval: 2086,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 35},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 401},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6787},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16913},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1732},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2378},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 107},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8641},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20866},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8130},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11344},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3700},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1928},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3184},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1509},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7397},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7884},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6752},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 642},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14410},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 495},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 581},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1321},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1243},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3671},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5782},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7603},
]},
],
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

                   text: '魔法的PT構成(總分145490)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 109742, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15052, name: 'CBC', legendMarkerType: 'square'},
{  y: 20696, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分142201)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24021,
				            interval: 2402,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2855},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1481},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2759},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2106},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1044},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24021},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18476},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20706},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4330},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14915},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5902},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9699},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3070},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5806},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1156},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9236},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 826},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12583},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1183},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分142201)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 117217, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23801, name: '強襲', legendMarkerType: 'square'},
{  y: 1183, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分114331)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11558,
				            interval: 1155,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5022},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3625},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8579},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8917},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11115},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9452},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2900},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4198},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4619},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5483},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3743},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4715},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2883},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5972},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11558},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1893},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5107},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4874},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3259},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6417},
]},
],
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

                   text: '冰的PT構成(總分114331)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 46710, name: '強襲', legendMarkerType: 'triangle'},
{  y: 61204, name: '殲滅', legendMarkerType: 'square'},
{  y: 6417, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分111676)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51058,
				            interval: 5105,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9839},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4355},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 51058},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14360},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3333},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 235},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 671},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1571},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2189},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1337},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 843},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2669},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10229},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5872},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3029},
]},
],
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

                   text: '阿榮的PT構成(總分111676)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 82945, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 28731, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '冰紅茶的PT統計(總分90523)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30800,
				            interval: 3080,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1386},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 594},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8610},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4472},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3131},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5663},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 328},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1766},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 279},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 149},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1046},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 851},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4176},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11833},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30800},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2280},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10989},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2106},
]},
],
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

                   text: '冰紅茶的PT構成(總分90523)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 10590, name: '強襲', legendMarkerType: 'triangle'},
{  y: 77827, name: '殲滅', legendMarkerType: 'square'},
{  y: 2106, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分60348)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 6709,
				            interval: 670,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 199},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 420},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 697},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 483},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 56},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1977},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 296},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1096},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4052},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 756},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4111},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 926},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5269},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 748},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1736},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 67},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 741},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 73},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 70},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 124},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 382},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1429},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1311},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4846},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3292},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3387},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6709},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4115},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6597},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1815},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2528},
]},
],
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

                   text: '阿拉的PT構成(總分60348)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 24319, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 31686, name: '強襲', legendMarkerType: 'square'},
{  y: 4343, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分47576)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 6944,
				            interval: 694,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 61},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 365},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 226},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 235},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1814},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1145},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 40},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1138},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5735},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3520},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1127},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4764},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 968},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6170},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6376},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6944},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1505},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 23, 0), y: 922},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 606},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3858},
]},
],
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

                   text: '藏月的PT構成(總分47576)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 42190, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 922, name: 'CBC', legendMarkerType: 'square'},
{  y: 4464, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分41290)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10165,
				            interval: 1016,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 162},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 236},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 849},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2728},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7740},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1705},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1260},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1095},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 360},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1439},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 75},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 73},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 693},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4980},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5891},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10165},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1702},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分41290)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 23532, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16056, name: 'CBC', legendMarkerType: 'square'},
{  y: 1702, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分20582)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 7234,
				            interval: 723,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6911},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7234},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6437},
]},
],
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

                   text: '秋風冷月的PT構成(總分20582)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
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
{  y: 6911, name: '強襲', legendMarkerType: 'square'},
{  y: 13671, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '董香的PT統計(總分592649)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 123868,
				            interval: 12386,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "董香殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1764},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1009},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 250},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 527},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5489},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10877},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24764},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1404},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "董香強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17658},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15076},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "董香CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 39381},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11223},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 35110},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 95624},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 75816},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 45805},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 64557},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 123868},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22428},
]},
],
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

                   text: '董香的PT構成(總分592649)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 46103, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32734, name: '強襲', legendMarkerType: 'square'},
{  y: 513812, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '永恆fung的PT統計(總分568375)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 160159,
				            interval: 16015,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 192},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1873},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1934},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3766},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1937},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 303},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2100},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8417},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7564},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "永恆fung強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24452},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "永恆fungCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 22256},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25974},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15578},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 38759},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 99051},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 55602},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 160159},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 41602},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 56794},
]},
],
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

                   text: '永恆fung的PT構成(總分568375)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 28148, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24452, name: '強襲', legendMarkerType: 'square'},
{  y: 515775, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '白川的PT統計(總分490829)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 122336,
				            interval: 12233,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白川強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 30, 0), y: 8794},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白川殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 509},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1461},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4879},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白川CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9441},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 35219},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 29748},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10526},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 122336},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 36063},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33382},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 102246},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 52868},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 43320},
]},
],
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

                   text: '白川的PT構成(總分490829)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 8794, name: '強襲', legendMarkerType: 'triangle'},
{  y: 6886, name: '殲滅', legendMarkerType: 'square'},
{  y: 475149, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '從裏Man到外的PT統計(總分423815)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 84566,
				            interval: 8456,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "從裏Man到外CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1323},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4171},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 51232},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 43631},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13691},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 64095},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 43670},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 27559},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 56768},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 84566},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28615},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "從裏Man到外殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 174},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 210},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 741},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2234},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "從裏Man到外強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1109},
]},
],
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

                   text: '從裏Man到外的PT構成(總分423815)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 419321, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 3385, name: '殲滅', legendMarkerType: 'square'},
{  y: 1109, name: '強襲', legendMarkerType: 'circle'},
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
				            text: 'Yuikit的PT統計(總分324242)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38260,
				            interval: 3826,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 807},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7493},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14844},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11839},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4928},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22480},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1734},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8195},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25715},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22349},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 35810},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13031},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 26647},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6863},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 38260},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20706},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27549},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16372},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8728},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Yuikit強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2918},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3030},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3944},
]},
],
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

                   text: 'Yuikit的PT構成(總分324242)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 314350, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9892, name: '強襲', legendMarkerType: 'square'},
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
				            text: '劍御犬的PT統計(總分317127)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34068,
				            interval: 3406,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "劍御犬殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 142},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1013},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15265},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25701},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20391},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15929},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7639},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30691},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18750},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 34068},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13648},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 573},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3627},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6019},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7156},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25781},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26547},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12865},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11468},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "劍御犬CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 589},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9508},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "劍御犬強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3418},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3837},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5495},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9418},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7585},
]},
],
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

                   text: '劍御犬的PT構成(總分317127)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 277277, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10097, name: 'CBC', legendMarkerType: 'square'},
{  y: 29753, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '檸檬汽水的PT統計(總分286722)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45111,
				            interval: 4511,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1602},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 761},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6821},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4618},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1031},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9088},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5554},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1710},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3705},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18070},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 35637},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19732},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1191},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4387},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3887},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5575},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23869},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35314},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 45111},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25804},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14841},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8175},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "檸檬汽水強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1298},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3427},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4509},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "檸檬汽水CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1003},
]},
],
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

                   text: '檸檬汽水的PT構成(總分286722)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 276485, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9234, name: '強襲', legendMarkerType: 'square'},
{  y: 1003, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '殛殤的PT統計(總分266097)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42809,
				            interval: 4280,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殛殤殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 382},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1288},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4000},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6660},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6921},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5629},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 28251},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6110},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 163},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 676},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22496},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 37577},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25966},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2251},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5533},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 42809},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1438},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10422},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16145},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16378},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2382},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殛殤強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7817},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1921},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "殛殤CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1836},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3590},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7437},
]},
],
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

                   text: '殛殤的PT構成(總分266097)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 243496, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9738, name: '強襲', legendMarkerType: 'square'},
{  y: 12863, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神靈的陪伴的PT統計(總分250658)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46817,
				            interval: 4681,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1276},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6765},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 22667},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20223},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1810},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 201},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11887},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14874},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13836},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 485},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5763},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24765},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29225},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12250},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 46817},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神靈的陪伴強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4233},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4176},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4810},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1865},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6789},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4677},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10149},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神靈的陪伴CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1096},
]},
],
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

                   text: '神靈的陪伴的PT構成(總分250658)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 212863, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 36699, name: '強襲', legendMarkerType: 'square'},
{  y: 1096, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無小昇的PT統計(總分213586)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39686,
				            interval: 3968,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 575},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2006},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7859},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4488},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10238},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1431},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4884},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5249},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 31072},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7712},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14264},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 963},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5824},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7433},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 845},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9620},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 39686},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10660},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2519},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10923},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無小昇CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1701},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11608},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無小昇強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5504},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1971},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7547},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7004},
]},
],
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

                   text: '無小昇的PT構成(總分213586)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 178251, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13309, name: 'CBC', legendMarkerType: 'square'},
{  y: 22026, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '琴寤的PT統計(總分199720)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49477,
				            interval: 4947,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1162},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1981},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7280},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8612},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4532},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9870},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7898},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1026},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3177},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7551},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11070},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1534},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2341},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5946},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 49477},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15885},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6298},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11622},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5866},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2635},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "琴寤強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6689},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3674},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9679},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4436},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3905},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3802},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "琴寤CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1772},
]},
],
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

                   text: '琴寤的PT構成(總分199720)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 165763, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32185, name: '強襲', legendMarkerType: 'square'},
{  y: 1772, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '@SuKi@的PT統計(總分183067)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26088,
				            interval: 2608,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 488},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 836},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2399},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2662},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 379},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7807},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4982},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8393},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1814},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26088},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 168},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23705},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2264},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12394},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11497},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7693},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15973},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14830},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6589},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "@SuKi@強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3987},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6630},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9210},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12261},
]},
],
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

                   text: '@SuKi@的PT構成(總分183067)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 150979, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32088, name: '強襲', legendMarkerType: 'square'},
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
				            text: 'Ouch的PT統計(總分179001)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38961,
				            interval: 3896,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3728},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1249},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10377},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2936},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1964},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4625},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1571},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4732},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4533},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 597},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1019},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2089},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 425},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6481},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 38273},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15144},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 38961},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11049},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12689},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ouch強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10682},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3676},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2201},
]},
],
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

                   text: 'Ouch的PT構成(總分179001)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 162442, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16559, name: '強襲', legendMarkerType: 'square'},
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
				            text: '費爾南多。夜禮布的PT統計(總分175720)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19931,
				            interval: 1993,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 198},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2642},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8595},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9879},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14350},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2480},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3174},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1641},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5539},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5950},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11885},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12036},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 749},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13105},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19931},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19377},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1788},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7999},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2771},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾南多。夜禮布強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1275},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11833},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1196},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5589},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11083},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費爾南多。夜禮布CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 630},
]},
],
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

                   text: '費爾南多。夜禮布的PT構成(總分175720)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 144114, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30976, name: '強襲', legendMarkerType: 'square'},
{  y: 630, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '沙利昂的PT統計(總分174038)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23525,
				            interval: 2352,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 364},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1775},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8733},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3512},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6664},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2490},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 360},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 316},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23525},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5307},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18625},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 381},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 313},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14132},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12419},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12968},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22068},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6436},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6049},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "沙利昂強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3501},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1638},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4493},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4485},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1223},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4651},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7586},
]},
],
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

                   text: '沙利昂的PT構成(總分174038)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 146461, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 27577, name: '強襲', legendMarkerType: 'square'},
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
				            text: '人類總是.jpg的PT統計(總分155615)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17377,
				            interval: 1737,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 73},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6903},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8754},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1785},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7085},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5857},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2543},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 959},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8771},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5510},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2098},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3659},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1120},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3364},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2425},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13970},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17377},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8790},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14692},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2194},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人類總是.jpg強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5752},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5867},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5945},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2055},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10441},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人類總是.jpgCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7626},
]},
],
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

                   text: '人類總是.jpg的PT構成(總分155615)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 117929, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30060, name: '強襲', legendMarkerType: 'square'},
{  y: 7626, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '麵包點心的PT統計(總分151026)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18936,
				            interval: 1893,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4114},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7853},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3113},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4437},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1993},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4209},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2850},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10398},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2135},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3778},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11560},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13327},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18936},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15111},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6600},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5679},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "麵包點心強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2614},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3518},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5914},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7152},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 967},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7133},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7611},
]},
],
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

                   text: '麵包點心的PT構成(總分151026)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 116117, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 34909, name: '強襲', legendMarkerType: 'square'},
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
				            text: '黃天航祿的PT統計(總分136053)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20621,
				            interval: 2062,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 164},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 384},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3697},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3511},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5424},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1711},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5733},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2649},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3071},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3787},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 192},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5191},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2879},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4472},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6194},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20621},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15811},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10782},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6039},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黃天航祿強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6440},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12451},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1824},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7466},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5060},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "黃天航祿CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 500},
]},
],
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

                   text: '黃天航祿的PT構成(總分136053)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 102312, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33241, name: '強襲', legendMarkerType: 'square'},
{  y: 500, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '啊斯的PT統計(總分89320)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12879,
				            interval: 1287,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5542},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3365},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5520},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7568},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3753},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10971},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6521},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12879},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3921},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1342},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7858},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啊斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7011},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7321},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1562},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4184},
]},
],
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

                   text: '啊斯的PT構成(總分89320)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {

            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 69242, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20078, name: '強襲', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart39.render();
}
