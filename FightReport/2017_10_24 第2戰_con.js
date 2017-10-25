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
				
				            maximum: 575424,
				            interval: 57542,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 161657},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 157454},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 188359},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 288703},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 344795},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 406380},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 520406},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 370884},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 503152},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 413543},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 432528},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 259901},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 268802},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 279819},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 273159},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 379431},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 353681},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 313816},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 491662},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 359886},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 332480},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 402106},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 329655},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 408046},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 393676},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 542555},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 402992},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 461406},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 361904},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 507328},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5911},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 147004},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 156183},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 209535},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 179383},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 264341},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 230495},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 225782},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 228797},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 317301},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 315131},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 353771},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 414047},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 440671},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 465914},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 440158},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 287527},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 413051},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 407191},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 460070},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 422198},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 565814},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 575424},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 494578},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 441548},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 465862},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 562773},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 461798},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 470863},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 429907},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 428863},
]},
],
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
				
				            maximum: 22192057,
				            interval: 2219205,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 161657},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 319111},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 507470},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 796173},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1140968},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1547348},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2067754},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2438638},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2941790},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3355333},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3787861},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4047762},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4316564},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4596383},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4869542},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5248973},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5602654},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5916470},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6408132},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6768018},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7100498},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7502604},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7832259},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8240305},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8633981},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9176536},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9579528},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10040934},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10402838},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10910166},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 10916077},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 147004},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 303187},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 512722},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 692105},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 956446},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1186941},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1412723},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1641520},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1958821},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2273952},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2627723},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3041770},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3482441},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3948355},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4388513},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4676040},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5089091},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5496282},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5956352},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6378550},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6944364},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7519788},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8014366},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8455914},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8921776},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9484549},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9946347},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10417210},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10847117},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11275980},
]},
],
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
				
				            maximum: 405818,
				            interval: 40581,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 104450},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 85793},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 101150},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 186962},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 219992},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 261747},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 359025},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 232019},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 351964},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 320951},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 293859},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 166387},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 156895},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 131754},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 157411},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 178515},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 188389},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 157557},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 181940},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 208476},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 155760},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 158378},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 185151},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 146492},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 138497},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 136291},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 134830},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 162144},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 151765},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 192917},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5911},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 32506},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 44349},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 58757},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 47701},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 70934},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 82753},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 92259},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 95550},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 95386},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 49315},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 66405},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 59068},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 59576},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 89973},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 52106},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 74978},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 101152},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 87692},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 175638},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 63996},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 85010},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 139663},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 52214},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 146925},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 169027},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 301636},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 193057},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 202811},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 114226},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 125536},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 115118},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 109912},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 120672},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 104155},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 139730},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 126434},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 133660},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 133720},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 179596},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 215097},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 228636},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 249452},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 297799},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 269442},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 214303},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 98896},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 186843},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 253584},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 254661},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 309618},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 361394},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 405818},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 305133},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 259455},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 241906},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 260498},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 258535},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 274099},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 242825},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 201990},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 24701},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 27312},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 28452},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 54040},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 53869},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 61880},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 69122},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 43315},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 55802},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 43277},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 72264},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 34446},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 52331},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 58092},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 63642},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 125938},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 64140},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 68567},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 134084},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 87414},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 91710},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 104065},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 92290},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 114629},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 86152},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 104628},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 75105},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 96451},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 95913},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 188875},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 18721},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 21302},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 34283},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 38532},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 57014},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 45842},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 50433},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 61934},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 65704},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 59495},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 59140},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 56456},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 94963},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 81214},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 76963},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 49522},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 83206},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 64540},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 75418},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 50242},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 144154},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 131175},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 99386},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 105731},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 89337},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 154950},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 92804},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 95368},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 99093},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 90368},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13165},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 24969},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 54580},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 36696},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 67597},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 58219},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 41689},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 33143},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 72001},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 40539},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 65995},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 108139},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 47909},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 115258},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 148892},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 139109},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 143002},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 89067},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 129991},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 62338},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 60266},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 38431},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 90059},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 76362},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 134619},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 147325},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 110459},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 101396},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 87989},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 136505},
]},
],
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
				            text: '雪歌的PT統計(總分800233)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 68621,
				            interval: 6862,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4496},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10139},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16378},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13242},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9717},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21974},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27069},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36063},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19522},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23661},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6905},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7705},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12265},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20380},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 27320},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12408},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 23961},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 56449},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24629},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29502},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 29373},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21988},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 54595},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23557},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 33299},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 68621},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4977},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4037},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3332},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8390},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5104},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2055},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7769},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5690},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4099},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3964},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7485},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4597},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7887},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10306},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9788},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5232},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6009},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6401},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4496},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5593},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6505},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13291},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10167},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12001},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5840},
]},
],
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

                   text: '雪歌的PT構成(總分800233)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 165015, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 182261, name: '強襲', legendMarkerType: 'square'},
{  y: 452957, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '喵鼠的PT統計(總分777795)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 120254,
				            interval: 12025,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6738},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6059},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12920},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9464},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11991},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 31248},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12322},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24506},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21137},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 60640},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 49113},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20125},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17450},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 31607},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28407},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 49559},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 120254},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4736},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 880},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6879},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9623},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5074},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5442},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 409},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5367},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3177},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 529},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4518},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6577},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2813},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5283},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6764},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 54},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11390},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 878},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6481},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2128},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7664},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6078},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2841},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2324},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7809},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5825},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14869},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7870},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24569},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 41349},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37310},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16745},
]},
],
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

                   text: '喵鼠的PT構成(總分777795)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 115718, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 148537, name: '強襲', legendMarkerType: 'square'},
{  y: 513540, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分682348)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40970,
				            interval: 4097,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6475},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4175},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4009},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2517},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9964},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 24011},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15996},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 23474},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7050},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11521},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7607},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3986},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8946},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4394},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16313},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18100},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10086},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16075},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33933},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6161},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6231},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14080},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6906},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10732},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10895},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12195},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4229},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21533},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7931},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15253},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19637},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20321},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16018},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17640},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26496},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4999},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13914},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11623},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15838},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15129},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13194},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12230},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24922},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 21446},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6584},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14730},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25484},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 40970},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16395},
]},
],
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

                   text: '依司瑪耳的PT構成(總分682348)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 321594, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 237458, name: '強襲', legendMarkerType: 'square'},
{  y: 123296, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分641687)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33869,
				            interval: 3386,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5345},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4899},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3631},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4660},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14720},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15213},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 29741},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17983},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4736},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6678},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10540},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12869},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6644},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5063},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16776},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30313},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13062},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15830},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 27845},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15005},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10293},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2889},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6324},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14947},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 64},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3562},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8374},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7127},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13767},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12621},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9951},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11466},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12113},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9245},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19126},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9988},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15927},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15120},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33869},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19439},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 19210},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3525},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6231},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9764},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7326},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7234},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33311},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22071},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18217},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17033},
]},
],
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

                   text: '葬月的PT構成(總分641687)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 328900, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 188075, name: '強襲', legendMarkerType: 'square'},
{  y: 124712, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分605084)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54650,
				            interval: 5465,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8952},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14367},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7160},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12790},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16556},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7860},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10572},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12467},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18842},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20052},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16842},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12613},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15702},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22996},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 31639},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8151},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 768},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4345},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5077},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10600},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2710},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7908},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18965},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 54650},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18168},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18378},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7242},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7830},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12424},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3309},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7399},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7334},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9297},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 609},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10492},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2551},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10894},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1097},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9085},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9442},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10955},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2851},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6445},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12568},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11467},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20438},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20965},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16417},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19527},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5316},
]},
],
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

                   text: '魔法的PT構成(總分605084)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 268976, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 229410, name: '強襲', legendMarkerType: 'square'},
{  y: 106698, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分594026)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35110,
				            interval: 3511,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8343},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8001},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4596},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20106},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12192},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 33796},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13150},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18664},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17976},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 30118},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2399},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9302},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6160},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4308},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9903},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14222},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8633},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6219},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10600},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11464},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8018},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8630},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5892},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9881},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3421},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5919},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13835},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13855},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14034},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12335},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10596},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11016},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13236},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11893},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7877},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7712},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19382},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 35110},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 31187},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9429},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10530},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17919},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7434},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9705},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13224},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11240},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20564},
]},
],
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

                   text: '阿拉的PT構成(總分594026)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 345972, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 167968, name: '強襲', legendMarkerType: 'square'},
{  y: 80086, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分587516)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36511,
				            interval: 3651,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4320},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3068},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5398},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17798},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10806},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18714},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 36511},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20707},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9940},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7981},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11084},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7782},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8054},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6105},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5282},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10273},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6082},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6333},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14157},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13092},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2480},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14225},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16586},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10166},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10322},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12804},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5273},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16171},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7634},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8934},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 30124},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14440},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13736},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19395},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6651},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16555},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19390},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22678},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14345},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7781},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13416},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5070},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11135},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12159},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12227},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20133},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20199},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分587516)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 319148, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 187445, name: '強襲', legendMarkerType: 'square'},
{  y: 80923, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神隱的PT統計(總分568129)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33814,
				            interval: 3381,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10688},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8092},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11977},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11011},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6866},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10191},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11524},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12108},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11436},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 31964},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12738},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22379},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18507},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26659},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 33814},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8718},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6202},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4108},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12126},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18309},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8116},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9791},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14428},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13530},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24139},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8859},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5232},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8736},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3416},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7328},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15632},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6543},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13385},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4590},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5859},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11545},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8410},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 898},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9932},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7843},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6462},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3089},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2820},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4832},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22350},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6921},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9999},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12118},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21909},
]},
],
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

                   text: '神隱的PT構成(總分568129)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 250046, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 239954, name: '強襲', legendMarkerType: 'square'},
{  y: 78129, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分561348)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58324,
				            interval: 5832,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5805},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6474},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 622},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2528},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17488},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4759},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 58324},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15690},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 54099},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16238},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29490},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6626},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8126},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12401},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10620},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9593},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10876},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14587},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12952},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13493},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17433},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14446},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9390},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 611},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4947},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 581},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7617},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5564},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8260},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9303},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3452},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5094},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6133},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11649},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14644},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7204},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10048},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8807},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20693},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15970},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15551},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14881},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7257},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14571},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16451},
]},
],
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

                   text: '冰的PT構成(總分561348)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 388943, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 134126, name: '強襲', legendMarkerType: 'square'},
{  y: 38279, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分555681)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34257,
				            interval: 3425,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7353},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9038},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6165},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9593},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16770},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6686},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 25576},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10619},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 34257},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18722},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5297},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8289},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11164},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6156},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6813},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8775},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4504},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6241},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8722},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7919},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11068},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11721},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11799},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18573},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3524},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2680},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13369},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2609},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10465},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 5911},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3339},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8744},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16388},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7192},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10104},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12690},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17382},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13225},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 27904},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27239},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24958},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12972},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9282},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10895},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11756},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13457},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 17776},
]},
],
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

                   text: '寇內爾緹的PT構成(總分555681)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 310378, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 169165, name: '強襲', legendMarkerType: 'square'},
{  y: 76138, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分537824)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25564,
				            interval: 2556,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6532},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2483},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5138},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14314},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8459},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25035},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20859},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3328},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25564},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18464},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25221},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12224},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10065},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13865},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11957},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5232},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14163},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4502},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4519},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12751},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12311},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6605},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6448},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3683},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4133},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7043},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11817},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1803},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17759},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3623},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11097},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9182},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9832},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4934},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14728},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14849},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19502},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16427},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13573},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17901},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15361},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9455},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17231},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15077},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14561},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14214},
]},
],
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

                   text: '土土昕的PT構成(總分537824)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 316277, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 151009, name: '強襲', legendMarkerType: 'square'},
{  y: 70538, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分527262)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35532,
				            interval: 3553,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7454},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12523},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17536},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14762},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25077},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12010},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3235},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2981},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11842},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5508},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4462},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14208},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17676},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 22574},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18981},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16415},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19107},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 28231},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 24935},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 35532},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16752},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8777},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12977},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11380},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9917},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3718},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8055},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9530},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2396},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11200},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9333},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9024},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14490},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13595},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17961},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7414},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9623},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 32},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6814},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12547},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14133},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2545},
]},
],
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

                   text: '嘎喵的PT構成(總分527262)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 383803, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 107420, name: '強襲', legendMarkerType: 'square'},
{  y: 36039, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '緋煌的PT統計(總分510682)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26309,
				            interval: 2630,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8658},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2691},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4707},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2333},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14733},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9566},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26309},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2240},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6730},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22660},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 25091},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10999},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18650},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5941},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6773},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3152},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10114},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 20692},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9540},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6538},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13161},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17249},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11117},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9610},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8153},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15249},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10756},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19012},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5330},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5029},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11842},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7967},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17232},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19600},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13769},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7916},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7450},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10348},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12885},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20459},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3960},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12862},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13199},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18410},
]},
],
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

                   text: '緋煌的PT構成(總分510682)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 322424, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 107489, name: '強襲', legendMarkerType: 'square'},
{  y: 80769, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分476246)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51650,
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
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2067},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5285},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6048},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6878},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15092},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8010},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10595},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12493},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21249},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12142},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11162},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 308},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12105},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6142},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8698},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16293},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15244},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7724},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6292},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12980},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10440},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9032},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11759},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3319},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7491},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4945},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4234},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11099},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14739},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6158},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10486},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 37403},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5357},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21278},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16351},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 51650},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8014},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11825},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2795},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13799},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5895},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8164},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3206},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分476246)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 273865, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 168522, name: '強襲', legendMarkerType: 'square'},
{  y: 33859, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分476144)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32424,
				            interval: 3242,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8847},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2718},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17099},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 27996},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 29152},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 30561},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12678},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21808},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22448},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 16319},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9193},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4167},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8154},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18621},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15314},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13301},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11189},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12067},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5403},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4910},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16724},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1520},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12566},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6834},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8544},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11373},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13895},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13196},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3843},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4630},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11495},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12083},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32424},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14751},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4051},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11254},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5016},
]},
],
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

                   text: '冰紅茶的PT構成(總分476144)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 363401, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 96473, name: '強襲', legendMarkerType: 'square'},
{  y: 16270, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分471962)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26650,
				            interval: 2665,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1813},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 966},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4936},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9740},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3066},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 26650},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16041},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17750},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14387},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15651},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 23487},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21251},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22179},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9983},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10724},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11574},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6195},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17110},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12692},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12235},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4674},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5395},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9173},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14948},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2432},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3976},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2412},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7907},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9292},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2784},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3494},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7161},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8185},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5508},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8167},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12527},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10773},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9695},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11880},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12193},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22544},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12891},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3298},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6596},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15627},
]},
],
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

                   text: '藏月的PT構成(總分471962)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 321423, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 125018, name: '強襲', legendMarkerType: 'square'},
{  y: 25521, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分468915)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 57262,
				            interval: 5726,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6516},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3992},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3089},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5124},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12915},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5485},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3434},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4580},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9031},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5243},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3672},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4424},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10416},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5504},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4946},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8207},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 989},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11308},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8882},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11933},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 96},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5154},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7015},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4817},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5965},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9392},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8427},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8149},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3818},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4194},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6482},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4806},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6152},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10104},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2901},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11164},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7383},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6288},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17165},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4661},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17215},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10489},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13424},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 57262},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 34361},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 24444},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23749},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24148},
]},
],
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

                   text: '阿榮的PT構成(總分468915)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 170556, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57770, name: '強襲', legendMarkerType: 'square'},
{  y: 240589, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分403918)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22604,
				            interval: 2260,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 666},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7347},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2638},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8821},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5440},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10348},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19908},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22604},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13366},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19898},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15405},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5751},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6345},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3691},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8584},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12534},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4622},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14174},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2800},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9131},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10072},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12218},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13643},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14535},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10905},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8852},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9749},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16781},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2738},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3358},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4134},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8568},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5493},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5128},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8019},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13733},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22602},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9212},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9438},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4896},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5053},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10718},
]},
],
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

                   text: '亞歷的PT構成(總分403918)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 290828, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 92423, name: '強襲', legendMarkerType: 'square'},
{  y: 20667, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '幻想魔術師的PT統計(總分402791)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25768,
				            interval: 2576,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3795},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5558},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6598},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3898},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8272},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3726},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19423},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 25768},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 19713},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6061},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9986},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1927},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11815},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7079},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9741},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12923},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7026},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11495},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6143},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6615},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4318},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15655},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3999},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2498},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9319},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13997},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10957},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8644},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9305},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2851},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6029},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11441},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9500},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9202},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9461},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11540},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10530},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18596},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13545},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7634},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2955},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9179},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7801},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6273},
]},
],
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

                   text: '幻想魔術師的PT構成(總分402791)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 266254, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 110329, name: '強襲', legendMarkerType: 'square'},
{  y: 26208, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分266486)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26289,
				            interval: 2628,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4672},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 795},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7819},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7169},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3569},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6400},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5048},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7398},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1328},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6516},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8261},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2979},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2564},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8671},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3143},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7606},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5913},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6629},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6631},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6919},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20590},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24762},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13221},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10782},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13524},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26289},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4738},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19452},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9706},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13392},
]},
],
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

                   text: '秋風冷月的PT構成(總分266486)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 89851, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 129347, name: '強襲', legendMarkerType: 'square'},
{  y: 47288, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '佩羅羅奇諾的PT統計(總分1016888)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 94651,
				            interval: 9465,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "佩羅羅奇諾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17967},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 24466},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 27721},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15528},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11902},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 50673},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 20871},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15189},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29601},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 54728},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32121},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 36733},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14126},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 94651},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 88035},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33366},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19468},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30751},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 77273},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21748},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21126},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 45113},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29576},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "佩羅羅奇諾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11727},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11063},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 34976},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "佩羅羅奇諾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2329},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8527},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4305},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1642},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 291},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2591},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10232},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8956},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9445},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9343},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9914},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1094},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10707},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5479},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10823},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8151},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3569},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2113},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11319},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4575},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 31},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8324},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12629},
]},
],
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

                   text: '佩羅羅奇諾的PT構成(總分1016888)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 146389, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57766, name: '強襲', legendMarkerType: 'square'},
{  y: 812733, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '獅心王查理的PT統計(總分665333)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34376,
				            interval: 3437,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "獅心王查理殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6314},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9747},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9478},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2041},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11661},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5013},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9801},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7117},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6709},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7186},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 34376},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 25668},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17360},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15339},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4520},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6357},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6678},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26922},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9406},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29480},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23350},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32531},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25911},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22634},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10325},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5519},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15619},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13377},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11845},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4829},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "獅心王查理強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8625},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9767},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7408},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10999},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11366},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8438},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9422},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11824},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3874},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9574},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25826},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13894},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10027},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7125},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17507},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "獅心王查理CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10380},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12473},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10004},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2763},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14249},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 19763},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12912},
]},
],
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

                   text: '獅心王查理的PT構成(總分665333)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 417113, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 165676, name: '強襲', legendMarkerType: 'square'},
{  y: 82544, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '~最後勇者之魂~的PT統計(總分644146)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 52569,
				            interval: 5256,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "~最後勇者之魂~殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3706},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5810},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4374},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8645},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13684},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6109},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5384},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5055},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5472},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8126},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11396},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2114},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17598},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5694},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2103},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4521},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6295},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15992},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23999},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28068},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20522},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2605},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35003},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6356},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 52569},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12488},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16377},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "~最後勇者之魂~CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4681},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6582},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8454},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13481},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20591},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17078},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13185},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18604},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7834},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15569},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "~最後勇者之魂~強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7677},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14438},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26544},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 38254},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13314},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25735},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19636},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22258},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 20166},
]},
],
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

                   text: '~最後勇者之魂~的PT構成(總分644146)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 330065, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 188022, name: '強襲', legendMarkerType: 'square'},
{  y: 126059, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Stanley的PT統計(總分620758)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42875,
				            interval: 4287,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Stanley殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6088},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 783},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6258},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1955},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4581},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9722},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6748},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11412},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9043},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7741},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6164},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11104},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3846},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2602},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9955},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9581},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26181},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8847},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 42875},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 23343},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 33455},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12595},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5802},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13297},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4912},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18596},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7514},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15832},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5062},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Stanley強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12489},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6457},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8554},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7953},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8997},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11562},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18893},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21198},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10793},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33914},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23292},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14199},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "StanleyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5001},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8202},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7693},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13730},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14958},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11785},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14896},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20229},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20069},
]},
],
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

                   text: 'Stanley的PT構成(總分620758)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 325894, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 178301, name: '強襲', legendMarkerType: 'square'},
{  y: 116563, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '貓里的PT統計(總分612414)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31090,
				            interval: 3109,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "貓里殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9565},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7171},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9747},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3145},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10970},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9235},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 794},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7461},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5614},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13048},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5954},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10261},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8313},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6776},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5010},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18027},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10262},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 31090},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9908},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6574},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11519},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6303},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14163},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16852},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22703},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14792},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7470},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15651},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "貓里強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7682},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7684},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17591},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10985},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20140},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18055},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10712},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15094},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28221},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3066},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21613},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17863},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18487},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14718},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "貓里CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11514},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10909},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13464},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 21399},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22094},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22745},
]},
],
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

                   text: '貓里的PT構成(總分612414)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 298378, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 211911, name: '強襲', legendMarkerType: 'square'},
{  y: 102125, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '想貓人的PT統計(總分606223)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40223,
				            interval: 4022,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "想貓人殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9987},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5266},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8334},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11608},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6700},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3940},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6808},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11570},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12689},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5275},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5795},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17877},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 40223},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4838},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5614},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5634},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15817},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14271},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 30478},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16468},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4481},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13035},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18858},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9289},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17723},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26372},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30421},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11667},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17788},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7671},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "想貓人CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8210},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8663},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7978},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9635},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3257},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13664},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6064},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11312},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15348},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15169},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "想貓人強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6578},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13329},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12431},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12100},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9186},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11985},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17350},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27467},
]},
],
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

                   text: '想貓人的PT構成(總分606223)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 396497, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 110426, name: '強襲', legendMarkerType: 'square'},
{  y: 99300, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '尤里斯特亞的PT統計(總分604274)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41170,
				            interval: 4117,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "尤里斯特亞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5052},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7331},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13983},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12151},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15610},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11411},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5997},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11144},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10698},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15810},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "尤里斯特亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7927},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10795},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6786},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9926},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10149},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14686},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12742},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3890},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 19753},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 26439},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 41170},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24164},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 30273},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 34883},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1211},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6286},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10972},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10917},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11970},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6342},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19679},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13408},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7978},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11274},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6155},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18345},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12252},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17532},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7975},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12591},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "尤里斯特亞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15042},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16478},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25027},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10070},
]},
],
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

                   text: '尤里斯特亞的PT構成(總分604274)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 428470, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 109187, name: '強襲', legendMarkerType: 'square'},
{  y: 66617, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Luci的PT統計(總分581987)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33561,
				            interval: 3356,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Luci殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5616},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4964},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6348},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8842},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4830},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7540},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7550},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5624},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7007},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10079},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4226},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5625},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11070},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8394},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7241},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13070},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2685},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9147},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 32714},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 18565},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25906},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20809},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33561},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7771},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13860},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8946},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11196},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15095},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7656},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9067},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "LuciCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4196},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8030},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8963},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13939},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 15178},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13808},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7047},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14099},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20046},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16948},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16087},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Luci強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5902},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5699},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7475},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5762},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6476},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13416},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12245},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12773},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9838},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13735},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15321},
]},
],
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

                   text: 'Luci的PT構成(總分581987)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 335004, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 108642, name: '強襲', legendMarkerType: 'square'},
{  y: 138341, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '好事迪的PT統計(總分554320)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48044,
				            interval: 4804,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "好事迪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9148},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12241},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10353},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2313},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10740},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9836},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10670},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3175},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13967},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "好事迪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4086},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 474},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6785},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7653},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2711},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5288},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13800},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3752},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10424},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12128},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28724},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20227},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20384},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11741},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8649},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16690},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 37062},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 37069},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17601},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 22599},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 48044},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9657},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16137},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17005},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15743},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17473},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16391},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12385},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5033},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "好事迪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4364},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12205},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9593},
]},
],
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

                   text: '好事迪的PT構成(總分554320)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 445715, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26162, name: '強襲', legendMarkerType: 'square'},
{  y: 82443, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Crystal的PT統計(總分553251)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49864,
				            interval: 4986,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Crystal殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8488},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4988},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8681},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11060},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8798},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 13302},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 8080},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10485},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4757},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12541},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20129},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14010},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 45233},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14919},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9381},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10330},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8962},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7005},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12732},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 49721},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 49864},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 46033},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19489},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9153},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17639},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7200},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15367},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10833},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5670},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Crystal強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4255},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9540},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9004},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10457},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3428},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7905},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11844},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13894},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "CrystalCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10652},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7422},
]},
],
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

                   text: 'Crystal的PT構成(總分553251)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 464850, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 70327, name: '強襲', legendMarkerType: 'square'},
{  y: 18074, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '喬書亞的PT統計(總分538296)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46625,
				            interval: 4662,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喬書亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1420},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5289},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9263},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6045},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5072},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1129},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1431},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7943},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5581},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10779},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5244},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6033},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24151},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10847},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 46625},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12823},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 27514},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5583},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19796},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12111},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10067},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14668},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2862},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9852},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14674},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15087},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12903},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喬書亞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3749},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7115},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6678},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6977},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7364},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7753},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7735},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16079},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7314},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24766},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12377},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15120},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12295},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喬書亞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4783},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2423},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5177},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6021},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7057},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 36288},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13569},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8303},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14561},
]},
],
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

                   text: '喬書亞的PT構成(總分538296)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 304792, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 135322, name: '強襲', legendMarkerType: 'square'},
{  y: 98182, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小油麵包的PT統計(總分533504)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37329,
				            interval: 3732,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小油麵包殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8160},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3194},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7541},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14741},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16241},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12554},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3341},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7039},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1764},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3573},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13204},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8191},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7163},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19005},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12583},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19471},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5222},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6561},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7754},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 17796},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19806},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12250},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23695},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22127},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 24770},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25902},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3268},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 37329},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29186},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小油麵包CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5390},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7380},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7781},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9295},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2596},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13368},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15194},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13097},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小油麵包強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12211},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2601},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1078},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7488},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8457},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14246},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19872},
]},
],
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

                   text: '小油麵包的PT構成(總分533504)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 393450, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 65953, name: '強襲', legendMarkerType: 'square'},
{  y: 74101, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾佛烈·阿道弗斯的PT統計(總分527166)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31273,
				            interval: 3127,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈·阿道弗斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10275},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8509},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7445},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9937},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 16321},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14382},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5261},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16639},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16514},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈·阿道弗斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3820},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7760},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8300},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12327},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4820},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14549},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2436},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5821},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14095},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12501},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9108},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5201},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20169},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 28604},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14003},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26816},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8343},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8816},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2987},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 28492},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 17028},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 31273},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12331},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14561},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7071},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6995},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈·阿道弗斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7040},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10757},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8665},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9203},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23719},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16134},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18138},
]},
],
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

                   text: '艾佛烈·阿道弗斯的PT構成(總分527166)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 328227, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 105283, name: '強襲', legendMarkerType: 'square'},
{  y: 93656, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分495052)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26025,
				            interval: 2602,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9583},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7836},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11006},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11480},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15004},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26025},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15529},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12631},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15216},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16230},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19061},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6052},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8036},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6418},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7552},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4175},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2850},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8164},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2827},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4919},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11963},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8002},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7796},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10118},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8894},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9283},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13399},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 767},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12846},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15033},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20251},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22640},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6441},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4788},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8047},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9637},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12694},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12696},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15641},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2852},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4341},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4204},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10810},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18012},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15407},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17896},
]},
],
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

                   text: '凱爾的PT構成(總分495052)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 264781, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 159601, name: '強襲', legendMarkerType: 'square'},
{  y: 70670, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小鈴鐺的PT統計(總分492785)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40474,
				            interval: 4047,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小鈴鐺殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 12888},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6243},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7909},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8116},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11867},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7743},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8418},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12063},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20014},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 40474},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20192},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 18370},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 29775},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17190},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13929},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2904},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13771},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 874},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8671},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14155},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24889},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17576},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15194},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16609},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11824},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3001},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15538},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3811},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14103},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11226},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小鈴鐺CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9530},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1862},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13096},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小鈴鐺強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5328},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11685},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6343},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8546},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10989},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5360},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9568},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1141},
]},
],
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

                   text: '小鈴鐺的PT構成(總分492785)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 409337, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 58960, name: '強襲', legendMarkerType: 'square'},
{  y: 24488, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '↗我黑故我在↙的PT統計(總分491895)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38480,
				            interval: 3848,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "↗我黑故我在↙殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5811},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9682},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7829},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1760},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6173},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9688},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3272},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7200},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4819},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5583},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9165},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16890},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15207},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11190},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12357},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6124},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6203},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 11517},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10421},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11812},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6631},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16143},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9943},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9754},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13938},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11219},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3926},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6889},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8034},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 21166},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "↗我黑故我在↙強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9044},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6400},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10080},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9735},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12831},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14611},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14248},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17201},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27535},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 38480},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12407},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "↗我黑故我在↙CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9065},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7066},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11372},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11474},
]},
],
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

                   text: '↗我黑故我在↙的PT構成(總分491895)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 280346, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 172572, name: '強襲', legendMarkerType: 'square'},
{  y: 38977, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '血汗工廠的PT統計(總分453798)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27670,
				            interval: 2767,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "血汗工廠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7382},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7826},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4706},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 780},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8185},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5153},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 11095},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6919},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8042},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12037},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5181},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10424},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5279},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24189},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20977},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4673},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9604},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 24369},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10912},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20951},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4085},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8454},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17035},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4231},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12029},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8933},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13034},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "血汗工廠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4557},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7665},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27670},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7750},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21695},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "血汗工廠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14786},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10349},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17829},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 722},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 14571},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7355},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8138},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8616},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10644},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14966},
]},
],
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

                   text: '血汗工廠的PT構成(總分453798)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
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
{  y: 107976, name: '強襲', legendMarkerType: 'square'},
{  y: 69337, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬈髮的騙人布的PT統計(總分433024)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37767,
				            interval: 3776,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬈髮的騙人布殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5860},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8454},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8965},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4287},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6031},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4203},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8076},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3978},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16468},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11459},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8602},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16481},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8467},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13089},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9210},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5940},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3495},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 22019},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4248},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 37767},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16452},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 17636},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13421},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9555},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3591},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13456},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11852},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13401},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4284},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬈髮的騙人布強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2130},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8799},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12112},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12755},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5756},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20695},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1861},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14209},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10789},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11892},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16192},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬈髮的騙人布CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5061},
]},
],
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

                   text: '鬈髮的騙人布的PT構成(總分433024)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 310773, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 117190, name: '強襲', legendMarkerType: 'square'},
{  y: 5061, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '麗麗的PT統計(總分430287)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30362,
				            interval: 3036,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "麗麗殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5087},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2758},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8478},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3801},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6811},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11247},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9032},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8671},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5204},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5977},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7653},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5271},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 666},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6686},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 151},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3621},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7926},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20166},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 30362},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7174},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16110},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1383},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7272},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6816},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9152},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4250},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "麗麗強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18573},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11063},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4538},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10600},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6926},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8346},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13801},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16038},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26326},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29860},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18438},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "麗麗CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9775},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13540},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10753},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29985},
]},
],
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

                   text: '麗麗的PT構成(總分430287)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 201725, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 164509, name: '強襲', legendMarkerType: 'square'},
{  y: 64053, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '諾雅的PT統計(總分420579)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46274,
				            interval: 4627,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3439},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2663},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4467},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5154},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4190},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1501},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3192},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3976},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7958},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4957},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5343},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5186},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7258},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5838},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6361},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5931},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5161},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7290},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6628},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12104},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5869},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9942},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6461},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19748},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6365},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3193},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10570},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9802},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14143},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 46274},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17692},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16321},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8726},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4959},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11100},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14624},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6294},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18426},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3158},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11561},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19766},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15371},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 31617},
]},
],
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

                   text: '諾雅的PT構成(總分420579)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 194690, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 161923, name: '強襲', legendMarkerType: 'square'},
{  y: 63966, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
