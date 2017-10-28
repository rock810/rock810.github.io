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
				
				            maximum: 681884,
				            interval: 68188,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 167313},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 169463},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 204403},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 182750},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 217079},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 244059},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 249608},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 263633},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 230588},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 312253},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 284681},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 322367},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 446205},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 483896},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 359614},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 408455},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 517476},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 379288},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 500639},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 391785},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 305294},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 398380},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 382310},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 389537},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 415082},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 487713},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 492695},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 589969},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 516299},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 389094},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 177940},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 213408},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 224675},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 196405},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 259829},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 260213},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 264490},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 269898},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 301332},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 308250},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 263305},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 355850},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 506831},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 500408},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 510928},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 515451},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 636613},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 621758},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 490882},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 681884},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 626551},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 522252},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 496077},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 463572},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 481483},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 494409},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 514031},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 583870},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 499936},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 313642},
]},
],
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
				
				            maximum: 23258101,
				            interval: 2325810,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 167313},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 336776},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 541179},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 723929},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 941008},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1185067},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1434675},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1698308},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1928896},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2241149},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2525830},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2848197},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3294402},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3778298},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4137912},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4546367},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5063843},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5443131},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5943770},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6335555},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6640849},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7039229},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7421539},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7811076},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8226158},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8713871},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9206566},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9796535},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10312834},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10701928},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 177940},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 391348},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 616023},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 812428},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1072257},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1332470},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1596960},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1866858},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2168190},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2476440},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2739745},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3095595},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3602426},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4102834},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4613762},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5129213},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5765826},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6387584},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6878466},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7560350},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8186901},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8709153},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9205230},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9668802},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10150285},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10644694},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11158725},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11742595},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12242531},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12556173},
]},
],
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
				
				            maximum: 408194,
				            interval: 40819,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 89225},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 118208},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 116032},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 130785},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 142180},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 131968},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 167562},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 138584},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 140841},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 108974},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 148971},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 102162},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 213282},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 223178},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 256526},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 236543},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 384789},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 219258},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 304033},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 164084},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 170437},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 203342},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 182659},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 208093},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 194284},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 322610},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 292034},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 379519},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 360655},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 235566},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 126251},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 114108},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 139448},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 148106},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 169121},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 151852},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 175822},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 174249},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 168001},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 172470},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 184021},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 172489},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 332072},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 325532},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 352350},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 324882},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 398316},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 408194},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 278430},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 371038},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 343342},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 308857},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 225401},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 277157},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 292817},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 263737},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 247188},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 266633},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 249908},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 155673},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 51677},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19051},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 61638},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20617},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 35825},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 69705},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 33281},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 70890},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 50133},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 144948},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 80156},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 143265},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 97085},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 162584},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13180},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 67551},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 65018},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 90378},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 61672},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 96621},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 46314},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 74352},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 88653},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 81205},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 110270},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26609},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 128778},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 87143},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 109100},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 100337},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 26411},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 32204},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 26733},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 31348},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 39074},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 42386},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 48765},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 54159},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 39614},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 58331},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 55554},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 76940},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 135838},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 98134},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 89908},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 104361},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 67669},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 69652},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 134934},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 131080},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 88543},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 120686},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 110998},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 100239},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 110528},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 138494},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 71883},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 123307},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 46544},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 53191},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 25882},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 36511},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 40857},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 27936},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 52681},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 48861},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 62460},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 52726},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 63873},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 72504},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 49652},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 88457},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 66201},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 52866},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 91974},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 76967},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 80420},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 143159},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 96717},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 139224},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 118130},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 82376},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 112768},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 107425},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 114835},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 129363},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 148314},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 109489},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 141746},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 94546},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 25807},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 62789},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 44370},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20363},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 38027},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 59500},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26208},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 42923},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 69458},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 63276},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29632},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 94904},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 108558},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 122010},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 66604},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 113602},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 157877},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 70405},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 115735},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 171622},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 165079},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 131019},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 157908},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 78990},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 73831},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 101309},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 118529},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 207748},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 108282},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 63423},
]},
],
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
				            text: '喵鼠的PT統計(總分859011)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 71664,
				            interval: 7166,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8666},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9008},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15078},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8119},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10923},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14057},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11385},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 27903},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 33484},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25086},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 71664},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26508},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11383},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8533},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25183},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9232},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14587},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14541},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15086},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24942},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27696},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 63198},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22516},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 27485},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24720},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 42498},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 28617},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27468},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 35179},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 33561},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5554},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3774},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3539},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9952},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1044},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2437},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8938},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2492},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1410},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5414},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5856},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7592},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5641},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6150},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5602},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6460},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8636},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6846},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3565},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5038},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5507},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7145},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1919},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3382},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8496},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8316},
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

                   text: '喵鼠的PT構成(總分859011)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 140705, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 261881, name: '強襲', legendMarkerType: 'square'},
{  y: 456425, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分837368)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 65321,
				            interval: 6532,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4913},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7484},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12303},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7520},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10516},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5177},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9698},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2680},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11229},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3509},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6097},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6350},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15059},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3842},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10955},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32643},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 44470},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 24357},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4495},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9724},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13330},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 30247},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16850},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 31518},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6627},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14988},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9913},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 42906},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 34832},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24457},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4061},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9558},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9258},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9685},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8748},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17289},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20952},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13180},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21018},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5949},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20804},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 65321},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 60345},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12114},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19138},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22567},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 30796},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27896},
]},
],
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

                   text: '葬月的PT構成(總分837368)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 458689, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 266168, name: '強襲', legendMarkerType: 'square'},
{  y: 112511, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分698010)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 61134,
				            interval: 6113,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3850},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9909},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4265},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5241},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7564},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5000},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5560},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4137},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12391},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8159},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7914},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4279},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11998},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5969},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18070},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6288},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 33899},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15457},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14229},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13855},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18704},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11073},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11428},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10301},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18251},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5724},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17057},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 43325},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 61134},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21250},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6602},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8630},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8777},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8898},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8626},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15667},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13231},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13066},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11922},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 35667},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18362},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22332},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8714},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11184},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14511},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 27428},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19998},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10576},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17538},
]},
],
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

                   text: '依司瑪耳的PT構成(總分698010)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 416281, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 171780, name: '強襲', legendMarkerType: 'square'},
{  y: 109949, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分588030)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53660,
				            interval: 5366,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6152},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7546},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6944},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3070},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8266},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9249},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9463},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8045},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5987},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4999},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8772},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2933},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13250},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6446},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11610},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5964},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3007},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4924},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8772},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3086},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4116},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3142},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11136},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6336},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5090},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5266},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6509},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10341},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8623},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13001},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32101},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23875},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 35284},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26534},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23796},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 53660},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22636},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 39973},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7164},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8499},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7303},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8817},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19195},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8399},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24034},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 34688},
]},
],
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

                   text: '雪歌的PT構成(總分588030)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 190448, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 110935, name: '強襲', legendMarkerType: 'square'},
{  y: 286647, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分586990)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 52597,
				            interval: 5259,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6474},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6492},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 296},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4174},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8908},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9534},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13025},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10840},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12188},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 380},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2956},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9901},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6156},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22989},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 45028},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18836},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24516},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6698},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19872},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11640},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11259},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9625},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2546},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3707},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14733},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39785},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30007},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 52597},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31418},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19817},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1193},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7175},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6038},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8848},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10303},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8999},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15847},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6684},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4519},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5421},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12052},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7907},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8013},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14951},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12643},
]},
],
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

                   text: '嘎喵的PT構成(總分586990)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 456397, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 65506, name: '強襲', legendMarkerType: 'square'},
{  y: 65087, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分561949)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39554,
				            interval: 3955,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8229},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2058},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5132},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9619},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10360},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5818},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12896},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9825},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2868},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4568},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11990},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6972},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11610},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14158},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12067},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16283},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8037},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8301},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27025},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14439},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13849},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7230},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11860},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5564},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18796},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39554},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 35801},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 35077},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14822},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14176},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5589},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8867},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15875},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10229},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11847},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16894},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13860},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5971},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5084},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5761},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6961},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8886},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15413},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13886},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17842},
]},
],
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

                   text: '阿拉的PT構成(總分561949)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 398984, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 83161, name: '強襲', legendMarkerType: 'square'},
{  y: 79804, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分554503)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44229,
				            interval: 4422,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6109},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3245},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8086},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2212},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4802},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2680},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9813},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8914},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10425},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8614},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6769},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3072},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7770},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6165},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9876},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9862},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5140},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5202},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9710},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4391},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8870},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9531},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9177},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4506},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7547},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7662},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2709},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11354},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7001},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 15139},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6148},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11105},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6251},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26349},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13355},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23624},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3336},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10173},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23174},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8057},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 44229},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10909},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 30031},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32227},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28998},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15582},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22396},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22206},
]},
],
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

                   text: '秋風冷月的PT構成(總分554503)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 201214, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 101971, name: '強襲', legendMarkerType: 'square'},
{  y: 251318, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分548923)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45480,
				            interval: 4548,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3682},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8344},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 885},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10198},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2298},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7101},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2672},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14073},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2958},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9743},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10280},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5030},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14082},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10652},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8601},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 45480},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9039},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27606},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4429},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6992},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7475},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13898},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18308},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4463},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 24984},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4292},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23405},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6427},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14291},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5512},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3309},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11657},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17052},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18688},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14616},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11050},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12624},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2678},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7649},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16310},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15471},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11395},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10511},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16028},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12980},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19314},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20391},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分548923)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 321688, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 145351, name: '強襲', legendMarkerType: 'square'},
{  y: 81884, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '緋煌的PT統計(總分543702)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30866,
				            interval: 3086,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5532},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5833},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4760},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12185},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7041},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4610},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12566},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8246},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11459},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 957},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4685},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6055},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 49},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18101},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9449},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 28389},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7162},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20809},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9329},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10025},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13417},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16931},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5776},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13573},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11943},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11183},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7504},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18723},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30828},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7167},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30866},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8355},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18767},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11662},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5146},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8301},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9530},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18657},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7798},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14816},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11046},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 28789},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15232},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11554},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14955},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3941},
]},
],
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

                   text: '緋煌的PT構成(總分543702)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 317120, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 149765, name: '強襲', legendMarkerType: 'square'},
{  y: 76817, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分528443)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32766,
				            interval: 3276,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 34},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6878},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7899},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6782},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10744},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13602},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4130},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5389},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5098},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16561},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7083},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8431},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11745},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12753},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9765},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15826},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29865},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20179},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12423},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4051},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5504},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2633},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6844},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17427},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19092},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 32025},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 28502},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14502},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13074},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8384},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16029},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22349},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6186},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4603},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6079},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6940},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10693},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5233},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14411},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10988},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19136},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15805},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32766},
]},
],
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

                   text: '寇內爾緹的PT構成(總分528443)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 348841, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 126654, name: '強襲', legendMarkerType: 'square'},
{  y: 52948, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分521944)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39280,
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
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5336},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7385},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9092},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6447},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6190},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4897},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13810},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11379},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9186},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6733},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6862},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7075},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10208},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16736},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13920},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15479},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27520},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 30077},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 30622},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7922},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6915},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17072},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18964},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14854},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2088},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6757},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 29816},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33041},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 38390},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11748},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3559},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6223},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7265},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39280},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7241},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13645},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18210},
]},
],
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

                   text: '冰紅茶的PT構成(總分521944)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 426521, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39096, name: '強襲', legendMarkerType: 'square'},
{  y: 56327, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分503045)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30192,
				            interval: 3019,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1539},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5406},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7281},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19777},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23740},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9328},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17254},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13340},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13759},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17452},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11382},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28135},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2259},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6740},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6136},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5044},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13094},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2121},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11203},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8997},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8977},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 974},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11753},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5927},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11691},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10989},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11353},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5070},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11665},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11974},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15910},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16031},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2851},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11127},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12107},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9842},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8988},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14315},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30192},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15930},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14261},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6761},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2510},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3903},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8667},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12279},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3011},
]},
],
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

                   text: '土土昕的PT構成(總分503045)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 297521, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 168393, name: '強襲', legendMarkerType: 'square'},
{  y: 37131, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神隱的PT統計(總分497389)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28419,
				            interval: 2841,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 858},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5413},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7638},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3258},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7878},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4895},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7889},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3096},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 49},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2099},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6406},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5323},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1031},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7555},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1687},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 792},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2169},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3429},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6035},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9972},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2447},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10663},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2499},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2494},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2872},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3593},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3785},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3949},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22282},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22804},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11418},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13970},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18367},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21624},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20551},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14348},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18078},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14319},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28419},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21187},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 27206},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28378},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28016},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23504},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8112},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26082},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8918},
]},
],
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

                   text: '神隱的PT構成(總分497389)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 115857, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43112, name: '強襲', legendMarkerType: 'square'},
{  y: 338420, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分477274)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40606,
				            interval: 4060,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7996},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4479},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6779},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9560},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11574},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6404},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3500},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5387},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10183},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8551},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6184},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11445},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12944},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8506},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10830},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17569},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23987},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24994},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1802},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6575},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10640},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11852},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4566},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16412},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 40606},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15219},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26949},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5173},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13865},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13657},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6055},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7992},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17431},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16980},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25410},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15694},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6767},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7856},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14901},
]},
],
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

                   text: '魔法的PT構成(總分477274)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 344531, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 29524, name: '強襲', legendMarkerType: 'square'},
{  y: 103219, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分476493)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39307,
				            interval: 3930,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5605},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5806},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12875},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8490},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4509},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4561},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10027},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9796},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8203},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7008},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9124},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16452},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11260},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9707},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4055},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2815},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16056},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10240},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8516},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21336},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16396},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6107},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20263},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5907},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12629},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12491},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3937},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13857},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8210},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 39307},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13304},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20558},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19286},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19636},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10492},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5832},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9320},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10133},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6140},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6868},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9506},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10460},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9413},
]},
],
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

                   text: '藏月的PT構成(總分476493)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 361044, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 78164, name: '強襲', legendMarkerType: 'square'},
{  y: 37285, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分411545)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28477,
				            interval: 2847,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5345},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7368},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8818},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3406},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7517},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7004},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8215},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5978},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7424},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6327},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6430},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13049},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12422},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14291},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10963},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21106},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6340},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28477},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13927},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7100},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6091},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1682},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11894},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10587},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11198},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2806},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18838},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21165},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6030},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3951},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2282},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8072},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6013},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7898},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17658},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18669},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8160},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23920},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8210},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7732},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7182},
]},
],
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

                   text: '冰的PT構成(總分411545)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 291798, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 104833, name: '強襲', legendMarkerType: 'square'},
{  y: 14914, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分399145)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29633,
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
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10054},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8361},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7674},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5305},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2323},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17635},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 29633},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3070},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15655},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8565},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3473},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8264},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2498},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9726},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6208},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8246},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8600},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12534},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11608},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7076},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7649},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6086},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9192},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7307},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13522},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18633},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23132},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20923},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8992},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10482},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17569},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8859},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13441},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23467},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23383},
]},
],
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

                   text: '阿榮的PT構成(總分399145)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 209435, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 86719, name: '強襲', legendMarkerType: 'square'},
{  y: 102991, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分392292)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30192,
				            interval: 3019,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8762},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7200},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4629},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9655},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13346},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9088},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10460},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 890},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4749},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3378},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6043},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10881},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9858},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16076},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 29626},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6698},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17620},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8523},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 416},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2668},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9986},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13149},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8563},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11660},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3528},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5665},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18263},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30192},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8917},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3748},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3871},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8437},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2808},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4556},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4333},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4793},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4956},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9980},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3156},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8165},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7319},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16047},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7295},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12339},
]},
],
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

                   text: '亞歷的PT構成(總分392292)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 290489, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 85747, name: '強襲', legendMarkerType: 'square'},
{  y: 16056, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分366839)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23433,
				            interval: 2343,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5220},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3780},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6074},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6904},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8939},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13545},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8858},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5341},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4952},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5033},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9993},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 525},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10143},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 658},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5574},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1990},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20829},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5334},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11927},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3804},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11566},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1013},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9492},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13481},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6933},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3118},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12083},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4395},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13129},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 62},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4900},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23433},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5702},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11764},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8134},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11999},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3626},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14526},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21648},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18762},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10142},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17508},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分366839)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 214695, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 118109, name: '強襲', legendMarkerType: 'square'},
{  y: 34035, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '幻想魔術師的PT統計(總分349033)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21886,
				            interval: 2188,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4468},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5868},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10102},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4262},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10439},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7685},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7561},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 458},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9793},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5826},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16805},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3075},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18538},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15466},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9088},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17660},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21886},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3072},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14701},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8210},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6329},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12515},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9405},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4426},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14411},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10339},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4147},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7275},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9467},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10849},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2866},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4939},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4065},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6886},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9778},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9934},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12699},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13740},
]},
],
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

                   text: '幻想魔術師的PT構成(總分349033)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 284126, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 51167, name: '強襲', legendMarkerType: 'square'},
{  y: 13740, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '404的PT統計(總分764882)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 63951,
				            interval: 6395,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "404殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 650},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3634},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6473},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4129},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6312},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4392},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4893},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13164},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 260},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11278},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2788},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7457},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5288},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5601},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3423},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3846},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8397},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10583},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1820},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10942},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 135},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3423},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4657},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11666},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7078},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7307},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "404CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4011},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8769},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11410},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14530},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12114},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29918},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26394},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22438},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 27341},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25067},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 51083},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 59306},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23408},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 63951},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 56829},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29469},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 35597},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 29695},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22959},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "404強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7297},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3730},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8321},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2782},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22000},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16867},
]},
],
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

                   text: '404的PT構成(總分764882)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 149596, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 60997, name: '強襲', legendMarkerType: 'square'},
{  y: 554289, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '天霜的PT統計(總分750635)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37611,
				            interval: 3761,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天霜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2655},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4529},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6979},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2704},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5067},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11845},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2892},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5068},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8366},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9227},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3207},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7123},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5408},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6358},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7718},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9947},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13773},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12086},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3646},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32554},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 37611},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32547},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18245},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26226},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6540},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6684},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24310},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31589},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 28298},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天霜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1377},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21944},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22201},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14551},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23616},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21795},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19435},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 23868},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天霜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6848},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17349},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9355},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15938},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10260},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21382},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13062},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7131},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9413},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16064},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23429},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11524},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19683},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23722},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23486},
]},
],
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

                   text: '天霜的PT構成(總分750635)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 373202, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 148787, name: '強襲', legendMarkerType: 'square'},
{  y: 228646, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '退休謝拉特的PT統計(總分731926)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45166,
				            interval: 4516,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "退休謝拉特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2060},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5996},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 23135},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13060},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 26257},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22865},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11887},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23791},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26338},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15862},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32606},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "退休謝拉特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5164},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3066},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3652},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2010},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11474},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7873},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4747},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8977},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4635},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13297},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2392},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30345},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17835},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22746},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21205},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36434},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 42273},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9039},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7667},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6449},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6353},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6881},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8364},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8206},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20269},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8714},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20385},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6500},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11049},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "退休謝拉特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6326},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8047},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7934},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11758},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9552},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13530},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14524},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 45166},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27770},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25436},
]},
],
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

                   text: '退休謝拉特的PT構成(總分731926)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 358026, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 170043, name: '強襲', legendMarkerType: 'square'},
{  y: 203857, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '7D狂人的PT統計(總分725814)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51267,
				            interval: 5126,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "7D狂人殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7551},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1532},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8048},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5574},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13841},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10259},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15014},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8776},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2082},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10262},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11863},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 27591},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16305},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1344},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6280},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 39360},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17963},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6852},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 51267},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 34446},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 40972},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8504},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10910},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19828},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8531},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18534},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12456},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14936},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10344},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "7D狂人強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3758},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1242},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11198},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21003},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9969},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9391},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14813},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15772},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10970},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12879},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26300},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 28049},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16068},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13426},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "7D狂人CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3606},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9500},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7470},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8703},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 29512},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 30960},
]},
],
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

                   text: '7D狂人的PT構成(總分725814)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 441225, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 194838, name: '強襲', legendMarkerType: 'square'},
{  y: 89751, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾蕾爾的PT統計(總分705674)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 72149,
				            interval: 7214,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7006},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10353},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13070},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3236},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9213},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7549},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9315},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10058},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11850},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8426},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5482},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11157},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19004},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10299},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30747},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11113},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12771},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23204},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 34867},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17437},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15439},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13925},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32432},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 35607},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33809},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5457},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9388},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12642},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14528},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾蕾爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4474},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6521},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10567},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10639},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 37421},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15231},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23872},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 72149},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5717},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾蕾爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5220},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15685},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13768},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19763},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25263},
]},
],
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

                   text: '艾蕾爾的PT構成(總分705674)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 439384, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 186591, name: '強襲', legendMarkerType: 'square'},
{  y: 79699, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '派大星的PT統計(總分691772)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44668,
				            interval: 4466,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派大星殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3064},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11987},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9802},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5911},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1981},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10298},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7006},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10138},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6159},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8899},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10264},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6704},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10375},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 44668},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15820},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16159},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31686},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 38236},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17590},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33043},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22951},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21329},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14234},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11831},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20908},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7860},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13351},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15949},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10637},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派大星強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3983},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5994},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16031},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15745},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12105},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15644},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22188},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25505},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23069},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20498},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24673},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18394},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "派大星CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16941},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 32162},
]},
],
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

                   text: '派大星的PT構成(總分691772)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 438840, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 203829, name: '強襲', legendMarkerType: 'square'},
{  y: 49103, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Almis的PT統計(總分683123)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35625,
				            interval: 3562,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AlmisCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14242},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18849},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 27319},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19760},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18905},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Almis殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8201},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2165},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4266},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7571},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13183},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15125},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5767},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5273},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14390},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6377},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9558},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9590},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34835},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7760},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19088},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16556},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11043},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23204},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18277},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21255},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 31458},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16668},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18058},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11075},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11718},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14298},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13916},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14691},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Almis強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 14688},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8752},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9294},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14084},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10818},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16867},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14421},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11735},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13035},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17754},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17658},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13951},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 35625},
]},
],
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

                   text: 'Almis的PT構成(總分683123)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 385366, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 198682, name: '強襲', legendMarkerType: 'square'},
{  y: 99075, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡爾．剎斯的PT統計(總分678852)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40681,
				            interval: 4068,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾．剎斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6217},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12442},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11345},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6380},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19022},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 31397},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24723},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16698},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾．剎斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2110},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19321},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17512},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9293},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15602},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10589},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13752},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13591},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 38118},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22916},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27581},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾．剎斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4979},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2465},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9658},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8015},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9993},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2452},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12363},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5855},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6868},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13484},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8308},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19022},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22447},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17939},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15225},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31602},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 40681},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15494},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17044},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15074},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2368},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6066},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10569},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10112},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16485},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12908},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13191},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9576},
]},
],
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

                   text: '卡爾．剎斯的PT構成(總分678852)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 360243, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 128224, name: '強襲', legendMarkerType: 'square'},
{  y: 190385, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡爾上校的PT統計(總分657534)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64710,
				            interval: 6471,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾上校殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7554},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8567},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7254},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7512},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7882},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13433},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11350},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11352},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10444},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10216},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1189},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14849},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5477},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7952},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15890},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 41359},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29975},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7383},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6260},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14027},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6854},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18710},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1994},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 46441},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36716},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12841},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8572},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾上校CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9099},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16592},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 21402},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 32562},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 29893},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22374},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 64710},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡爾上校強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18041},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5475},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9015},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12311},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20634},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23341},
]},
],
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

                   text: '卡爾上校的PT構成(總分657534)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 372085, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 88817, name: '強襲', legendMarkerType: 'square'},
{  y: 196632, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '今晚打老虎的PT統計(總分654357)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34885,
				            interval: 3488,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "今晚打老虎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3865},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7212},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10152},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11546},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8083},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3358},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12854},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8800},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15179},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8926},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12122},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18265},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15004},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14656},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21183},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 34885},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24222},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20835},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10404},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9770},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7315},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17303},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11016},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6014},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12975},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17081},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13816},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14010},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19824},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 451},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "今晚打老虎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9830},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13640},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8286},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11881},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11424},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22679},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19340},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16471},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 29728},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "今晚打老虎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7924},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9380},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10417},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24692},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20964},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25649},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20926},
]},
],
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

                   text: '今晚打老虎的PT構成(總分654357)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 391126, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 119952, name: '強襲', legendMarkerType: 'square'},
{  y: 143279, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '撲克臉的PT統計(總分626977)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38823,
				            interval: 3882,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "撲克臉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10467},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3314},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4545},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6544},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7380},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7314},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10748},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10527},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11181},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8602},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9266},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9666},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 27999},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 38823},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19313},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18242},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9949},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19398},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13051},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16511},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 35121},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24538},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13336},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11885},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16752},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14003},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18238},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9465},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17600},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19867},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "撲克臉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10059},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7238},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7834},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14881},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12874},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23077},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 30053},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5833},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19300},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "撲克臉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5484},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11147},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7617},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7181},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20754},
]},
],
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

                   text: '撲克臉的PT構成(總分626977)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 443645, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 131149, name: '強襲', legendMarkerType: 'square'},
{  y: 52183, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '歐西里斯的PT統計(總分617746)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35453,
				            interval: 3545,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐西里斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8599},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11059},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17380},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16702},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5105},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16096},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 33097},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22231},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25998},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20076},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐西里斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7517},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2918},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 918},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9699},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8432},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5209},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4474},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7316},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 638},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10390},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7908},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14303},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13937},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16019},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10065},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 27676},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11021},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22332},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7250},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 25703},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17426},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35453},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6751},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10895},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8099},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14660},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4760},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐西里斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8995},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7310},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4121},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14827},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6014},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20086},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10651},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25581},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 32049},
]},
],
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

                   text: '歐西里斯的PT構成(總分617746)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 311769, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 129634, name: '強襲', legendMarkerType: 'square'},
{  y: 176343, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾炎漢森的PT統計(總分607474)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36279,
				            interval: 3627,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾炎漢森殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8729},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4790},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9825},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15690},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10825},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5142},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12246},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12202},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14817},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15159},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7844},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6601},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15832},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 29860},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 33326},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19540},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36279},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20742},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28158},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 31069},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24935},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18018},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2732},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11493},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19537},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11762},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8442},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23844},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11512},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12198},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾炎漢森強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5983},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10471},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4457},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7827},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8225},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8826},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5197},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14178},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12033},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33383},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾炎漢森CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13745},
]},
],
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

                   text: '艾炎漢森的PT構成(總分607474)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 483149, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 110580, name: '強襲', legendMarkerType: 'square'},
{  y: 13745, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿酒的PT統計(總分589171)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33049,
				            interval: 3304,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿酒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9975},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3380},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12227},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11107},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16136},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29395},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11862},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿酒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5708},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6063},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8318},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6544},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11342},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5105},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11912},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9035},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4126},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15377},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5490},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11937},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30147},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 29466},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20070},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29530},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 28964},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22953},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12026},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33049},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32034},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10805},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11972},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10319},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16947},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15489},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14981},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 609},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿酒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7693},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2755},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4832},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5911},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17994},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4623},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18626},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12337},
]},
],
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

                   text: '阿酒的PT構成(總分589171)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 420318, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 94082, name: '強襲', legendMarkerType: 'square'},
{  y: 74771, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '倫的PT統計(總分579245)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33126,
				            interval: 3312,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "倫殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5593},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5562},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9250},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4932},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9037},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2639},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10343},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2256},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5443},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8587},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7309},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7837},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4339},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18397},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23801},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 64},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6294},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4376},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5683},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13427},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8505},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5680},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10074},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14133},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6970},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6964},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8295},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7308},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6363},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7580},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "倫強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7332},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8894},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9980},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18043},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10250},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16547},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 21256},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22862},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19999},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28483},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26967},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "倫CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1833},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9095},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14586},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14128},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14235},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15744},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21699},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27145},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 33126},
]},
],
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

                   text: '倫的PT構成(總分579245)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 237041, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 190613, name: '強襲', legendMarkerType: 'square'},
{  y: 151591, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Jens的PT統計(總分538359)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30396,
				            interval: 3039,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jens殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10602},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7591},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8942},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2888},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10758},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5768},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9749},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13043},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15493},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6400},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5430},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20435},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20399},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6526},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12944},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13214},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16013},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13239},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15842},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11708},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1049},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8741},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17783},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25784},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18854},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15046},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14874},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jens強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3168},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5607},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6817},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7086},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7744},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7005},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6222},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14717},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20643},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 30396},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15772},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10966},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13710},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14496},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15943},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "JensCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6287},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4770},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4513},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13359},
]},
],
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

                   text: 'Jens的PT構成(總分538359)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 329138, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 180292, name: '強襲', legendMarkerType: 'square'},
{  y: 28929, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '又怎麼了的PT統計(總分537389)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43493,
				            interval: 4349,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "又怎麼了殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9940},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9051},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9670},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11916},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6646},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11732},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13358},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13974},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10820},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8127},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16264},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6043},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17038},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12791},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24805},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10466},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 43493},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 24456},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17225},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 35101},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 35051},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 147},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10428},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6451},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9350},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12191},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6938},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20300},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16027},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7958},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "又怎麼了CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4804},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4378},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11792},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16260},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "又怎麼了強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4914},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11502},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10940},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7723},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16989},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10330},
]},
],
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

                   text: '又怎麼了的PT構成(總分537389)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 437757, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 62398, name: '強襲', legendMarkerType: 'square'},
{  y: 37234, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小明的PT統計(總分532870)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39278,
				            interval: 3927,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小明殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6743},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6830},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9704},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4731},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10316},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4126},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4177},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8605},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6388},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5428},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11710},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10319},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10647},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1853},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5451},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11566},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11567},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23995},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27723},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6390},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9861},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16088},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20217},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18762},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28431},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30733},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7882},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18196},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2521},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小明CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7250},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12033},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14375},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12318},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22686},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17744},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12328},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13221},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小明強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4773},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4225},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6330},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9834},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6968},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8547},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 39278},
]},
],
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

                   text: '小明的PT構成(總分532870)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 340960, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 79955, name: '強襲', legendMarkerType: 'square'},
{  y: 111955, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '公平的PT統計(總分487441)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32853,
				            interval: 3285,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "公平殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4571},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10447},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6890},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14447},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4854},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7970},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9170},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13860},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11427},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6629},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5787},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6204},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20478},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 22464},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27054},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32853},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24769},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14837},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11317},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7934},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2497},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20437},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16193},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7281},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7496},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21450},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12638},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7420},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "公平強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10301},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5698},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4047},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7899},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9006},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10783},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15273},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8680},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20366},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2670},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2272},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21437},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "公平CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9607},
]},
],
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

                   text: '公平的PT構成(總分487441)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 359402, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 118432, name: '強襲', legendMarkerType: 'square'},
{  y: 9607, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱特爾的PT統計(總分394932)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44542,
				            interval: 4454,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱特爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5692},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4497},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6204},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6589},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6843},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9500},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4402},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13578},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12228},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13623},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9880},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5026},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8924},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5323},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5396},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12107},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5942},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11031},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6424},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10819},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2780},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1844},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13928},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10276},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7465},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9184},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20147},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15541},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱特爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2218},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6191},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30217},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10619},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18106},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 44542},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱特爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10800},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7885},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19161},
]},
],
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

                   text: '凱特爾的PT構成(總分394932)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 245193, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 111893, name: '強襲', legendMarkerType: 'square'},
{  y: 37846, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
