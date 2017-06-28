	window.onload = function () {

		            var chart = new CanvasJS.Chart('chartContainer',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: '每分鐘團隊PT'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				        				            maximum: 1000000,
				            interval: 100000,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 169387},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 182076},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 180907},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 227800},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 203607},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 198937},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 233557},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 215461},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 205092},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 283948},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 290040},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 319553},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 326455},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 325330},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 333899},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 338137},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 279277},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 409635},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 374160},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 554311},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 515414},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 655971},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 500821},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 576417},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 452173},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 521494},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 523125},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 614853},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 479202},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 468850},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 102301},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 138071},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 182767},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 194098},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 258581},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 235524},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 255407},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 282916},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 351785},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 399969},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 304963},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 342114},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 462990},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 423235},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 367541},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 462066},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 552958},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 346865},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 416934},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 279169},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 375321},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 279267},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 381902},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 415077},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 304291},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 362353},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 282765},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 331173},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 335841},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 272484},
]},

			                            ],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          chart.render();
                                        }
                                      }
                                    });
                            chart.render();
                            


		            var chart2 = new CanvasJS.Chart('chartContainer2',
		            {
			            zoomEnabled: false,
                                    animationEnabled: true,
			            title:{
				            text: 'PT成長趨勢'
			            },
			            axisY2:{
				            valueFormatString:'0.0 bn',
				
				            maximum: 15000000,
				            interval: 1000000,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 169387},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 182076},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 180907},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 227800},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 203607},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 198937},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 233557},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 215461},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 205092},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 283948},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 290040},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 319553},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 326455},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 325330},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 333899},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 338137},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 279277},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 409635},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 374160},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 554311},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 515414},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 655971},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 500821},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 576417},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 452173},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 521494},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 523125},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 614853},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 479202},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 468850},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 102301},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 138071},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 182767},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 194098},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 258581},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 235524},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 255407},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 282916},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 351785},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 399969},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 304963},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 342114},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 462990},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 423235},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 367541},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 462066},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 552958},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 346865},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 416934},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 279169},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 375321},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 279267},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 381902},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 415077},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 304291},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 362353},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 282765},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 331173},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 335841},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 272484},
]},

			                            ],
                                      legend: {
                                        cursor:'pointer',
                                        itemclick : function(e) {
                                          if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                          e.dataSeries.visible = false;
                                          }
                                          else {
                                            e.dataSeries.visible = true;
                                          }
                                          chart2.render();
                                        }
                                      }
                                    });
                            chart2.render();
                }
                            
