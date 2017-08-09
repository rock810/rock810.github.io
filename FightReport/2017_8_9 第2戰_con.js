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
				
				            maximum: 2134884,
				            interval: 213488,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 159750},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 164126},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 280591},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 372106},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 417472},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 506558},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 379788},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 539294},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 416332},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 437845},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 446250},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 460559},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 496159},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 505215},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 574567},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 657106},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 740322},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 623177},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 654979},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 501909},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 715328},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 622207},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 676136},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 564891},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 640246},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 438984},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 543027},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 531578},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 568185},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 602651},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 6461},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 319083},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 411175},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 455006},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 399734},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 535577},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 604447},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 659897},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 801517},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 979894},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 982976},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1161972},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1227272},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1154782},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 829626},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 906423},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1088383},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1047408},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1213275},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1277813},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1300460},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1245346},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1251512},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1506924},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1507818},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1546922},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1534883},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1881105},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2134884},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1770535},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1410260},
]},
],
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
				
				            maximum: 48390708,
				            interval: 4839070,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 159750},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 323876},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 604467},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 976573},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1394045},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1900603},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2280391},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2819685},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3236017},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3673862},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4120112},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4580671},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5076830},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5582045},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6156612},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6813718},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7554040},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8177217},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8832196},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9334105},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10049433},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10671640},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11347776},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11912667},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12552913},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12991897},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13534924},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14066502},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14634687},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15237338},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 15243799},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 319083},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 730258},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1185264},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1584998},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2120575},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2725022},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3384919},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4186436},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5166330},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6149306},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7311278},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8538550},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9693332},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10522958},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11429381},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12517764},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13565172},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14778447},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16056260},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 17356720},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18602066},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19853578},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 21360502},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22868320},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24415242},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25950125},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27831230},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29966114},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31736649},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 33146909},
]},
],
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
				
				            maximum: 1628593,
				            interval: 162859,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 126639},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 124107},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 210977},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 283912},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 335857},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 383283},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 317691},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 420967},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 306177},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 333267},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 352136},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 308965},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 333919},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 270411},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 417793},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 448614},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 565018},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 422651},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 394608},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 283708},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 411947},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 406413},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 451916},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 434029},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 448269},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 326944},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 321388},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 273524},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 431954},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 478086},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 6461},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16271},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 28948},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 37265},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 79088},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 46602},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 92366},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 62097},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 85697},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 62023},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 71581},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 81361},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 73798},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 133006},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 145556},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 125967},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 110490},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 116190},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 113497},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 112180},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 100806},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 109619},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 79764},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 83996},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 98830},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 108052},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 87011},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 125470},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 87639},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 96750},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 94633},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 135547},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 74881},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 89211},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 122140},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 115867},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 97639},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 67725},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 77901},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 113013},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 87642},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 181775},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 195844},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 134252},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 210424},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 144741},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 136002},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 154073},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 125692},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 145025},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 230190},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 165931},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 198652},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 130537},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 84074},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 147045},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 202612},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 177516},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 239096},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 176366},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 186373},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 136384},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 271477},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 298342},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 213004},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 339356},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 412650},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 506647},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 601021},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 764043},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 756656},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 804638},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 879461},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 816491},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 461393},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 640047},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 778245},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 784622},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 888350},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 949977},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 840125},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 870320},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 886510},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1164882},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1218990},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1205807},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1092714},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1419923},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1628593},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1371931},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1050962},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 47152},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 64817},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 67453},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 64590},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 80354},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 94158},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 85525},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 122595},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 102838},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 138678},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 175559},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 151967},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 204039},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 157809},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 121635},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 174136},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 108713},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 199233},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 182811},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 230145},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 209095},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 166350},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 211505},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 204754},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 194070},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 239557},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 283666},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 267195},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 222238},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 172925},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16840},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11071},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 32349},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9106},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 35013},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 30909},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 32630},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 48132},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 32997},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12753},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 77796},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 29234},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 89248},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30807},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 98002},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 59114},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 87029},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 148191},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 117395},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 193762},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 136030},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 140224},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32032},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 83925},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25029},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 96169},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 170415},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 39481},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29932},
]},
],
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
				            text: '喵鼠的PT統計(總分1271553)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 91572,
				            interval: 9157,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11694},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5928},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3481},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5539},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6390},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13496},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 101},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7768},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7117},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 31631},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7772},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9042},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1659},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10951},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5206},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8003},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4369},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7119},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 20340},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 42622},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 33194},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16585},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 44740},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 43804},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 39269},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 82148},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 91572},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 82989},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30582},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 68823},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 88983},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 30699},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23339},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32075},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 28329},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20502},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15857},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 40319},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16464},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29090},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5877},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22634},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26540},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22979},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28237},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 35728},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25033},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6118},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17196},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11547},
]},
],
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

                   text: '喵鼠的PT構成(總分1271553)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 140220, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 929444, name: 'CBC', legendMarkerType: 'square'},
{  y: 201889, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分1116195)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 61712,
				            interval: 6171,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6159},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11345},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14406},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 33831},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 51551},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20781},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18140},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 53643},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 28578},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28608},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 39006},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 54226},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 48799},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4677},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6185},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13277},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12459},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10937},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 36842},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26565},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 45143},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 30632},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 23431},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17293},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31330},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5585},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12957},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18522},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 31526},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 59690},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 61176},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18284},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2328},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7106},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2306},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18524},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26201},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18518},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 987},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 61712},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5828},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8383},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6407},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12600},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 27370},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14873},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 27468},
]},
],
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

                   text: '雪歌的PT構成(總分1116195)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 409073, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 618404, name: '殲滅', legendMarkerType: 'square'},
{  y: 88718, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分995155)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56158,
				            interval: 5615,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10022},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8979},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9966},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13819},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12867},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8246},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 53729},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11956},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 28331},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7985},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6959},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10823},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8014},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 33055},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2839},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 567},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13973},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2069},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9133},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7433},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13445},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 12697},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5514},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 37008},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15558},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4540},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8590},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9943},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26484},
{ x: new Date(0, 0, 0, 23, 30, 0), y: 6461},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4543},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 32533},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5996},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11394},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 46731},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 34143},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8402},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 52346},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 19430},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47662},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27242},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16962},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 51838},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29143},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10442},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6035},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 56158},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 15915},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16603},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17080},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 27888},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 29413},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26251},
]},
],
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

                   text: '土土昕的PT構成(總分995155)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 401005, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 404842, name: '強襲', legendMarkerType: 'square'},
{  y: 189308, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分994794)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 92113,
				            interval: 9211,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16347},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 18134},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19296},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 27604},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 44270},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 28346},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 21989},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 20641},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17592},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 26287},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 23670},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37906},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 29624},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 17869},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 34867},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28429},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36034},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17937},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 64187},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 44458},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 54128},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11464},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 45707},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 56740},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24082},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 24917},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11363},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 41215},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21413},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 92113},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2732},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4987},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9091},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10932},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8423},
]},
],
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

                   text: '嘎喵的PT構成(總分994794)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 958629, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 36165, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '依司瑪耳的PT統計(總分993475)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 83694,
				            interval: 8369,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 493},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1450},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4915},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 38379},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 30323},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 63381},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 44057},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 22919},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 45855},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21252},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 32934},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13835},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 56047},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 52012},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 41514},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 26384},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16160},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21831},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 44660},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26926},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15459},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 25392},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33016},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17337},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 83694},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33351},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 37640},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 35198},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30865},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 52508},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23688},
]},
],
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

                   text: '依司瑪耳的PT構成(總分993475)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 969787, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23688, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '阿拉的PT統計(總分952483)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 83537,
				            interval: 8353,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13294},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6295},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 40958},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 28996},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 60557},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 50203},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16621},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 27364},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24350},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 37157},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24796},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24062},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8517},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10130},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13346},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 16852},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 35408},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 18980},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11290},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16759},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 14016},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 15541},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 46447},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35007},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 59456},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28120},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 83537},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22978},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 63343},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18246},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11316},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9838},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14327},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20170},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13854},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10352},
]},
],
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

                   text: '阿拉的PT構成(總分952483)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 872626, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 69505, name: 'CBC', legendMarkerType: 'square'},
{  y: 10352, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分926112)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49351,
				            interval: 4935,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5002},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3495},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4084},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9940},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6611},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 33031},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23331},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 26357},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15102},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11143},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20889},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8101},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10517},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10426},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9343},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5761},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 39135},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2708},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5314},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8623},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 21426},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19733},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4457},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23833},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30140},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 49351},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13120},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9116},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9529},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17317},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5890},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9238},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9106},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14093},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9933},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10062},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12715},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18227},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18771},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15054},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 44545},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25146},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21367},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 18499},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 32345},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 29749},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18669},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17976},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15739},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15320},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16798},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14117},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9999},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8009},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 24783},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 33027},
]},
],
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

                   text: '葬月的PT構成(總分926112)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 456935, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 347124, name: '強襲', legendMarkerType: 'square'},
{  y: 122053, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分896075)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 92589,
				            interval: 9258,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7827},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9102},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7750},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17091},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9639},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 29259},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12727},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11481},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10192},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16650},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11335},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 36333},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18048},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12561},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21881},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 37278},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 92589},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 90578},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 65186},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 38036},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 59793},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 49903},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14253},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10713},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11356},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12017},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28973},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9694},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 54412},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14960},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3911},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3106},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5754},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7572},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7158},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11492},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11218},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12247},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 12000},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分896075)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 821617, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 62458, name: 'CBC', legendMarkerType: 'square'},
{  y: 12000, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分808920)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 99186,
				            interval: 9918,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9029},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3254},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3364},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6547},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 621},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 11936},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8449},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 16298},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 28730},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8583},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15568},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19084},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4541},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11128},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 37998},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2425},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8028},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6629},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15133},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13301},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8708},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9712},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9169},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3884},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 34706},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12370},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2992},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 34502},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 16541},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 99186},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 47510},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16977},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27135},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 76383},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8718},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 22464},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9077},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 28031},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 37422},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22889},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19579},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6625},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23694},
]},
],
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

                   text: '秋風冷月的PT構成(總分808920)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 309195, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 321226, name: '強襲', legendMarkerType: 'square'},
{  y: 178499, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分807091)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 66644,
				            interval: 6664,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7684},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5198},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 23091},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20554},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 34105},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 30341},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23393},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9962},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9774},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8745},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9533},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17624},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 16647},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5830},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19023},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 56505},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 42081},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15501},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15516},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 26271},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 49382},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 52637},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 66644},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 36580},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 44621},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21102},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 40305},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8766},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 26409},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 44516},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3115},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1994},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13642},
]},
],
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

                   text: '雷克斯的PT構成(總分807091)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 788340, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 18751, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '羽龍的PT統計(總分753585)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53024,
				            interval: 5302,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13335},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8602},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17147},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20596},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15289},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2594},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 45684},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10637},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17673},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13954},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 33261},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 21308},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22625},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4346},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 52788},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 32634},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26955},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2785},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13645},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6206},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 49711},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14719},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 53024},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23822},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25348},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2062},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16675},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9860},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 28716},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 41483},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3086},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4576},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10285},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11214},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12345},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11322},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7905},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 21957},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12408},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11003},
]},
],
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

                   text: '羽龍的PT構成(總分753585)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 647484, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 106101, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '冰的PT統計(總分738120)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58001,
				            interval: 5800,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7004},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10141},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 12402},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8777},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11438},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9294},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7786},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6256},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 30313},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 30884},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 53156},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12040},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7358},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 36623},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6848},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10445},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13946},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 32003},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4776},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10297},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9482},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20597},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 54022},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13182},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 46132},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5375},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11575},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29288},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8631},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 56238},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11442},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17297},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17407},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3348},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 58001},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12259},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 28870},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13187},
]},
],
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

                   text: '冰的PT構成(總分738120)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 59056, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 637007, name: '殲滅', legendMarkerType: 'square'},
{  y: 42057, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分687999)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51138,
				            interval: 5113,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4971},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12536},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2426},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9029},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14243},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21028},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14330},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 46788},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 38211},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 26650},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5279},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4334},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11453},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26309},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 47333},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18484},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 22389},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 31371},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 32462},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15494},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9242},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 43924},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2481},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16645},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10626},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21113},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7793},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13624},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3532},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 51138},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5602},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5447},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8865},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14952},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15110},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10830},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19291},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16780},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5884},
]},
],
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

                   text: '寇內爾緹的PT構成(總分687999)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 585238, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 60806, name: '強襲', legendMarkerType: 'square'},
{  y: 41955, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分585709)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64115,
				            interval: 6411,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5929},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7470},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7450},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16699},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2888},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21869},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 21291},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 17832},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 41276},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12703},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22422},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16144},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1688},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18515},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11716},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 64115},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 54258},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 32843},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 37006},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4911},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13100},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 22247},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18434},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 46261},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13170},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15038},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24050},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14384},
]},
],
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

                   text: '亞歷的PT構成(總分585709)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 20849, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 564860, name: '殲滅', legendMarkerType: 'square'},
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
				            text: '魔法的PT統計(總分512309)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47272,
				            interval: 4727,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8034},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1904},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9330},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6590},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9490},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7900},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10150},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 34227},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 47272},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 32813},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 41920},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18050},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15975},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 18790},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 20778},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25236},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9168},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1141},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3855},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 12776},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 39710},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18504},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4350},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14674},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13277},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9270},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13237},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3631},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15783},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23516},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6472},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14486},
]},
],
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

                   text: '魔法的PT構成(總分512309)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 452052, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 45771, name: 'CBC', legendMarkerType: 'square'},
{  y: 14486, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分508049)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 61967,
				            interval: 6196,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2650},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12544},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15926},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20749},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16202},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15057},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7753},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 36569},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3222},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4480},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3606},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3651},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18810},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 42364},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7034},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18665},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17331},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 12368},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10083},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 61967},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10155},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14388},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12446},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18524},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10427},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6195},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16239},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11278},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 38623},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 15291},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5799},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8261},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9344},
]},
],
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

                   text: '藏月的PT構成(總分508049)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 469354, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 38695, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分470911)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 52472,
				            interval: 5247,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5227},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6862},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 505},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7855},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7003},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2184},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 26240},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 15359},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4925},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 52472},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7864},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19826},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28026},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8419},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6781},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8164},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9645},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9113},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 33040},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6153},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1635},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 744},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15035},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4716},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7313},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9673},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10703},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16030},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18521},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11542},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8580},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12206},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7645},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5033},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17564},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 34082},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14200},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10005},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分470911)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 315503, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 66879, name: 'CBC', legendMarkerType: 'square'},
{  y: 88529, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分467505)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51790,
				            interval: 5179,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2196},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6835},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2195},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7821},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10791},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11275},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 725},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9405},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4439},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 565},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8131},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3222},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 36935},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9749},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2828},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3178},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35196},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2581},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10074},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 91},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4663},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8099},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 26262},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14668},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15734},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24114},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20763},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 51790},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 31030},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12375},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7695},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24609},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32505},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24966},
]},
],
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

                   text: '阿榮的PT構成(總分467505)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 172895, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 192460, name: 'CBC', legendMarkerType: 'square'},
{  y: 102150, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分442881)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24680,
				            interval: 2468,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9110},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4908},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9234},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2316},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3217},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11893},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 577},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 833},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 255},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14426},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20208},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6043},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10785},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 405},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3089},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1924},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2305},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5047},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1028},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24680},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1024},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6506},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2913},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 723},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2641},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5194},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5134},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7828},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11357},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9996},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5666},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10335},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6757},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7162},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1864},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8015},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12580},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7236},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1887},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15433},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15228},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14061},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15528},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15070},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16881},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14677},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13838},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11063},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8158},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4910},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7847},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 13582},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 14802},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14702},
]},
],
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

                   text: '冰紅茶的PT構成(總分442881)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 146090, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 240948, name: '強襲', legendMarkerType: 'square'},
{  y: 55843, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分314878)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36220,
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
                                    name: "赤雲天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2718},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10922},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1255},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11241},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1890},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4682},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2747},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14075},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3945},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4680},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 32119},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8119},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 101},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11673},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1066},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22135},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 26335},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9218},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6732},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10267},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5851},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6450},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 36220},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 14187},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9879},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11641},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4056},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4598},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13630},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11958},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10488},
]},
],
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

                   text: '赤雲天的PT構成(總分314878)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 304390, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10488, name: '強襲', legendMarkerType: 'square'},
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
				            text: '雪音的PT統計(總分1900675)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 113308,
				            interval: 11330,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪音殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9369},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7421},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2044},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6519},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6179},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2970},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3015},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7643},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13743},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1148},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 31170},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6619},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2274},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4981},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9195},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7477},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3503},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9641},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17282},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9113},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪音強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7077},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 48069},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 40837},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 24138},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 25676},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 50341},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 42884},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 25525},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21635},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31899},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 57080},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 46533},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 58885},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 62330},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 34559},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 62437},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 78041},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 57290},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 82827},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 42062},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 85305},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 22764},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 49758},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 113308},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 42302},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 39414},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪音CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 20878},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10062},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 41438},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 65124},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 23918},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 28749},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 13389},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 33140},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 36062},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 42275},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 65667},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 105691},
]},
],
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

                   text: '雪音的PT構成(總分1900675)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 161306, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1252976, name: '強襲', legendMarkerType: 'square'},
{  y: 486393, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '布萊迪的PT統計(總分1865919)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 128567,
				            interval: 12856,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "布萊迪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7955},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3106},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6052},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7698},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5681},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6472},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4927},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7105},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4216},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7773},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 132},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 31352},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15064},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12392},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6624},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4181},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7210},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24814},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 36784},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17004},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13930},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3859},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "布萊迪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 32249},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17716},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10930},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11885},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 49255},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16305},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 38692},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 73986},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 68899},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 31679},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 38203},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 44869},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 31648},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 53661},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 57230},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 32224},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 68001},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 37162},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 38489},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 39478},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 39247},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 96763},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36078},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 102095},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 128567},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 73238},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "布萊迪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11196},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18719},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16858},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 23271},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 62684},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22060},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 43470},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 40948},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 98895},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24938},
]},
],
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

                   text: '布萊迪的PT構成(總分1865919)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 234331, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1268549, name: '強襲', legendMarkerType: 'square'},
{  y: 363039, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '★桐人★的PT統計(總分1846602)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 185221,
				            interval: 18522,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "★桐人★CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5537},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 26758},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 50795},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 61335},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 36069},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 36344},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 37103},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "★桐人★強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11502},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11577},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7218},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7323},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11308},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 22615},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19716},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16457},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 38053},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 28742},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 45943},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 54953},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 24786},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 53407},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29549},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 26598},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 26234},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 24275},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 71344},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 84167},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 60610},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 68405},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 47376},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35292},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 137118},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 171135},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 185221},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 75518},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "★桐人★殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5050},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3045},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3229},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11473},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6709},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4079},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4863},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6280},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6229},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3016},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4237},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 37798},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9615},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15111},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15941},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9186},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4413},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3053},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8764},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 440},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1544},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 32144},
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
                                          PlayerChart23.render();
                                        }
                                      }
                                    });
                            PlayerChart23.render();
var PlayerPieChart23 = new CanvasJS.Chart('PlayerPieChartContainer23',

    {

        title:{

                   text: '★桐人★的PT構成(總分1846602)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 253941, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 1396442, name: '強襲', legendMarkerType: 'square'},
{  y: 196219, name: '殲滅', legendMarkerType: 'circle'},
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
				            text: '大李飛刀的PT統計(總分1837401)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 152739,
				            interval: 15273,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大李飛刀強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6556},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 31349},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9407},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20725},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15755},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 31222},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 40060},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 64326},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 80400},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 57806},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 47651},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 44855},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 65676},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 88589},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 66260},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 53066},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 35657},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 114227},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 82487},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37271},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 51147},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 152739},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 123141},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 71409},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大李飛刀殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9172},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1504},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14192},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5796},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11244},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 13832},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 771},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 27342},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4332},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1611},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7195},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1157},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16145},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5122},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3155},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8288},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7965},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 53321},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3322},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17752},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8649},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大李飛刀CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13884},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14322},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28873},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 88021},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 30072},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 48581},
]},
],
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

                   text: '大李飛刀的PT構成(總分1837401)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1391781, name: '強襲', legendMarkerType: 'triangle'},
{  y: 221867, name: '殲滅', legendMarkerType: 'square'},
{  y: 223753, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '豬肉火腿起司蛋餅的PT統計(總分1832306)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 150677,
				            interval: 15067,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "豬肉火腿起司蛋餅殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4868},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10087},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5722},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8490},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6165},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5497},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 13017},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 33662},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 9120},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4812},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7981},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8550},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8445},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8397},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8873},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8716},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5060},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 36592},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9230},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3985},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "豬肉火腿起司蛋餅強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2044},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 33814},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 34375},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 27205},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12147},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 57168},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 78278},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 79204},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 77970},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 44039},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 17110},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28246},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31451},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 37895},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 83020},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 119337},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 61056},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 89934},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 81034},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 85958},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 30562},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 90090},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 38629},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 150677},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 77249},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "豬肉火腿起司蛋餅CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9676},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12589},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 31785},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 32475},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32741},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 37279},
]},
],
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

                   text: '豬肉火腿起司蛋餅的PT構成(總分1832306)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 207269, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1468492, name: '強襲', legendMarkerType: 'square'},
{  y: 156545, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰淇淋的PT統計(總分1829403)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 174831,
				            interval: 17483,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰淇淋殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4759},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6089},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11434},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10622},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6055},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 798},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7305},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7070},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7954},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 31238},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3089},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 10890},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8886},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8265},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13973},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5559},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5164},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8750},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2439},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰淇淋強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 23861},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9562},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9915},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13675},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16324},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 51535},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 32887},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 35137},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 41424},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 58607},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 106590},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 92928},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25350},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 62747},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 60489},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 51699},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 68592},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 22184},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 74144},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 40334},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22918},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 105067},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 51763},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 56423},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 174831},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 104272},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰淇淋CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9095},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10296},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16253},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14240},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 79977},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 43931},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 81991},
]},
],
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

                   text: '冰淇淋的PT構成(總分1829403)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 160362, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1413258, name: '強襲', legendMarkerType: 'square'},
{  y: 255783, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '惡系的PT統計(總分1786952)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 118861,
				            interval: 11886,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "惡系殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11649},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 98},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6024},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12076},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5970},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7236},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4737},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4557},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3508},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 42617},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6632},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13212},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8887},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9008},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10420},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8692},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5767},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9053},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "惡系強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 22318},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 27296},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 37435},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8390},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16989},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 38493},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 42593},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 44034},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 40065},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29876},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 86032},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 43242},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24426},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 61719},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 56942},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 90951},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 55568},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 34888},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 118861},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18253},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 98625},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 95901},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 84024},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 92365},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "惡系CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7579},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12234},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 35048},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 89685},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 46784},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10585},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32355},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 59106},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 38400},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15747},
]},
],
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

                   text: '惡系的PT構成(總分1786952)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 170143, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1269286, name: '強襲', legendMarkerType: 'square'},
{  y: 347523, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '人生無極限的PT統計(總分1724538)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 120153,
				            interval: 12015,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人生無極限殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3755},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2141},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2762},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4905},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6130},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6230},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3076},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4353},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 289},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5763},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4328},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4191},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4412},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4784},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39931},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 14172},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9136},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16424},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14272},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10720},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人生無極限CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31079},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32524},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 29886},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25133},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 36722},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 33274},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 43922},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人生無極限強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7148},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3693},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17937},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 21624},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16428},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7731},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 39806},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 36914},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 54922},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 51305},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 66361},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30700},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25361},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13429},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 49586},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4035},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 54094},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 83546},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 37311},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 66502},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 86652},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 72839},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 120153},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35127},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 96952},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 87276},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 95265},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 47527},
]},
],
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

                   text: '人生無極限的PT構成(總分1724538)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 161774, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 232540, name: 'CBC', legendMarkerType: 'square'},
{  y: 1330224, name: '強襲', legendMarkerType: 'circle'},
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
				            text: '風夏的PT統計(總分1702823)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 100239,
				            interval: 10023,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風夏強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19377},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2331},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 34618},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 39411},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 23577},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 26327},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 45650},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 76021},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23643},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 33836},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 43937},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 42554},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 65578},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 64845},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 66485},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 73596},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28629},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 66962},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 91300},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 59683},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 100239},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 27618},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 99386},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 94818},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 44229},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16590},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風夏CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 17170},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 40812},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 90338},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 50376},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風夏殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9698},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7502},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 439},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2092},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15735},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 833},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4139},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10857},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7300},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30070},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10665},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4961},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 562},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7829},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15906},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7987},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6369},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3461},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9131},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 37351},
]},
],
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

                   text: '風夏的PT構成(總分1702823)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1311240, name: '強襲', legendMarkerType: 'triangle'},
{  y: 198696, name: 'CBC', legendMarkerType: 'square'},
{  y: 192887, name: '殲滅', legendMarkerType: 'circle'},
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
				            text: '面白小猫的PT統計(總分1650972)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 139163,
				            interval: 13916,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "面白小猫殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4886},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5015},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3932},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3391},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9647},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10584},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 66},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6752},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1913},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6997},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 29085},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3058},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 15187},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10338},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6979},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7811},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8388},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3130},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11323},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8235},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 30986},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7905},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5382},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15488},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 60},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18608},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14206},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "面白小猫強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1118},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10787},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20556},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1913},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 33920},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 14909},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 42011},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 21311},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 60566},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 27242},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 41067},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 56157},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4672},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 21667},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 37130},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 80457},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 72967},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 56292},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 102827},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 46278},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 96412},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 139163},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 34267},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 67211},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 31050},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "面白小猫CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 12514},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 13069},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 26809},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 21496},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32567},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 36771},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 28523},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 31128},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 40547},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 36246},
]},
],
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

                   text: '面白小猫的PT構成(總分1650972)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 249352, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1121950, name: '強襲', legendMarkerType: 'square'},
{  y: 279670, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Din★丁的PT統計(總分1595723)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 92229,
				            interval: 9222,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Din★丁CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7838},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12300},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15052},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 29596},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 23602},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31532},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 51143},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 85294},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33681},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 51264},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 41524},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Din★丁強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17817},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11536},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10601},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11202},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 33607},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 31146},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 24244},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 27931},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15481},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 38672},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29546},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 58599},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 61727},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30192},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 29459},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 73822},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 59446},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 92229},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 67402},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 32053},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 37179},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 87890},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 66360},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 46063},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Din★丁殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2957},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 14162},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4413},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6313},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6998},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3085},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7478},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9577},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3614},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2917},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 32776},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20717},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11321},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8987},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 11971},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8922},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 43952},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18533},
]},
],
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

                   text: 'Din★丁的PT構成(總分1595723)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 382826, name: 'CBC', legendMarkerType: 'triangle'},
{  y: 994204, name: '強襲', legendMarkerType: 'square'},
{  y: 218693, name: '殲滅', legendMarkerType: 'circle'},
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
				            text: 'Ezio的PT統計(總分1592292)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 95551,
				            interval: 9555,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ezio殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10085},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 409},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5493},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1235},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6005},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1996},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4688},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10675},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 14116},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8092},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27585},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6611},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7938},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1328},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7527},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3165},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 17379},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 402},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9108},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1040},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6613},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9288},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 31},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 37690},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ezio強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7455},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9876},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15462},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3396},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18696},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 39275},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17501},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 41219},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 27423},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 35798},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 38283},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26397},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 53961},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 55557},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 61699},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 66119},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 39311},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 38029},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 59885},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34161},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29993},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 52402},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 95551},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 85922},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 37263},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 40586},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 77068},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 74949},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "EzioCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 27190},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6539},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 65738},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 36652},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 29433},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 45004},
]},
],
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

                   text: 'Ezio的PT構成(總分1592292)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 198499, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1183237, name: '強襲', legendMarkerType: 'square'},
{  y: 210556, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Felicia的PT統計(總分1589179)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 165186,
				            interval: 16518,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Felicia強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9332},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 34050},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 11210},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 24553},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 38271},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6656},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16656},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 32680},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 37723},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 39730},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 39448},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 57467},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18892},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25593},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19655},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 36694},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 51392},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 59511},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 76746},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 52951},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 69597},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 77226},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 122164},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 56333},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14057},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 165186},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 39645},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 35525},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Felicia殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4595},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2053},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6226},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 976},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6626},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3401},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17893},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 823},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4021},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8331},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6653},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32001},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7714},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8864},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 20221},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2223},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7049},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7073},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9140},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9039},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 34766},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3571},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "FeliciaCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8760},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5849},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14894},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 15748},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 16791},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 54935},
]},
],
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

                   text: 'Felicia的PT構成(總分1589179)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1268943, name: '強襲', legendMarkerType: 'triangle'},
{  y: 203259, name: '殲滅', legendMarkerType: 'square'},
{  y: 116977, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿道弗斯的PT統計(總分1563538)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 125150,
				            interval: 12515,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿道弗斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13281},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6598},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6046},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4588},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3494},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 840},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6632},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10884},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3410},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 38858},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5886},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7884},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8229},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8399},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6699},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4252},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8852},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8183},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 29},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9956},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 36835},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9051},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1622},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿道弗斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9881},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 27623},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20851},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16520},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 29407},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 39158},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16310},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 47921},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 53289},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 24567},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 50524},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26065},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21765},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22463},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 28083},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 52303},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25156},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 24273},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28039},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 64783},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 72538},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 39823},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 46003},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 125150},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 72250},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 77936},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 54417},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6417},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿道弗斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22139},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18757},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 19306},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 19383},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28582},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 22200},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 36094},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 35871},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 27183},
]},
],
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

                   text: '阿道弗斯的PT構成(總分1563538)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 210508, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1123515, name: '強襲', legendMarkerType: 'square'},
{  y: 229515, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Jason的PT統計(總分1538577)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 100384,
				            interval: 10038,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jason殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6251},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7309},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10590},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10264},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6354},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5021},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 373},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7288},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37275},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4984},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8101},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2954},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5944},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7542},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9624},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8074},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8268},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7738},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 38739},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21517},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23794},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3383},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10348},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 45146},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jason強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10749},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10254},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 30969},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9325},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 34882},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 38016},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 37795},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 41126},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 38067},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 39391},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 56277},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 18770},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25151},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25521},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 34296},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 70621},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 71459},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 80490},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 99333},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 98112},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7156},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 49496},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40102},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "JasonCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19795},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 21772},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29807},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 18629},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 27754},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 100384},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 56197},
]},
],
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

                   text: 'Jason的PT構成(總分1538577)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 296881, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 967358, name: '強襲', legendMarkerType: 'square'},
{  y: 274338, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'sturtle的PT統計(總分1529576)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 103781,
				            interval: 10378,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "sturtle強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 23473},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10654},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 25639},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2129},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 50647},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 53584},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 31169},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 63853},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 54710},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12952},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 12453},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22500},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28822},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24738},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 75305},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 26938},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 51092},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 23230},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 44917},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 93961},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 52259},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 64356},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 45093},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 93725},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 103781},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "sturtle殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 15178},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5817},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9454},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 12246},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 7059},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7123},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 33584},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6925},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10473},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8441},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7974},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8628},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 9645},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3986},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5083},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 895},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 34840},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 15141},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16051},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17747},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19883},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9559},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "sturtleCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12426},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13620},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 76794},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33495},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 35529},
]},
],
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

                   text: 'sturtle的PT構成(總分1529576)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1091980, name: '強襲', legendMarkerType: 'triangle'},
{  y: 265732, name: '殲滅', legendMarkerType: 'square'},
{  y: 171864, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'yee的PT統計(總分1526200)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 85861,
				            interval: 8586,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "yee強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11894},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 13201},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18166},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 39180},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 34528},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 24827},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19841},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 79529},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 52301},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 53498},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 25807},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20793},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 55537},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 53097},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22709},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 75328},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 40323},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 75589},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 68975},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33366},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 85861},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5842},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 75667},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 47900},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 85827},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 54396},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 57976},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "yeeCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 17, 0), y: 32757},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 34035},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "yee殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 13756},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5608},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4658},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5100},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4488},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6643},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2071},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2384},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10788},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26267},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9785},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24080},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4187},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2401},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 9520},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8782},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9114},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7971},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 36123},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16911},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9247},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7566},
]},
],
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

                   text: 'yee的PT構成(總分1526200)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1231958, name: '強襲', legendMarkerType: 'triangle'},
{  y: 66792, name: 'CBC', legendMarkerType: 'square'},
{  y: 227450, name: '殲滅', legendMarkerType: 'circle'},
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
				            text: '保羅的PT統計(總分1448371)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 96962,
				            interval: 9696,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "保羅殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4703},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5592},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6488},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 11517},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2503},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 12546},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6736},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 6341},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 26854},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7404},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7752},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7975},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14920},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4854},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8408},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 8362},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 15444},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 34313},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 56},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5440},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16468},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9071},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16870},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 10244},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17906},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "保羅強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 15532},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15679},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 14726},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13836},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20787},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 35593},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 37770},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 40875},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 61986},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 79584},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25100},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 25317},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 28760},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 30458},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 96962},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 27151},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 25863},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 40287},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 37789},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 46137},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20226},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 68083},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16133},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 60160},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 84955},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 34307},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "保羅CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13351},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24525},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15931},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 27251},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 37281},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 13086},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 44123},
]},
],
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

                   text: '保羅的PT構成(總分1448371)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 268767, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1004056, name: '強襲', legendMarkerType: 'square'},
{  y: 175548, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '荷荷的PT統計(總分1396084)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 118963,
				            interval: 11896,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "荷荷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8354},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19066},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15847},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13331},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 38652},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 37603},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 52076},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 29798},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 57118},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 19312},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 23401},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31734},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 58937},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47779},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 32849},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 44373},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 118963},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 75744},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 45248},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 107587},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 58487},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 50426},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "荷荷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4764},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2600},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5054},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5911},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2070},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2792},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12018},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2456},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 15588},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 39370},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7734},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6457},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 10337},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7948},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13213},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7822},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7084},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 40593},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10094},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7769},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7166},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4908},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9110},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14144},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 18414},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "荷荷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 18416},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 18849},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21190},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 15152},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 70351},
]},
],
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

                   text: '荷荷的PT構成(總分1396084)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 986685, name: '強襲', legendMarkerType: 'triangle'},
{  y: 265441, name: '殲滅', legendMarkerType: 'square'},
{  y: 143958, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '望月.鳴上嵐的PT統計(總分1389778)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 143404,
				            interval: 14340,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "望月.鳴上嵐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7839},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10789},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 37020},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 40437},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 59551},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 25382},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 39276},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 60626},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 64695},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 37015},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25779},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 32661},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 60340},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 41447},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5571},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 40007},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 30804},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 89373},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 143404},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 48355},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 77056},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "望月.鳴上嵐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5901},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 9101},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5348},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 12111},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 9644},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5828},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6441},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26997},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10369},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13753},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 14231},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 52},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7874},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20031},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2580},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 33477},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6689},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8535},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9064},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3332},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 90},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7900},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17698},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "望月.鳴上嵐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 12887},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10855},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 44639},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20764},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20158},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28916},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 37086},
]},
],
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

                   text: '望月.鳴上嵐的PT構成(總分1389778)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 977427, name: '強襲', legendMarkerType: 'triangle'},
{  y: 237046, name: '殲滅', legendMarkerType: 'square'},
{  y: 175305, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
