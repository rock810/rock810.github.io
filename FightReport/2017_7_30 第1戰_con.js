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
				
				            maximum: 237184,
				            interval: 23718,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12794},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5556},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 17961},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15721},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 23824},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14431},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10389},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 30532},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 43881},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 34356},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 48876},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 42371},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 86754},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 88026},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 74538},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 96859},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 123859},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 87565},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 68920},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 89442},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 54461},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 29719},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 61415},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 61778},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 93714},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 204413},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 206405},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 137577},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 172589},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 130816},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13853},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 22153},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 16630},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 28795},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 23367},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 30800},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 81439},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 44929},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 40714},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 59232},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 41018},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 129544},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 113338},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 132920},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 54831},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 107537},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 53299},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 152904},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 101881},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 131259},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 144337},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 192441},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 133061},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 119355},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 173617},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 122020},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 24303},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 237184},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 151106},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 132786},
]},
],
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
				
				            maximum: 4980195,
				            interval: 498019,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12794},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 18350},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 36311},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 52032},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 75856},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 90287},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 100676},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 131208},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 175089},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 209445},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 258321},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 300692},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 387446},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 475472},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 550010},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 646869},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 770728},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 858293},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 927213},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1016655},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 1071116},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1100835},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1162250},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1224028},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1317742},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1522155},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1728560},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1866137},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2038726},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2169542},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13853},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 36006},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 52636},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 81431},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 104798},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 135598},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 217037},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 261966},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 302680},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 361912},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 402930},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 532474},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 645812},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 778732},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 833563},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 941100},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 994399},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1147303},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1249184},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1380443},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 1524780},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1717221},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1850282},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1969637},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2143254},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2265274},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2289577},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2526761},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2677867},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2810653},
]},
],
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
				
				            maximum: 187392,
				            interval: 18739,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5154},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2093},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2500},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2513},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2630},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9629},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5709},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6658},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6548},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 653},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 825},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 549},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6298},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17633},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19449},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19589},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3634},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3089},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8414},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11771},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9792},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8915},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4652},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 28597},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 28271},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12794},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3499},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10547},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10567},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 18591},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11237},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5812},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 25111},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 25966},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11911},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 27149},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 25124},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 45072},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 52413},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 61158},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 53596},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 65565},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 34428},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 41852},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 42655},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 39713},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 27764},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 48207},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 30677},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 47112},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 91708},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 77445},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 84061},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 84184},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 71540},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9505},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 18124},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6555},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 22393},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8893},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15376},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 40778},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17312},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 33098},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 31723},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 31060},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 59129},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 73509},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 108456},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 48801},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 82602},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 25322},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 25478},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 55182},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 68640},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 98629},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 57885},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 88482},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 81373},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 120954},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 71627},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16002},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 47801},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 50714},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 52706},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2057},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7414},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3140},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 694},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2064},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2791},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8286},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16736},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15069},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10699},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 41029},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 34788},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13380},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 42714},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 51996},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 35504},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7619},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 27198},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11114},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1955},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10119},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 22687},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 34831},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 102913},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 120045},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 48864},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 59808},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 31005},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 515},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2882},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8279},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5448},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1556},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7616},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1123},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8737},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2230},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19451},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4709},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3959},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18616},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1974},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6381},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7067},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15962},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10082},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6390},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14694},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4310},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5104},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1991},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3841},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10540},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3833},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4029},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7193},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6402},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6195},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15424},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 35213},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 26061},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 26386},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1221},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 68185},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 20378},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 24464},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1321},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20976},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9361},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 125452},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 40318},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 62619},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 38641},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 118594},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 34497},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 31592},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 37969},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 46083},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3197},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 187392},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 96551},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 69540},
]},
],
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
				            text: '土土昕的PT統計(總分295782)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 187392,
				            interval: 18739,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 555},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 167},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1009},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2308},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1555},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4784},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1852},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 187392},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 94580},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1556},
]},
],
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
var PlayerChart2 = new CanvasJS.Chart('PlayerChartContainer2',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '喵鼠的PT統計(總分294705)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 68185,
				            interval: 6818,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3833},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2910},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1669},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15424},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15914},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 68185},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 20378},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 62619},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 35015},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 46083},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8356},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 102},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 399},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 205},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9030},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4558},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 25},
]},
],
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
var PlayerChart3 = new CanvasJS.Chart('PlayerChartContainer3',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '羽龍的PT統計(總分282362)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 125452,
				            interval: 12545,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2726},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3465},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3384},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 125452},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 40318},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 34938},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 55873},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1851},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 762},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 35},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 593},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 438},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 259},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12268},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
],
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
var PlayerChart4 = new CanvasJS.Chart('PlayerChartContainer4',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '嘎喵的PT統計(總分247189)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32844,
				            interval: 3284,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1442},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 576},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 548},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 926},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2586},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 27809},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14638},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 32844},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21923},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 590},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12027},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13031},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8659},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8228},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1541},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13783},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16148},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11264},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14336},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14880},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3760},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4235},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 979},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1869},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3959},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 956},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4585},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4310},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3725},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1030},
]},
],
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
var PlayerChart5 = new CanvasJS.Chart('PlayerChartContainer5',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雪歌的PT統計(總分208401)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 118594,
				            interval: 11859,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 49},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 193},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 740},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 130},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 22},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2339},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2691},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2230},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6330},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1561},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1751},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 19299},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 26061},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 26386},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 118594},
]},
],
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
var PlayerChart6 = new CanvasJS.Chart('PlayerChartContainer6',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '葬月的PT統計(總分198019)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24684,
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
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 789},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 471},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 392},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3870},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 489},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1010},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9604},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15114},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8750},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7127},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7752},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24224},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12963},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3140},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23516},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13536},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24684},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16629},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2029},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5302},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2418},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5204},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1527},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1292},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6183},
]},
],
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
var PlayerChart7 = new CanvasJS.Chart('PlayerChartContainer7',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '雷克斯的PT統計(總分191548)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34081,
				            interval: 3408,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4983},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 606},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1368},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 768},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 514},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1684},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9354},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6003},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 662},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2367},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5178},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19868},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 34081},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22465},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 86},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9647},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2816},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13851},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18526},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5514},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3364},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6241},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2475},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4455},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9361},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5311},
]},
],
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
var PlayerChart8 = new CanvasJS.Chart('PlayerChartContainer8',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '魔法的PT統計(總分184228)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43310,
				            interval: 4331,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 131},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 798},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 37},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 139},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3527},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1148},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 106},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2305},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 554},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8502},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 43310},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 22965},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 406},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 842},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13514},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18094},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 42637},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5654},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 23},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5316},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1272},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4709},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1974},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1247},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2574},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 539},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 959},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 946},
]},
],
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
var PlayerChart9 = new CanvasJS.Chart('PlayerChartContainer9',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '亞歷的PT統計(總分142643)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31127,
				            interval: 3112,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2458},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5149},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7951},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1073},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 43},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4465},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 291},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14950},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13509},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4616},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19214},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4846},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 587},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 31127},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1615},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13309},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1574},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3626},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3197},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 3909},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5134},
]},
],
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
var PlayerChart10 = new CanvasJS.Chart('PlayerChartContainer10',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '寇內爾緹的PT統計(總分134744)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29182,
				            interval: 2918,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 17},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 398},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 422},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1716},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 979},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2067},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2344},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 29182},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17710},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10413},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 993},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12161},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15523},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4223},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17621},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6153},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 225},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1305},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1631},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4676},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 515},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1334},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1366},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 580},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1186},
]},
],
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
var PlayerChart11 = new CanvasJS.Chart('PlayerChartContainer11',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '鬼魅魍魎的PT統計(總分121580)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27878,
				            interval: 2787,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13771},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1379},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1168},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 178},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1055},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1720},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 38},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1292},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19350},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8625},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 27878},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21533},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1046},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 887},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 346},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1237},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20030},
]},
],
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
var PlayerChart12 = new CanvasJS.Chart('PlayerChartContainer12',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿拉的PT統計(總分118764)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26513,
				            interval: 2651,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 974},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 748},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 241},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 214},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 38},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2740},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 20},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 61},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 848},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 22},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 347},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3871},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7481},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1249},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1185},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 540},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 875},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25427},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 26513},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9186},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8830},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6852},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6838},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1355},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1456},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1292},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3926},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2343},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1321},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1971},
]},
],
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
var PlayerChart13 = new CanvasJS.Chart('PlayerChartContainer13',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '有生之蓮解鋒鏑的PT統計(總分98547)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13714,
				            interval: 1371,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 17, 0), y: 257},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 419},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1119},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 51},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 125},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4204},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2394},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 42},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11079},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10496},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12333},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2317},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1166},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1618},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2509},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8315},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3234},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 572},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1044},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13251},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7067},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13714},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1221},
]},
],
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
var PlayerChart14 = new CanvasJS.Chart('PlayerChartContainer14',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '冰的PT統計(總分88827)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11108,
				            interval: 1110,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4103},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8182},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8229},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1156},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5376},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5426},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3781},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2138},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5297},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6125},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5107},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11108},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5932},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5672},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5448},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5747},
]},
],
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
var PlayerChart15 = new CanvasJS.Chart('PlayerChartContainer15',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '阿榮的PT統計(總分83956)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23434,
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
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 224},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 36},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 716},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 41},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2524},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1100},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 502},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4518},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6654},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6416},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3095},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 842},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1395},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6987},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8737},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2418},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1991},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23434},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12326},
]},
],
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
var PlayerChart16 = new CanvasJS.Chart('PlayerChartContainer16',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '秋風冷月的PT統計(總分65862)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34497,
				            interval: 3449,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 37, 0), y: 34497},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19266},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3031},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3970},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 74},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 254},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1389},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 21},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 21},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 686},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2084},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 551},
]},
],
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
var PlayerChart17 = new CanvasJS.Chart('PlayerChartContainer17',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '依司瑪耳的PT統計(總分53496)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11109,
				            interval: 1110,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7669},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6204},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4628},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8016},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7700},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1338},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3664},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2975},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11109},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 38, 0), y: 149},
]},
],
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
var PlayerChart18 = new CanvasJS.Chart('PlayerChartContainer18',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '煌羽辰的PT統計(總分326448)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45965,
				            interval: 4596,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煌羽辰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3205},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3362},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3487},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5598},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煌羽辰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3642},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1803},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3685},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4326},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10684},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2310},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6093},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 758},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 135},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16988},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20929},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 25007},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 20447},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4759},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11358},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6035},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4677},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24386},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 32829},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 45965},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 30605},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 28128},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煌羽辰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1915},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3332},
]},
],
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
var PlayerChart19 = new CanvasJS.Chart('PlayerChartContainer19',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '愛馬仕的PT統計(總分298352)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47007,
				            interval: 4700,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "愛馬仕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1348},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16736},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14652},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13141},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 41391},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23100},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23866},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11114},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 34831},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 45215},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 47007},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14627},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "愛馬仕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 66},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 30},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2216},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5348},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3664},
]},
],
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
var PlayerChart20 = new CanvasJS.Chart('PlayerChartContainer20',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '小蛇蛇的PT統計(總分200966)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 57698,
				            interval: 5769,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小蛇蛇殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 120},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 279},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 15},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 29},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 29},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 224},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 554},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 533},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 50},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 26},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小蛇蛇強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2233},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小蛇蛇CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2057},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1225},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 27888},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 21206},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28896},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 35504},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20139},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 57698},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2218},
]},
],
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
var PlayerChart21 = new CanvasJS.Chart('PlayerChartContainer21',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '賽莉絲的PT統計(總分192595)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 73038,
				            interval: 7303,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽莉絲殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 314},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2154},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2773},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽莉絲CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1612},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 73038},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 42421},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 41839},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16378},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽莉絲強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12046},
]},
],
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
var PlayerChart22 = new CanvasJS.Chart('PlayerChartContainer22',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'ピーチン的PT統計(總分138274)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18278,
				            interval: 1827,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ピーチン殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2999},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4247},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4943},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2476},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8486},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11524},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18278},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 220},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6978},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12804},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16964},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7724},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13734},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2034},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ピーチン強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 516},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4591},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5791},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5902},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3407},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4652},
]},
],
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
var PlayerChart23 = new CanvasJS.Chart('PlayerChartContainer23',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '悠利葉的PT統計(總分123876)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11594,
				            interval: 1159,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠利葉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5195},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3554},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3190},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1816},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3063},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4523},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3847},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3279},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4768},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11594},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5038},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1234},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9767},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5300},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4024},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5333},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4968},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4261},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6608},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠利葉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2824},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5406},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5193},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8727},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7079},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "悠利葉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3268},
]},
],
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
var PlayerChart24 = new CanvasJS.Chart('PlayerChartContainer24',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '克里斯的PT統計(總分118717)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19902,
				            interval: 1990,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克里斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3309},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4826},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3177},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10094},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克里斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8424},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4155},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9111},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1818},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5264},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19902},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15116},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14584},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4105},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3127},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 2494},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2251},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1807},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5153},
]},
],
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
var PlayerChart25 = new CanvasJS.Chart('PlayerChartContainer25',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '風隨行的PT統計(總分118169)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13338,
				            interval: 1333,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風隨行強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2330},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2513},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2630},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4505},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3634},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3340},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2940},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風隨行殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 200},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 480},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4206},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1389},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 947},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 18},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1918},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3661},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 57},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3654},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 435},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7704},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2706},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1004},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3329},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9150},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1536},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5275},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3871},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 18},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 489},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10025},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 65},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6882},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13338},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風隨行CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 694},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1323},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4225},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7654},
]},
],
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
var PlayerChart26 = new CanvasJS.Chart('PlayerChartContainer26',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '愛利希雅的PT統計(總分113399)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13286,
				            interval: 1328,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "愛利希雅殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7645},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2011},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1736},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5509},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2600},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2199},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4399},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6487},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7709},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5218},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10168},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13286},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1678},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2863},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1730},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5224},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11328},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "愛利希雅強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5241},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4752},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5734},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5882},
]},
],
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
var PlayerChart27 = new CanvasJS.Chart('PlayerChartContainer27',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '大杯熱美式的PT統計(總分102347)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20349,
				            interval: 2034,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大杯熱美式殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3691},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1066},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 292},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 302},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4199},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2564},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 937},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5187},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4544},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4277},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5117},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14375},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 104},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20349},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 886},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5369},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1029},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5669},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2737},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4435},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2210},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大杯熱美式強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2093},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4223},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3453},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3239},
]},
],
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
var PlayerChart28 = new CanvasJS.Chart('PlayerChartContainer28',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Holk的PT統計(總分89929)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 8655,
				            interval: 865,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Holk殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 54},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1068},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1328},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 300},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1556},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 40},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 745},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 701},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4946},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8195},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8444},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6553},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8583},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3094},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5658},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Holk強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 653},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 825},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 477},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1026},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3089},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8414},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8655},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3181},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3117},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "HolkCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 761},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4351},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1955},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 2079},
]},
],
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
var PlayerChart29 = new CanvasJS.Chart('PlayerChartContainer29',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'Sucrose的PT統計(總分86206)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13582,
				            interval: 1358,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Sucrose殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2001},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 660},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2546},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2098},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3006},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1695},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3778},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2298},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1872},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 214},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 520},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5528},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 42},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1978},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1814},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 47},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 42},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5537},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2759},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5261},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Sucrose強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1230},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3968},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1352},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1137},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "SucroseCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6066},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13582},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12619},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2548},
]},
],
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
var PlayerChart30 = new CanvasJS.Chart('PlayerChartContainer30',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '德小塔的PT統計(總分78778)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16744,
				            interval: 1674,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "德小塔殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12208},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1902},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5022},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11423},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5147},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16744},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7977},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "德小塔CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8040},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10315},
]},
],
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
var PlayerChart31 = new CanvasJS.Chart('PlayerChartContainer31',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '哥吉拉摸摸醬的PT統計(總分70709)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10142,
				            interval: 1014,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哥吉拉摸摸醬殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2871},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 491},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 234},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2718},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 549},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 362},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1447},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 1908},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5428},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10142},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5450},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7243},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5666},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3999},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7720},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哥吉拉摸摸醬強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 30, 0), y: 549},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1070},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 607},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4375},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7406},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哥吉拉摸摸醬CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 417},
]},
],
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
var PlayerChart32 = new CanvasJS.Chart('PlayerChartContainer32',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '拉麵中毒者XD的PT統計(總分61145)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10354,
				            interval: 1035,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "拉麵中毒者XD殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4877},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 973},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6855},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4080},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4571},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1260},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 41},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4194},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10354},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8270},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4902},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8268},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "拉麵中毒者XD強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2500},
]},
],
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
var PlayerChart33 = new CanvasJS.Chart('PlayerChartContainer33',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'MC的PT統計(總分49632)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 9087,
				            interval: 908,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "MC殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 47},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 142},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 575},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 845},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1671},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5013},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1468},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4974},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1767},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5216},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3716},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1970},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "MCCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2064},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2791},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8286},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9087},
]},
],
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
}
