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
				
				            maximum: 338779,
				            interval: 33877,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8275},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 21517},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 35809},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 31409},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 28887},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 45911},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 23285},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3979},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2009},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 209257},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 172190},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 149358},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 144243},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22528},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5776},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5330},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 83855},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 149311},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 197286},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 176482},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 215631},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 115928},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 149328},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 240187},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 224516},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 162518},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 217475},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 338779},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11584},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 33153},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 40774},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 29007},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17149},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 61096},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 50342},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 39667},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 43002},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22040},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 41557},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 44903},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 41801},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 30230},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8664},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 82491},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 99008},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 158740},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 49852},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7734},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 65617},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 54444},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 143469},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 133426},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 220071},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 199728},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 149695},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 178224},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 183941},
]},
],
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
				
				            maximum: 5422520,
				            interval: 542252,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8275},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 29792},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 65601},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 97010},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 125897},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 171808},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 195093},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 195095},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 199074},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 201083},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 410340},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 582530},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 731888},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 876131},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 898659},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 904435},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 909765},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 909765},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 993620},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1142931},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1340217},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1516699},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1732330},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1848258},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1997586},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2237773},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2462289},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2624807},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2842282},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3181061},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 11584},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 44737},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 85511},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 114518},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 131667},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 192763},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 243105},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 282772},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 325774},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 347814},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 389371},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 434274},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 476075},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 506305},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 514969},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 597460},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 696468},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 855208},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 905060},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 905110},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 912844},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 978461},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1032905},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1176374},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1309800},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1529871},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1729599},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1879294},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2057518},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2241459},
]},
],
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
				
				            maximum: 228227,
				            interval: 22822,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6604},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 10423},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6606},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 21459},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8698},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 24301},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4229},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3145},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2009},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 134512},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 100166},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 79043},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 34691},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2432},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 87},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5330},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 7636},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 58586},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 103092},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 60870},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 124355},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 67970},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 89794},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 160374},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 116897},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 86944},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 137751},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 228227},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1414},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 11703},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7839},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4964},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4747},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19326},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20170},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9905},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 24684},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17762},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 22614},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17658},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5186},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 30554},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17431},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 55438},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19733},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29455},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 650},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 44451},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 73948},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 104112},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 113758},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 58541},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 89833},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 67789},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10170},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 20305},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 30840},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18570},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 12402},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 36265},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22749},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13707},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16549},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12408},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18918},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 15765},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 19214},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13830},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1928},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 36989},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 65770},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 82930},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 30119},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7734},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 27548},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 39737},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 85361},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 59478},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 99245},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 70651},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 91154},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 47471},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 102954},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1175},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7570},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20201},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8611},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5394},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 16258},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18182},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 62762},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 68435},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 35582},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 96245},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12422},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 72371},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 77494},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 75165},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 95979},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 60844},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 42517},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 44287},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 68399},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 88714},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 55939},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 61380},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 70566},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1145},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2095},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5473},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5505},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7423},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 16055},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1769},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9632},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4877},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6524},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4929},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11214},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6736},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 14948},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 15807},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20372},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8614},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 14057},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13657},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16714},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15319},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40920},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13198},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 496},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3524},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9002},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1339},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14795},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5352},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 874},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 834},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11983},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3589},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34733},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13307},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7674},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5689},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3848},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 13231},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19029},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19633},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 30432},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5441},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15247},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11414},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 18905},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19635},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18344},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 39986},
]},
],
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
				            text: '喵鼠的PT統計(總分404056)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 62747,
				            interval: 6274,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 332},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2579},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 95},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2072},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3213},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1666},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3419},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7003},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6069},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4999},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4755},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 10076},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6622},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14141},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13946},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6618},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4591},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10822},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 52897},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 61299},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 62747},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 20633},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10216},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20545},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 55813},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16888},
]},
],
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

                   text: '喵鼠的PT構成(總分404056)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 36202, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44785, name: '強襲', legendMarkerType: 'square'},
{  y: 323069, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分323086)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 65308,
				            interval: 6530,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 144},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 404},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 260},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 312},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 67},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5348},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4214},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 119},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3685},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1172},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4622},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3613},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3212},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37507},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 55004},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 65308},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27716},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25920},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 30780},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20847},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3403},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 29343},
]},
],
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

                   text: '雪歌的PT構成(總分323086)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 20433, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32746, name: '強襲', legendMarkerType: 'square'},
{  y: 269907, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分291654)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 65910,
				            interval: 6591,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 808},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1040},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7606},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 198},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 559},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1018},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2914},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 703},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 669},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 53967},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 27977},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 27939},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 805},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1616},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 601},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 511},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 439},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24593},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 65910},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 31936},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7289},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13531},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12693},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 496},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2059},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3777},
]},
],
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

                   text: '嘎喵的PT構成(總分291654)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 275868, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 6332, name: '強襲', legendMarkerType: 'square'},
{  y: 9454, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分287456)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 74083,
				            interval: 7408,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7386},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3707},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2097},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 18182},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9865},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 74083},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 20726},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 64426},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 32901},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8782},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15804},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2464},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10011},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3731},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11920},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1335},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
],
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

                   text: '土土昕的PT構成(總分287456)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 17022, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12475, name: '強襲', legendMarkerType: 'square'},
{  y: 257959, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分283697)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41241,
				            interval: 4124,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8451},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16029},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9202},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 935},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3339},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 27006},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 34359},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 41241},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12422},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10038},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 26429},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 32301},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13131},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 21818},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 26309},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 35},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 214},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 398},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
],
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

                   text: '葬月的PT構成(總分283697)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 687, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24480, name: '強襲', legendMarkerType: 'square'},
{  y: 258530, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分202824)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37528,
				            interval: 3752,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 15},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1808},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 716},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2067},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6300},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37528},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14567},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1708},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2376},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 25183},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 24516},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4515},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7466},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9616},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6143},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11387},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 754},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1855},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7092},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7642},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8872},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7151},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 12716},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 752},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 41},
]},
],
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

                   text: '依司瑪耳的PT構成(總分202824)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 155949, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 46082, name: '強襲', legendMarkerType: 'square'},
{  y: 793, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分201418)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34428,
				            interval: 3442,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 215},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 838},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 149},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4407},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2145},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5106},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1884},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 147},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5446},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28913},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19391},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6065},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6133},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6837},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2769},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14824},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6827},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 24720},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 34428},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 562},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3497},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4071},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4327},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5494},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1182},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5340},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5659},
]},
],
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

                   text: '赤雲天的PT構成(總分201418)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 171286, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17951, name: '強襲', legendMarkerType: 'square'},
{  y: 12181, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分184037)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31900,
				            interval: 3190,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 32},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3388},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2455},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 910},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 239},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 26078},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2064},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31900},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3381},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 10931},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 26778},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5507},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 16122},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1567},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 18642},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 923},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 70},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2707},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13106},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 547},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 735},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2513},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3216},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4458},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1846},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3922},
]},
],
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

                   text: '阿拉的PT構成(總分184037)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 166800, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13315, name: '強襲', legendMarkerType: 'square'},
{  y: 3922, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分152268)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32716,
				            interval: 3271,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 305},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 263},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 525},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 32716},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11025},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2840},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1784},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1974},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19964},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17169},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 30068},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5509},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1575},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7809},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 551},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 604},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3589},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4724},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8080},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1175},
]},
],
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

                   text: '寇內爾緹的PT構成(總分152268)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 133545, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17548, name: '強襲', legendMarkerType: 'square'},
{  y: 1175, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分146929)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38264,
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
                                    name: "魔法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1011},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3730},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3560},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 629},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1959},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 248},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 344},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1829},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 15173},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 719},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 38264},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 7906},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2656},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4765},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1962},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3255},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7691},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23966},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 871},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2258},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1423},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4071},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6257},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6641},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5623},
]},
],
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

                   text: '魔法的PT構成(總分146929)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 119785, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 27144, name: '強襲', legendMarkerType: 'square'},
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
				            text: '鬼魅魍魎的PT統計(總分104779)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25231,
				            interval: 2523,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1796},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2276},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4293},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7078},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1418},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 943},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3340},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1789},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3420},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4000},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1686},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1836},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23820},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25231},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14202},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2378},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2460},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1731},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1082},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分104779)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 97128, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 6569, name: '強襲', legendMarkerType: 'square'},
{  y: 1082, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分104226)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24944,
				            interval: 2494,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2045},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 792},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 268},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1421},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1382},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18880},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24944},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12823},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14729},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5012},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4794},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11029},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3361},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1839},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 886},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分104226)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 101501, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2725, name: '強襲', legendMarkerType: 'square'},
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
				            text: '冰紅茶的PT統計(總分101886)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32509,
				            interval: 3250,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 191},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1617},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 245},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 327},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1385},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3072},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 294},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 378},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 512},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3947},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 43},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 15377},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25687},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 32509},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 952},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3016},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 874},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5689},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1577},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2870},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1247},
]},
],
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

                   text: '冰紅茶的PT構成(總分101886)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 85661, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12257, name: '強襲', legendMarkerType: 'square'},
{  y: 3968, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分94080)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30694,
				            interval: 3069,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 959},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1823},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 291},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9097},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8336},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 992},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10466},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7667},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13705},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30694},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 834},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1259},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5114},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2795},
]},
],
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

                   text: '亞歷的PT構成(總分94080)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 84078, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10002, name: '強襲', legendMarkerType: 'square'},
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
				            text: '雷克斯的PT統計(總分93620)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12595,
				            interval: 1259,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2009},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2894},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6328},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5148},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6150},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6901},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3972},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5489},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1989},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4575},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12595},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8490},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3973},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3407},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 7522},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1557},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5180},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5441},
]},
],
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

                   text: '雷克斯的PT構成(總分93620)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 66540, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23107, name: '強襲', legendMarkerType: 'square'},
{  y: 3973, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分91148)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14902,
				            interval: 1490,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5930},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4225},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1697},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7485},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3145},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2814},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1989},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5330},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10428},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7852},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6167},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5704},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14902},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6415},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7065},
]},
],
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

                   text: '冰的PT構成(總分91148)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 77668, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13480, name: '強襲', legendMarkerType: 'square'},
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
				            text: '藏月的PT統計(總分77348)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11471,
				            interval: 1147,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2267},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 180},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 599},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5203},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2284},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3049},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5322},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1393},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 69},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5828},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5379},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4270},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 11471},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6569},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6108},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2977},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3848},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2709},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7755},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 49},
]},
],
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

                   text: '藏月的PT構成(總分77348)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 60010, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17338, name: '強襲', legendMarkerType: 'square'},
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
				            text: '阿榮的PT統計(總分36549)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13685,
				            interval: 1368,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 13, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1897},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 426},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13685},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 11072},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 9407},
]},
],
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

                   text: '阿榮的PT構成(總分36549)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 16070, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20479, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '大壞蛋的PT統計(總分267557)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56544,
				            interval: 5654,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大壞蛋CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4747},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9905},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 18945},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 17658},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15206},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 48594},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 19733},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28280},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 47322},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 56544},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大壞蛋殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 449},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 32},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 92},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
],
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

                   text: '大壞蛋的PT構成(總分267557)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 623, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 266934, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '子媗的PT統計(總分260170)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54361,
				            interval: 5436,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "子媗殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7697},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6635},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9695},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2648},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 751},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 154},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1879},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9285},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5013},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16814},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 26028},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23453},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 54361},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 32061},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20295},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5300},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16628},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "子媗強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2095},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3347},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2618},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11490},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1879},
]},
],
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

                   text: '子媗的PT構成(總分260170)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 238741, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 21429, name: '強襲', legendMarkerType: 'square'},
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
				            text: '項逸絕的PT統計(總分235565)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 80714,
				            interval: 8071,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "項逸絕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 98},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3315},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1229},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4731},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2406},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5360},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16526},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "項逸絕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15319},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25392},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "項逸絕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6497},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 73948},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 80714},
]},
],
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

                   text: '項逸絕的PT構成(總分235565)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 33695, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 40711, name: '強襲', legendMarkerType: 'square'},
{  y: 161159, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Hammett的PT統計(總分207300)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 89833,
				            interval: 8983,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Hammett殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 132},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 160},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 733},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 93},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 151},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 19977},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9598},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "HammettCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 85478},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 89833},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Hammett強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1145},
]},
],
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

                   text: 'Hammett的PT構成(總分207300)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 30844, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1145, name: '強襲', legendMarkerType: 'square'},
{  y: 175311, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '巴特·莫里斯的PT統計(總分201171)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29455,
				            interval: 2945,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "巴特·莫里斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 247},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 376},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 146},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 905},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2191},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 814},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1219},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8367},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "巴特·莫里斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4645},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3381},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2838},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11497},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20170},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 17762},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 16722},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 15348},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12563},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29455},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 29110},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23398},
]},
],
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

                   text: '巴特·莫里斯的PT構成(總分201171)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 14282, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 186889, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '偷得半日閒的PT統計(總分187790)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12627,
				            interval: 1262,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "偷得半日閒CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11245},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "偷得半日閒殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5863},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9392},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2603},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12627},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4348},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7521},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4872},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4737},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4573},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10076},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 11380},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8567},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6103},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7506},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6803},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11667},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3898},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5213},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8379},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4556},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3939},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "偷得半日閒強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5186},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4877},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4929},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4835},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4873},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7222},
]},
],
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

                   text: '偷得半日閒的PT構成(總分187790)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 144623, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 31922, name: '強襲', legendMarkerType: 'square'},
{  y: 11245, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '由不得你不信的PT統計(總分154134)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31994,
				            interval: 3199,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "由不得你不信殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4354},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 246},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5795},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5091},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2373},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4270},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7380},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 31994},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1467},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 872},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1127},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12172},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25731},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5899},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16144},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8749},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14965},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "由不得你不信強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5505},
]},
],
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

                   text: '由不得你不信的PT構成(總分154134)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 148629, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 5505, name: '強襲', legendMarkerType: 'square'},
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
				            text: '幼實的PT統計(總分104366)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17434,
				            interval: 1743,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幼實殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9813},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 823},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4460},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4620},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3765},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4436},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5812},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2079},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10621},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17434},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7099},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12878},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6271},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5357},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幼實強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4446},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 570},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3882},
]},
],
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

                   text: '幼實的PT構成(總分104366)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 95468, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8898, name: '強襲', legendMarkerType: 'square'},
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
				            text: '風之痕的PT統計(總分101408)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15341,
				            interval: 1534,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風之痕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4113},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1441},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3011},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 587},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4280},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1694},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1875},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4574},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 4808},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3663},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5052},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2103},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3744},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 48},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風之痕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15341},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 11219},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風之痕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5473},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7107},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5190},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6772},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9311},
]},
],
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

                   text: '風之痕的PT構成(總分101408)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 40995, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33853, name: '強襲', legendMarkerType: 'square'},
{  y: 26560, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'mjollnir的PT統計(總分98799)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23032,
				            interval: 2303,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "mjollnir殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1856},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 8967},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1920},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 5695},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5043},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2083},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2997},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23032},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12284},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4668},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4895},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2921},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2923},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "mjollnir強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3458},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3741},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3689},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3759},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "mjollnirCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4868},
]},
],
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

                   text: 'mjollnir的PT構成(總分98799)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 79284, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14647, name: '強襲', legendMarkerType: 'square'},
{  y: 4868, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'JoJo的PT統計(總分97949)'
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
                                    name: "JoJo殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 122},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1911},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1048},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1997},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3824},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1933},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 92},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3953},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1421},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7167},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 9975},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5024},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17377},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7177},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5746},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5254},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7711},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "JoJo強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3925},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 8082},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "JoJoCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1414},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 561},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2126},
]},
],
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

                   text: 'JoJo的PT構成(總分97949)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 81841, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12007, name: '強襲', legendMarkerType: 'square'},
{  y: 4101, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '辰希的PT統計(總分95031)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12421,
				            interval: 1242,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "辰希殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4357},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2326},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4032},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3608},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5295},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6916},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7360},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3141},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6791},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5532},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7254},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12421},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "辰希強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2405},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1769},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6024},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6736},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2345},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 3573},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3146},
]},
],
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

                   text: '辰希的PT構成(總分95031)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 69033, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 25998, name: '強襲', legendMarkerType: 'square'},
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
				            text: '羅格南的PT統計(總分76150)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 9275,
				            interval: 927,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅格南殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1471},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2483},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4014},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2503},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3811},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 4162},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9275},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7734},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4736},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4976},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5997},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅格南強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5954},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7403},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅格南CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5739},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5892},
]},
],
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

                   text: '羅格南的PT構成(總分76150)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 51162, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13357, name: '強襲', legendMarkerType: 'square'},
{  y: 11631, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '白龍的PT統計(總分66532)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 7829,
				            interval: 782,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2503},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7003},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 404},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 275},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 896},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2135},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3935},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6212},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 4781},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 452},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 425},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 280},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6801},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3679},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4076},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6690},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 662},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7829},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6844},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 650},
]},
],
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

                   text: '白龍的PT構成(總分66532)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 39781, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11428, name: '強襲', legendMarkerType: 'square'},
{  y: 15323, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '福蘭特的PT統計(總分51179)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13649,
				            interval: 1364,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "福蘭特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2686},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1025},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11711},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 158},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8355},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3677},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "福蘭特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9898},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13649},
]},
],
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

                   text: '福蘭特的PT構成(總分51179)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 27632, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23547, name: '強襲', legendMarkerType: 'square'},
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
				            text: '醇癡茶的PT統計(總分25489)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12536,
				            interval: 1253,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "醇癡茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12536},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "醇癡茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 162},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 63},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 149},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 53},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 33},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 53},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 89},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1739},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1363},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1819},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1883},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 84},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 38},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "醇癡茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5186},
]},
],
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

                   text: '醇癡茶的PT構成(總分25489)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 7767, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12536, name: '強襲', legendMarkerType: 'square'},
{  y: 5186, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '曉耕作的PT統計(總分10869)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 5677,
				            interval: 567,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "曉耕作CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4458},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "曉耕作殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5677},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 734},
]},
],
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

                   text: '曉耕作的PT構成(總分10869)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 6411, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4458, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart35.render();
}
