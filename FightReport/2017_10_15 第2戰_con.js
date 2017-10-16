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
				
				            maximum: 341284,
				            interval: 34128,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6319},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8792},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 30492},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 23224},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 32732},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 32900},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 67753},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 147678},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 96831},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 69180},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 22535},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 149849},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 183055},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 158027},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 110634},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 131167},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 92416},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 14369},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 66429},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 210663},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 341284},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 256905},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 170749},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 291515},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 255502},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 205336},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 212386},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 276133},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 260117},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 11230},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2462},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 10243},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 45217},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 21132},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7308},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 58801},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 72258},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 29765},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 66522},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 81516},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 76192},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 147113},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 83887},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 60113},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 214118},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 135594},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 177965},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 138818},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 91608},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 89957},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 36498},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 119322},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 136851},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 197387},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 170460},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 248960},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 150386},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 171008},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 99997},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 274203},
]},
],
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
				
				            maximum: 7151863,
				            interval: 715186,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6319},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 15111},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 45603},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 68827},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 101559},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 134459},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 202212},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 349890},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 446721},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 515901},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 538436},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 538436},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 688285},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 871340},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1029367},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 1140001},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 1271168},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 1363584},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1377953},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1444382},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 1655045},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1996329},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 2253234},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2423983},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 2715498},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 2971000},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 3176336},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3388722},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 3664855},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3924972},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 3936202},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2462},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 12705},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 57922},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 79054},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 86362},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 145163},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 217421},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 247186},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 313708},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 395224},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 471416},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 618529},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 702416},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 762529},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 976647},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 1112241},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 1290206},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 1429024},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1520632},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1610589},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 1647087},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1766409},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 1903260},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2100647},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 2271107},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 2520067},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 2670453},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2841461},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 2941458},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3215661},
]},
],
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
				
				            maximum: 178044,
				            interval: 17804,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3248},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3468},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 19282},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 10666},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 13969},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 16428},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 25993},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 63455},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 35959},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 23279},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 22535},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 40181},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 122208},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 87436},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 37664},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 82979},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 61043},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 66410},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 69887},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 96088},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 123109},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 64068},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 104998},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 116223},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 57691},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 46268},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 90997},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 77781},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 11230},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1825},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5324},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7335},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8543},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 13473},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 16431},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 33389},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 73238},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 52053},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 38351},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 62653},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 57115},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 65985},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 49593},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 41974},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 21987},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 14369},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 19},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 121098},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 157958},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 108268},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 87430},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 178044},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 99157},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 118268},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 109103},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 123697},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 115013},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 529},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4574},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8093},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1000},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 3232},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1050},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3715},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11673},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 3789},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5524},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6727},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3685},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8505},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3061},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 67280},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 18319},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10116},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 23387},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 8206},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6258},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 64143},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 4312},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 4912},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 7937},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 24655},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 35003},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 149},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 21538},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1332},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5398},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 19934},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8398},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 2280},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 49875},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 65215},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 20345},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 41965},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 72423},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 53644},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 94592},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 40690},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 52072},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 76738},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 78273},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 86308},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 107431},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 50510},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 29608},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 18428},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 63779},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 46651},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 141836},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 88254},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 118570},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 82571},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 101258},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 96315},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 127023},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1246},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3875},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4015},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5290},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 41},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8371},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10985},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8819},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7550},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 47015},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3732},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4606},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 23377},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6214},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 9386},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 19678},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 87238},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 25528},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 19251},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8473},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 40122},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 29377},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 57015},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 61439},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 67323},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1130},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4316},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 20709},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4641},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4028},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5694},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5993},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5705},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 12884},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5304},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 22548},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 46997},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 36470},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4356},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 128875},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 54260},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 24377},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13068},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 30982},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 36962},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9864},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 49285},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 26057},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 51239},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 77294},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 122453},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 43160},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 34747},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 3533},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 125642},
]},
],
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
				            text: '喵鼠的PT統計(總分654565)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 66410,
				            interval: 6641,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5035},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9051},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5561},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 22535},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 37974},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 65989},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 39278},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 29809},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 41006},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 66410},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 36440},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 33016},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 55260},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 64153},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 26092},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15062},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 13210},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 13289},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 46147},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 34},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 998},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 444},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 275},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 110},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 477},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 26910},
]},
],
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

                   text: '喵鼠的PT構成(總分654565)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1861, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 27387, name: '強襲', legendMarkerType: 'square'},
{  y: 625317, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分505446)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 84419,
				            interval: 8441,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 124},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 968},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1626},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1516},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 22},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 1621},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2366},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5628},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 5885},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 11207},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1615},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4531},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 3245},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 23007},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 19505},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 27209},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 21759},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 56219},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 7014},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 20037},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 33447},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 51655},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 27317},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 84419},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 37137},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 15523},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 296},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 40548},
]},
],
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

                   text: '土土昕的PT構成(總分505446)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 19756, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 40844, name: '強襲', legendMarkerType: 'square'},
{  y: 444846, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分457333)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 62185,
				            interval: 6218,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 13183},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 43950},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 48158},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 27114},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 51652},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 40532},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 54558},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 32213},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 32434},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 62185},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 31634},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 658},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1099},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 239},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 824},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 5529},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 1928},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 1421},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 25, 0), y: 8022},
]},
],
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

                   text: '雪歌的PT構成(總分457333)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 11698, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8022, name: '強襲', legendMarkerType: 'square'},
{  y: 437613, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分347189)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42606,
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
                                    name: "阿拉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 19},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 444},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2868},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 891},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 27642},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 27776},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 13137},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 256},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 890},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 203},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 1520},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 22},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 37744},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 5386},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 9003},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 4035},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 27509},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 42606},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 21563},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 13671},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 4494},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 4036},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3650},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7550},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 1849},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 753},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 20374},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 16762},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5616},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 9468},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 8965},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18289},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3248},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2743},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2207},
]},
],
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

                   text: '阿拉的PT構成(總分347189)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 245715, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 93276, name: '強襲', legendMarkerType: 'square'},
{  y: 8198, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分273884)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42261,
				            interval: 4226,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 03, 0), y: 654},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5556},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1007},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3839},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 2703},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5590},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6679},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 8937},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 17251},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 33},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1037},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1004},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 885},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1287},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 358},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 19},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 17236},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 3980},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7181},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2054},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1363},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 16796},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 21920},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 14427},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 893},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 2160},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 2879},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 1414},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 24207},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6330},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 29810},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 42261},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5045},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 725},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2986},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2174},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5712},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5492},
]},
],
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

                   text: '嘎喵的PT構成(總分273884)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 204579, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 52216, name: '強襲', legendMarkerType: 'square'},
{  y: 17089, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分225165)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29980,
				            interval: 2998,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 01, 0), y: 148},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 18},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 289},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1667},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 573},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 4251},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 43},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 788},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 357},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 17411},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 29980},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 13233},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3762},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 132},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 247},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 18165},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11465},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 29426},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 507},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 2408},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 52},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 24338},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 13855},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 18230},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3536},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 7255},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1288},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3361},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2999},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5390},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 9991},
]},
],
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

                   text: '魔法的PT構成(總分225165)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 191345, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23029, name: '強襲', legendMarkerType: 'square'},
{  y: 10791, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分218745)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34768,
				            interval: 3476,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 638},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 308},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1402},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4814},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5258},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4970},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6315},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5643},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8815},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 2657},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 12953},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6491},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12036},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 31488},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 5524},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9729},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 3026},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 11502},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3395},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 34768},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 27867},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 473},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3391},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3525},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3847},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 7910},
]},
],
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

                   text: '葬月的PT構成(總分218745)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 199599, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19146, name: '強襲', legendMarkerType: 'square'},
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
				            text: '依司瑪耳的PT統計(總分215730)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37638,
				            interval: 3763,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 196},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 454},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1303},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4971},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 20941},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3973},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1577},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 42},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 47},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 2956},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 23859},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 37638},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 20751},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 13664},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 11782},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2828},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 2890},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9732},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14140},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7810},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 13143},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3040},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6576},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11417},
]},
],
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

                   text: '依司瑪耳的PT構成(總分215730)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 159604, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35093, name: '強襲', legendMarkerType: 'square'},
{  y: 21033, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分196241)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29731,
				            interval: 2973,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 780},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 10348},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 1559},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 18849},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 304},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 171},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1419},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 215},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 730},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5146},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3623},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 42},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 29731},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 16818},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 26104},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 559},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 171},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 2159},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 929},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 18324},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 22976},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12801},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 11890},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 29},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10540},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 24},
]},
],
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

                   text: '寇內爾緹的PT構成(總分196241)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 164705, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 31536, name: '強襲', legendMarkerType: 'square'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分172808)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36679,
				            interval: 3667,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1553},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 15881},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 8318},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 2782},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 20869},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10217},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2590},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1566},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1247},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 1015},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 618},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 2712},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 21430},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 36679},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 4650},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 54},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 16159},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5686},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 11526},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 4218},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 09, 0), y: 1520},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 1518},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分172808)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 110150, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 59620, name: '強襲', legendMarkerType: 'square'},
{  y: 3038, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分153382)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21199,
				            interval: 2119,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 860},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 779},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 952},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 678},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5984},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 3105},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6887},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 310},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 59},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 768},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 366},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 219},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2507},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 426},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 1672},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 94},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 68},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 23},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 1121},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11125},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 10021},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 24},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 12874},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 21},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 17476},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 15231},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 15073},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 9269},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 580},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 21199},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 12525},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1086},
]},
],
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

                   text: '藏月的PT構成(總分153382)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 133051, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19245, name: '強襲', legendMarkerType: 'square'},
{  y: 1086, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分148623)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27310,
				            interval: 2731,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 01, 0), y: 17},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 758},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1208},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 277},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1878},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1063},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5335},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5284},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 3200},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 2549},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3870},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 4379},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 12468},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6496},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 16248},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2955},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 27310},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 3890},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 6257},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2831},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6489},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11990},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3821},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 3659},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5005},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 9386},
]},
],
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

                   text: '亞歷的PT構成(總分148623)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 126752, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 21871, name: '強襲', legendMarkerType: 'square'},
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
				            text: 'Dola的PT統計(總分145809)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19100,
				            interval: 1910,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dola殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 427},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 518},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 56},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 379},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 1220},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4668},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 1711},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4256},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 2781},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4951},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 1959},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 3259},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4649},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1877},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 7496},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 18840},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 18645},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 19100},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5292},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 3094},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7235},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 12353},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3794},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dola強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3928},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2038},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1542},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 1109},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "DolaCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8632},
]},
],
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

                   text: 'Dola的PT構成(總分145809)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 128560, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8617, name: '強襲', legendMarkerType: 'square'},
{  y: 8632, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分116191)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17595,
				            interval: 1759,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 06, 0), y: 892},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5342},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 723},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2748},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 4901},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2687},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8047},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2933},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 3006},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14154},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 21, 0), y: 14075},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 17011},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 6460},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15617},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 17595},
]},
],
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

                   text: '阿榮的PT構成(總分116191)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 45433, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 70758, name: '強襲', legendMarkerType: 'square'},
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
				            text: '鬼魅魍魎的PT統計(總分60280)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11256,
				            interval: 1125,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 2791},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2255},
{ x: new Date(0, 0, 0, 22, 30, 0), y: 11230},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 39},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 618},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 51},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 321},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 558},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1998},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 16},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 358},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 470},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 34},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 125},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 18},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 54},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 78},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 104},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1983},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 573},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2577},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 291},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 46},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 27},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 1952},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 957},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6010},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1433},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 41},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 622},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 314},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 376},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 89},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 819},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 2240},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 1527},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 2733},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 11256},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 3296},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分60280)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 19258, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24746, name: '強襲', legendMarkerType: 'square'},
{  y: 16276, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分44811)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11193,
				            interval: 1119,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 30},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 68},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 126},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 35},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 321},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 38},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 18},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 989},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 112},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 975},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 914},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 509},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 23},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 409},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 19},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 93},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 9630},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 47},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 75},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 1449},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 71},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 75},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 466},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 2363},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 766},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1154},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 608},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 644},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 390},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 3797},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 3325},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 2013},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 1436},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11193},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 27, 0), y: 624},
]},
],
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

                   text: '冰紅茶的PT構成(總分44811)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 19627, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24560, name: '強襲', legendMarkerType: 'square'},
{  y: 624, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '玲瓏雪霏的PT統計(總分334060)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 95187,
				            interval: 9518,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "玲瓏雪霏殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 33},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2876},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4623},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 6213},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 3489},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 445},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 4211},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2299},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 1861},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 26},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "玲瓏雪霏強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4028},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 52814},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 16166},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "玲瓏雪霏CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 15, 0), y: 53264},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 17784},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 53179},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 95187},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15545},
]},
],
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

                   text: '玲瓏雪霏的PT構成(總分334060)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 26093, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 73008, name: '強襲', legendMarkerType: 'square'},
{  y: 234959, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾佛烈的PT統計(總分304429)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36862,
				            interval: 3686,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 506},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 614},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 453},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 18},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 191},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 914},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 15836},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 18697},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 23216},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 10395},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 12517},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 22509},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 26258},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 23688},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 1699},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 781},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 36862},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 26688},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 25455},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 8922},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15127},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6416},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9261},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5114},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3985},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 4312},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2566},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1429},
]},
],
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

                   text: '艾佛烈的PT構成(總分304429)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 287023, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13411, name: '強襲', legendMarkerType: 'square'},
{  y: 3995, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡娜赫拉的PT統計(總分299618)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51239,
				            interval: 5123,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡娜赫拉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 160},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 103},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 453},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 502},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 2986},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4006},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2088},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 352},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1725},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 462},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 298},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 340},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 466},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 1979},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 5333},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡娜赫拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 20709},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 43652},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 36470},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 49285},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 51239},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 24115},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡娜赫拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 20, 0), y: 4241},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 48654},
]},
],
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

                   text: '卡娜赫拉的PT構成(總分299618)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 21253, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 52895, name: '強襲', legendMarkerType: 'square'},
{  y: 225470, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '風中捉刀的PT統計(總分292072)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 128875,
				            interval: 12887,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風中捉刀CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 1130},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1314},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 128875},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 125642},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風中捉刀殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 15},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1882},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3613},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 9214},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 4416},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 15442},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風中捉刀強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 529},
]},
],
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

                   text: '風中捉刀的PT構成(總分292072)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 34582, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 529, name: '強襲', legendMarkerType: 'square'},
{  y: 256961, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Xue的PT統計(總分281014)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29771,
				            interval: 2977,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Xue殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 256},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1107},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 380},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 25264},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 26641},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 238},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 29120},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3469},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 17540},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 202},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 26187},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14459},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 29771},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 20525},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 22037},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5493},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 13227},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6879},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 5484},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Xue強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2947},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6727},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3685},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 12018},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 7358},
]},
],
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

                   text: 'Xue的PT構成(總分281014)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 248279, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32735, name: '強襲', legendMarkerType: 'square'},
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
				            text: '陳建俊的PT統計(總分240614)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23727,
				            interval: 2372,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "陳建俊殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 228},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 340},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 391},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9124},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3251},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 540},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 18498},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 18237},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 19940},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5072},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 17738},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14056},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 9399},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 18364},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1377},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 14229},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 23727},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 8811},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 3273},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 14590},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 329},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2829},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6141},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "陳建俊強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 546},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 3789},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 4282},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3061},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 3548},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 3965},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 3028},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5008},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2903},
]},
],
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

                   text: '陳建俊的PT構成(總分240614)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 210484, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30130, name: '強襲', legendMarkerType: 'square'},
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
				            text: '優吉歐的PT統計(總分230712)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27431,
				            interval: 2743,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "優吉歐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 308},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 1221},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 337},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 138},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 2839},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 9741},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 15303},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10127},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4245},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5242},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 322},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 9359},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4804},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 21357},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 27431},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4621},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 13304},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14142},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 18221},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 18529},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 18887},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 5369},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2156},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 4337},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "優吉歐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2823},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 1242},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 3765},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1456},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 3383},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "優吉歐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2852},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2847},
]},
],
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

                   text: '優吉歐的PT構成(總分230712)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 212344, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12669, name: '強襲', legendMarkerType: 'square'},
{  y: 5699, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神＊小夜的PT統計(總分228670)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27267,
				            interval: 2726,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神＊小夜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5913},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6021},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7264},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 10685},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 1809},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4480},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6400},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 20120},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11981},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1410},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 5101},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8898},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 26468},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 22858},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 27267},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 18875},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 9777},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神＊小夜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3018},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4960},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5132},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 2434},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 5193},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6695},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神＊小夜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5911},
]},
],
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

                   text: '神＊小夜的PT構成(總分228670)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 195327, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 27432, name: '強襲', legendMarkerType: 'square'},
{  y: 5911, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分188226)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18337,
				            interval: 1833,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6511},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2247},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 2162},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7390},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6879},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 9603},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6837},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5863},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 11274},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8049},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18337},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 2039},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7324},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 18268},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 9786},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 7896},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 17193},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15713},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 3232},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 3736},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10116},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 2478},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 5293},
]},
],
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

                   text: '雷克斯的PT構成(總分188226)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 163371, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24855, name: '強襲', legendMarkerType: 'square'},
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
				            text: '司卡輝斯的PT統計(總分158726)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32529,
				            interval: 3252,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "司卡輝斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 1568},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5769},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10056},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 30663},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 32529},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 12752},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 30778},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "司卡輝斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5164},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 13245},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 8405},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "司卡輝斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5670},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 2127},
]},
],
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

                   text: '司卡輝斯的PT構成(總分158726)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 124115, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26814, name: '強襲', legendMarkerType: 'square'},
{  y: 7797, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Chin的PT統計(總分155259)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35015,
				            interval: 3501,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Chin殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1101},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 238},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 6141},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 9629},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ChinCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4641},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4028},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4265},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5993},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4506},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8207},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 22548},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 24832},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 35015},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 24115},
]},
],
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

                   text: 'Chin的PT構成(總分155259)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 17109, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 138150, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '萊勒斯的PT統計(總分127542)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31722,
				            interval: 3172,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊勒斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 19, 0), y: 224},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 23},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 539},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 1877},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5285},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 19411},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊勒斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 20, 0), y: 9864},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 1942},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 27266},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 27615},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 31722},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊勒斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1774},
]},
],
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

                   text: '萊勒斯的PT構成(總分127542)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 27359, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1774, name: '強襲', legendMarkerType: 'square'},
{  y: 98409, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '齊格飛吉爾菲艾斯的PT統計(總分121702)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23234,
				            interval: 2323,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "齊格飛吉爾菲艾斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4382},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3642},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 21},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 780},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 9237},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 346},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4345},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4916},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3138},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2184},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 21580},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 2281},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 3358},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 1033},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 23234},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 4662},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 5356},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 5751},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "齊格飛吉爾菲艾斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 19, 0), y: 3045},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5774},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 12637},
]},
],
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

                   text: '齊格飛吉爾菲艾斯的PT構成(總分121702)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 100246, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 21456, name: '強襲', legendMarkerType: 'square'},
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
				            text: '依司的PT統計(總分81933)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15011,
				            interval: 1501,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1000},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1050},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5010},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 7393},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 6438},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 192},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 19},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 19},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 329},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 4521},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 716},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 2336},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11259},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 6274},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 12810},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 15011},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 18, 0), y: 6150},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 1406},
]},
],
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

                   text: '依司的PT構成(總分81933)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 53486, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20891, name: '強襲', legendMarkerType: 'square'},
{  y: 7556, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '矮鵝的PT統計(總分76771)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22696,
				            interval: 2269,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "矮鵝強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 22, 0), y: 4707},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "矮鵝殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 39},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1974},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 363},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 1112},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 18536},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 22696},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8279},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4811},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5352},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "矮鵝CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 1199},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3345},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4356},
]},
],
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

                   text: '矮鵝的PT構成(總分76771)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 63164, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4707, name: '強襲', legendMarkerType: 'square'},
{  y: 8900, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '希洛的PT統計(總分37352)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 8508,
				            interval: 850,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希洛殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3647},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 590},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 8508},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4047},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5175},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2144},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2696},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希洛CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2452},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希洛強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8093},
]},
],
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

                   text: '希洛的PT構成(總分37352)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 26807, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8093, name: '強襲', legendMarkerType: 'square'},
{  y: 2452, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔戒騎士。閃銀的PT統計(總分31402)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 4677,
				            interval: 467,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔戒騎士。閃銀殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 41},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 625},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 597},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1479},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 31},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 1675},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2812},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3321},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 2772},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 171},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 36},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 292},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 535},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 22},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 38},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 323},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 215},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 2792},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 64},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔戒騎士。閃銀強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 768},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1502},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 2201},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 2644},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 149},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔戒騎士。閃銀CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 436},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4677},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 996},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 178},
]},
],
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

                   text: '魔戒騎士。閃銀的PT構成(總分31402)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 17851, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7264, name: '強襲', legendMarkerType: 'square'},
{  y: 6287, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '喵大爺的PT統計(總分14064)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 7157,
				            interval: 715,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵大爺殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 16, 0), y: 222},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 45},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 990},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 48},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 23},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵大爺CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 16, 0), y: 923},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 7157},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1947},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵大爺強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 16, 0), y: 744},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 1965},
]},
],
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

                   text: '喵大爺的PT構成(總分14064)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1328, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2709, name: '強襲', legendMarkerType: 'square'},
{  y: 10027, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '啊啊啊啊啊啊啊啊的PT統計(總分11495)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 4997,
				            interval: 499,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "啊啊啊啊啊啊啊啊殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 12, 0), y: 4390},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4997},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 2108},
]},
],
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

                   text: '啊啊啊啊啊啊啊啊的PT構成(總分11495)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 11495, name: '殲滅', legendMarkerType: 'triangle'},
			]
		}
		]
	});
	PlayerPieChart35.render();
}
