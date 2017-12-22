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
				
				            maximum: 1838766,
				            interval: 183876,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 121747},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 161372},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 145440},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 185363},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 245521},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 546410},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 657854},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 482057},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 472896},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 447664},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 559815},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 483112},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 522361},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 397141},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 386202},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 680954},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 663688},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 591596},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 657837},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 754837},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 748034},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 934053},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1136835},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 1129106},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 1260621},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 1454460},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1207312},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1076995},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 1492803},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 1838766},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 112563},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 153298},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 174590},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 294687},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 661990},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 646844},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 474402},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 353214},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 532576},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 402924},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 663406},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 931995},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 674249},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 747407},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 931098},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 691201},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 941730},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 899750},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 789309},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 633647},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 795024},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 699070},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 638152},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 730166},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 583137},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 1214738},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1118091},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1315405},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 1046298},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 538371},
]},
],
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
				
				            maximum: 41832184,
				            interval: 4183218,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 121747},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 283119},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 428559},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 613922},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 859443},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1405853},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 2063707},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 2545764},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 3018660},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 3466324},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 4026139},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 4509251},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 5031612},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 5428753},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 5814955},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 6495909},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 7159597},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 7751193},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 8409030},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 9163867},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 9911901},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 10845954},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 11982789},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 13111895},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 14372516},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 15826976},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 17034288},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 18111283},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 19604086},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 21442852},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 112563},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 265861},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 440451},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 735138},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1397128},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 2043972},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 2518374},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 2871588},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 3404164},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 3807088},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 4470494},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 5402489},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 6076738},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 6824145},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 7755243},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 8446444},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 9388174},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 10287924},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 11077233},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 11710880},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 12505904},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 13204974},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 13843126},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 14573292},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 15156429},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 16371167},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 17489258},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 18804663},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 19850961},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 20389332},
]},
],
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
				
				            maximum: 1751178,
				            interval: 175117,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 112499},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 137393},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 125809},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 163827},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 214951},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 493425},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 619823},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 425173},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 403657},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 421865},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 519520},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 454031},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 487005},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 349919},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 367520},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 637816},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 615319},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 536612},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 599686},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 652613},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 690383},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 891524},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1056019},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 1066136},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 1177063},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 1401675},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1139233},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1037957},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 1401273},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 1751178},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 9855},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 8824},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 19086},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 10249},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 35695},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 11014},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 25411},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 19844},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 11790},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 23420},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 37778},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 52751},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 8326},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 11955},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 26213},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8188},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 28979},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 30879},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 14564},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 24078},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 43058},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 35530},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 97120},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 100045},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 128598},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 212712},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 568288},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 592129},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 427437},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 301426},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 461203},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 379320},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 552116},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 795727},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 626880},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 599496},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 771343},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 629144},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 823334},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 834691},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 586870},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 538225},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 666699},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 610243},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 570977},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 623454},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 528845},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 1140182},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1018579},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1234517},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 984790},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 512741},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 28068},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 17130},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 30815},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 44819},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 22693},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 8675},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 22148},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 21704},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 8696},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 26393},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 59137},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 12518},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 35548},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 77232},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 9727},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 69096},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 49937},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 62873},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 42258},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 81951},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 28059},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 24462},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 39808},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 17959},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 48409},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 38591},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 11447},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 7257},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 9248},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 14124},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 19631},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 12712},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 30570},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 33899},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 27782},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 21189},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 58225},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 25799},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 14884},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 29081},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 35356},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 27378},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 18682},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 43138},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 36579},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 31564},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 20373},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 49473},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 49325},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 30574},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 54603},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 54782},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 54579},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 21906},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 53515},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 14960},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 48472},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 52058},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 15443},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 25185},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 28862},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 51160},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 48883},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 32022},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 38290},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 29640},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 49669},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 14908},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 84897},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 77131},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 34851},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 112363},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 82523},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 52330},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 49300},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 15122},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 139566},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 53164},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 46374},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 60768},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 42713},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 66904},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 54292},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 56597},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 51103},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 42297},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 50061},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 18373},
]},
],
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
				            text: '阿拉的PT統計(總分3219822)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 295180,
				            interval: 29518,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 9413},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 16679},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 21967},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 52306},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 118076},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 45573},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 93781},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 23989},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 64889},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 50078},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 38886},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 51512},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 36341},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 15730},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 149716},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 107761},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 137002},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 34608},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 55796},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 158777},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 248391},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 165775},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 163848},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 93895},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 139568},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 208560},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 76799},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 199247},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 295180},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 173805},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 10783},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 9766},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 19439},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 16444},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 16935},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 18031},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 16610},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 12373},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 4553},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 8360},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 16923},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 11415},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 10242},
]},
],
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

                   text: '阿拉的PT構成(總分3219822)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 3047948, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 120381, name: '強襲', legendMarkerType: 'square'},
{  y: 51493, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神威的PT統計(總分2897094)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 278591,
				            interval: 27859,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神威殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 19046},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 21869},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 14097},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 78},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 82875},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 117897},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 58154},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 57671},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 26253},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 66543},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 79436},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 137572},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 80713},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 201746},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 85818},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 157089},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 118811},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 165776},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 63871},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 24428},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 25467},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 147244},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 169856},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 91576},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 71788},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 55203},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 278591},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 240969},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 158354},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 8676},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神威強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 19076},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 11159},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 12658},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 14541},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神威CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 10, 0), y: 12193},
]},
],
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

                   text: '神威的PT構成(總分2897094)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2827467, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57434, name: '強襲', legendMarkerType: 'square'},
{  y: 12193, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾倫的PT統計(總分2867352)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 272543,
				            interval: 27254,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾倫殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 11048},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 15449},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 51007},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 34860},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 68189},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 120798},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 11960},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 94458},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 37518},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 127176},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 272543},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 145285},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 32865},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 136277},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 168705},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 90513},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 134591},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 7485},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 120031},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 118602},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 73130},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 4653},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 220241},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 63913},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 66486},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 13517},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 97743},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 239872},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾倫強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 18, 0), y: 19384},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 14728},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 16955},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 21245},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾倫CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1856},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 14271},
]},
],
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

                   text: '艾倫的PT構成(總分2867352)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2778913, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 72312, name: '強襲', legendMarkerType: 'square'},
{  y: 16127, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分1856663)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 187056,
				            interval: 18705,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 10600},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 10377},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 11178},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 58665},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 84388},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 27459},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1434},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 84797},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 22255},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 120784},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 26716},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 108379},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 43813},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 30672},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 38481},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 100162},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 146723},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 121173},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 144466},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 51973},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 87283},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 17375},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 40515},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 34160},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 52997},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 187056},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 48066},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 869},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 29943},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 7553},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 12859},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 14009},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 13, 0), y: 15993},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 13167},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 12192},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 14172},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 9738},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 14221},
]},
],
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

                   text: '土土昕的PT構成(總分1856663)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1712816, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 79483, name: '強襲', legendMarkerType: 'square'},
{  y: 64364, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分1726026)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 224035,
				            interval: 22403,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 9184},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3153},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 832},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 16771},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 45175},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 32973},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 61949},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 22767},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 47831},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 3601},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 44773},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 75605},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 98755},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 126817},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 5286},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 190319},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 109056},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 104860},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 33255},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 83},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 49387},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 176285},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 224035},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 217337},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 22976},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2961},
]},
],
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

                   text: '凱爾的PT構成(總分1726026)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1726026, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '傑特的PT統計(總分1522815)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 172625,
				            interval: 17262,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 13370},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 4787},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 2262},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 28606},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 110741},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 121759},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 7725},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 18095},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 19042},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 28493},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 108515},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 791},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 45439},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 79782},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 31669},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 13644},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 116647},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 44429},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 35660},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 25555},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 22451},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 55392},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 81070},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 63158},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 172625},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 114123},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 28967},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 48006},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 28925},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 16, 0), y: 13391},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 11523},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 5426},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 8861},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 11886},
]},
],
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

                   text: '傑特的PT構成(總分1522815)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1471728, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 24914, name: '強襲', legendMarkerType: 'square'},
{  y: 26173, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分1498371)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 199998,
				            interval: 19999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 8513},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 8999},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 9602},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 15759},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 64861},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 38016},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 28316},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 12750},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 45093},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 26562},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 15702},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 28287},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 34270},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 20850},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 58572},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 3657},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 36076},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 25802},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 30923},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 33691},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 66150},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 28517},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 15177},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 5514},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 169775},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 134612},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 7219},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 9054},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 6251},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 14134},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 13924},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 13727},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 11847},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 20916},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 9797},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 12517},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 12943},
]},
],
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

                   text: '依司瑪耳的PT構成(總分1498371)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1373261, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35257, name: '強襲', legendMarkerType: 'square'},
{  y: 89853, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '喵鼠的PT統計(總分1228075)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 127680,
				            interval: 12768,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 55},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 67},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 6374},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 2226},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 2392},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 159},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 3135},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 1126},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 5320},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 5348},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 4528},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 10890},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 19570},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 14382},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 21217},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 37538},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 23621},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 15933},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 19651},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 31305},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 3945},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 58570},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 56612},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 90549},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 75571},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 23166},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 24471},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 127680},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 38254},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 30076},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 56999},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 28442},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 65801},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 42445},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 53928},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 50186},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 22105},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 29145},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 18159},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 21704},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 24750},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 35028},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 25652},
]},
],
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

                   text: '喵鼠的PT構成(總分1228075)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 30730, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 125293, name: '強襲', legendMarkerType: 'square'},
{  y: 1072052, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '白愁武神的PT統計(總分944882)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 152136,
				            interval: 15213,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白愁武神殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 6187},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5849},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 8337},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 13435},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 22705},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 11863},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 15023},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 11856},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 28363},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 5302},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 10230},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 18566},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 84623},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 50362},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 17189},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 27760},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 59671},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 10204},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 65921},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 12164},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 3659},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 19979},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 10568},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 70770},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 64177},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 152136},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 24126},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 30920},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 17420},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 4754},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白愁武神CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 27, 0), y: 15858},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白愁武神強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 15878},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 10991},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 9718},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 8318},
]},
],
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

                   text: '白愁武神的PT構成(總分944882)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 884119, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44905, name: '強襲', legendMarkerType: 'square'},
{  y: 15858, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分773298)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 61538,
				            interval: 6153,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 06, 0), y: 6061},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 9727},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 28892},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 12953},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 12939},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 6773},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 12220},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 16944},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 21688},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 27818},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 15814},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 44357},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 30869},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 18885},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 25313},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 10862},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 30474},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 50578},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 7347},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 10055},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 19352},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 19893},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 31131},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 61538},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 12835},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 36695},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 25401},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 24468},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 20874},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 52916},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 27462},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 7906},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 21291},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 10967},
]},
],
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

                   text: '冰紅茶的PT構成(總分773298)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 695953, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 77345, name: '強襲', legendMarkerType: 'square'},
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
				            text: '寇內爾緹的PT統計(總分626482)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44663,
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
                                    name: "寇內爾緹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 5003},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5652},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 10457},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 18662},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 20233},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 10152},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 12744},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 25139},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 5592},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 11071},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 11811},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 13271},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 10494},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 14048},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 15335},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 12498},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 44663},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 8215},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 18919},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 9781},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 24491},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 11148},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8759},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 9875},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 39112},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 4989},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 18232},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 30604},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 27029},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5754},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 11702},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 17303},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 12485},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 41165},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 15785},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 17697},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 11447},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 8576},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 14781},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 11808},
]},
],
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

                   text: '寇內爾緹的PT構成(總分626482)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 457979, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 133338, name: '強襲', legendMarkerType: 'square'},
{  y: 35165, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分523133)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64211,
				            interval: 6421,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 12482},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2517},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 7105},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 13735},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 16573},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 14879},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 14503},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 29182},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 31426},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 54240},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 64211},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 52392},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 14766},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 30104},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 9878},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 15928},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 17093},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 10782},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 2614},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 2585},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 8696},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 11317},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 15045},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 12822},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5577},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 33580},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 19101},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分523133)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 383921, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 80954, name: '強襲', legendMarkerType: 'square'},
{  y: 58258, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分506117)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58143,
				            interval: 5814,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 1409},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 3106},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3033},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1312},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 36770},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 26304},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 30665},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 17465},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 10459},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 48967},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 33401},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 12565},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 41862},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 58143},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 41015},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 42988},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 2321},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 8535},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 12840},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1897},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 3064},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2960},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 9043},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 25728},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 12518},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 9895},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 7852},
]},
],
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

                   text: '葬月的PT構成(總分506117)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 438121, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 67996, name: '強襲', legendMarkerType: 'square'},
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
				            text: '艾佛烈的PT統計(總分65984)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14587,
				            interval: 1458,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 41},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 3583},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 2102},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 3596},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2713},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 3115},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 14587},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 2051},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4490},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 1103},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 2615},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 4334},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 4364},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 154},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 114},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 119},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 46},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 111},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 122},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 7619},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 39},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 91},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 53},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 48},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 44},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 57},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 34},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 131},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 44},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1481},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 72},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 34},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 5741},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 41},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 84},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 45},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 46},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 903},
]},
],
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

                   text: '艾佛烈的PT構成(總分65984)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 17290, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 48694, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '魔法的PT統計(總分49138)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10817,
				            interval: 1081,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 01, 0), y: 10817},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 9557},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 44},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 2884},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 9489},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 8553},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 7794},
]},
],
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

                   text: '魔法的PT構成(總分49138)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 23302, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7794, name: '強襲', legendMarkerType: 'square'},
{  y: 18042, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '御神夜的PT統計(總分43995)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19800,
				            interval: 1980,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "御神夜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 15, 0), y: 19800},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 16793},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 7402},
]},
],
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

                   text: '御神夜的PT構成(總分43995)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 43995, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '艾略特的PT統計(總分40085)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11739,
				            interval: 1173,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾略特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 32},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 36},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 77},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 36},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 38},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 35},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 78},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 41},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 25},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 74},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 34},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 66},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 35},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 40},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 35},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 776},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2032},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 72},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾略特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 777},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 37},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 11739},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 47},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 47},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 116},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 1813},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 2209},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 797},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 934},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 1004},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 484},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾略特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 38},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1413},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 1271},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 3837},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 3825},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 1395},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 3769},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 54},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 917},
]},
],
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

                   text: '艾略特的PT構成(總分40085)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 3562, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20004, name: '強襲', legendMarkerType: 'square'},
{  y: 16519, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Candy的PT統計(總分2704922)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 289793,
				            interval: 28979,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Candy殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 8339},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 23564},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3383},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 26358},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 39093},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 34901},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 100546},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 10968},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 23317},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 46893},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 126847},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 91918},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 76608},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 18387},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 15922},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 132315},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 48421},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 82242},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 28836},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 16056},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 124649},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 222966},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 174522},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 23277},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 34451},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 247383},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 155543},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 100227},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 252428},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 289793},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "CandyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 9248},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 5082},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 8565},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 14587},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 9605},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 13325},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 6938},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 3903},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 10167},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 22546},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 2834},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 17969},
]},
],
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

                   text: 'Candy的PT構成(總分2704922)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2580153, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 124769, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '希比的PT統計(總分2469076)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 228369,
				            interval: 22836,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希比強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 19, 0), y: 12523},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 19585},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希比殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 10685},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 14360},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 10931},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 5177},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 21970},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 85932},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 91282},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 64518},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 22593},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 14136},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 26770},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 36168},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 96082},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 26164},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 81411},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 69598},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 86093},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 29544},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 30},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 110676},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 228369},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 153126},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 149184},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 129231},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 173010},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 172844},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 59110},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 174838},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "希比CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3245},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 5848},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 18007},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 9823},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 8515},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 12702},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 12131},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 4638},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 18229},
]},
],
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

                   text: '希比的PT構成(總分2469076)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 2343830, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32108, name: '強襲', legendMarkerType: 'square'},
{  y: 93138, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '煉心的PT統計(總分2022294)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 299997,
				            interval: 29999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煉心殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 10734},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2853},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 17946},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 11821},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 36105},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 75716},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 110043},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 42046},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 14632},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 36139},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 83600},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 41549},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 43290},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 53288},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 59938},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 22733},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 64826},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 24582},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 81486},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 55105},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 19134},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 19577},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 88745},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 129556},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 94592},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 131999},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 137588},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 175},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 134555},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 299997},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煉心強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 18, 0), y: 13089},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 11955},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 13586},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 14612},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煉心CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 11, 0), y: 10544},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 14158},
]},
],
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

                   text: '煉心的PT構成(總分2022294)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1944350, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 53242, name: '強襲', legendMarkerType: 'square'},
{  y: 24702, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羅倫施的PT統計(總分2007922)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 214299,
				            interval: 21429,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅倫施CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 10148},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 14245},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 33177},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 15032},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 8281},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅倫施殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 16109},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 13451},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 9421},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 19280},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 68546},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 48815},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 83992},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 28192},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 2206},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 73406},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 51359},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 39545},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 12459},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 21819},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 43838},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 67927},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 88421},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 137782},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 52408},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 51490},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 16975},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 214299},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 79398},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 87428},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 70140},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 161590},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 125087},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羅倫施強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 18, 0), y: 24689},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 16969},
]},
],
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

                   text: '羅倫施的PT構成(總分2007922)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1885381, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 41658, name: '強襲', legendMarkerType: 'square'},
{  y: 80883, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '星日的PT統計(總分1946385)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 199998,
				            interval: 19999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星日殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 17061},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 7202},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 8977},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 11977},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1288},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 94314},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 19252},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 9023},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 38412},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 14761},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 17938},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 65928},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 121726},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 174},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 11600},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 19743},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 112283},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 1922},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 142721},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 55584},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 22949},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 80609},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 113250},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 142534},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 113359},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 109212},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 35366},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 66314},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 170166},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 199998},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星日CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 4511},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 6924},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 13195},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 15920},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 14927},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 25855},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星日強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 7312},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 11608},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 8700},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 11790},
]},
],
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

                   text: '星日的PT構成(總分1946385)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1825643, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39410, name: '強襲', legendMarkerType: 'square'},
{  y: 81332, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '上人的PT統計(總分1694236)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 156450,
				            interval: 15645,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "上人殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 16629},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2678},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 20962},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 17812},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 19737},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 8999},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 37622},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 42850},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 985},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 47805},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 17745},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 11400},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 1453},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 38247},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 1356},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 22125},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 7370},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 35473},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 50662},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 126160},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 47711},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 110936},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 97640},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 143403},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 109012},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 156450},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 35051},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 143446},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 106128},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "上人CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 11, 0), y: 9954},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 9201},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 9961},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 12810},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 13337},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 13414},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "上人強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5925},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 9827},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 10249},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 10698},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 11014},
]},
],
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

                   text: '上人的PT構成(總分1694236)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1577846, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 47713, name: '強襲', legendMarkerType: 'square'},
{  y: 68677, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Fumm的PT統計(總分1602566)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 172398,
				            interval: 17239,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fumm殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 3835},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 9547},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3734},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 27846},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 12748},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 46190},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 13753},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 5419},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 14081},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 52357},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 56427},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 15981},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 25107},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 14302},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 27090},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 91649},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 120911},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 26650},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 46867},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 9365},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 17527},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 82265},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 88025},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 97782},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 21707},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 90140},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 135699},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 68176},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 172398},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "FummCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 08, 0), y: 16819},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 14243},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 13558},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 16829},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 6526},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fumm強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 8824},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 13653},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 14537},
]},
],
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

                   text: 'Fumm的PT構成(總分1602566)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1497577, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 37014, name: '強襲', legendMarkerType: 'square'},
{  y: 67975, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '♛愛德華✵剎那♐的PT統計(總分1401600)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 151200,
				            interval: 15120,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "♛愛德華✵剎那♐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 6481},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 12400},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 13338},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 8952},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 30788},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 40730},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 137406},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 70961},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 53182},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 25998},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 14631},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 6311},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 25693},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 51609},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 36416},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 31634},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 20160},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 94520},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 151200},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 66339},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 6126},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 50183},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 14122},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 92049},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 83090},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 73010},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 57202},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 40413},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "♛愛德華✵剎那♐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 25, 0), y: 17293},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "♛愛德華✵剎那♐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 13498},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 9503},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 11584},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 17814},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 16964},
]},
],
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

                   text: '♛愛德華✵剎那♐的PT構成(總分1401600)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1314944, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17293, name: '強襲', legendMarkerType: 'square'},
{  y: 69363, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Taco的PT統計(總分1341662)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 108202,
				            interval: 10820,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Taco殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 14103},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 17833},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 12936},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 12835},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 17599},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 24378},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 52790},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 68606},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 57364},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 7734},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 34476},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 11819},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 52293},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 63622},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 59188},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 11963},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 9379},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 82441},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 36401},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 108202},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 20062},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 93663},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 80930},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 64655},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 47943},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 63143},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 60501},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 7009},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 28714},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 19813},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Taco強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 13, 0), y: 11144},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 14442},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 26769},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "TacoCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 15831},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 10074},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 2052},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 14033},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 4922},
]},
],
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

                   text: 'Taco的PT構成(總分1341662)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1242395, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 52355, name: '強襲', legendMarkerType: 'square'},
{  y: 46912, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Joooe的PT統計(總分1189914)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 189064,
				            interval: 18906,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Joooe殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 09, 0), y: 12449},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 20994},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 7641},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 16052},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 19576},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 60165},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 27653},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 91581},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 69232},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 9204},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 14698},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 28198},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 9348},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 25660},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 173999},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 176440},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 110091},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 17174},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 6506},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 5738},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 189064},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Joooe強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 20, 0), y: 5457},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9466},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 16289},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 15945},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "JoooeCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 09, 0), y: 9502},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 8583},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 5138},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 3710},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 14323},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 10038},
]},
],
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

                   text: 'Joooe的PT構成(總分1189914)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1091463, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 47157, name: '強襲', legendMarkerType: 'square'},
{  y: 51294, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '響燕的PT統計(總分1146793)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 199998,
				            interval: 19999,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "響燕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 1898},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 9386},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 10779},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 8026},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 13006},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 29743},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 40810},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 34092},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 40697},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 30385},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 685},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 50083},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 71},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 61966},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 3338},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 3858},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 8354},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 9728},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 38730},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 30628},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 145},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 12292},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 10109},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 30456},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 98316},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 101658},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 162400},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 27106},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "響燕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5039},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 6864},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1612},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 18053},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 14953},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 13869},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "響燕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 19, 0), y: 17660},
]},
],
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

                   text: '響燕的PT構成(總分1146793)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1068743, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17660, name: '強襲', legendMarkerType: 'square'},
{  y: 60390, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Fatcats的PT統計(總分1122507)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 146932,
				            interval: 14693,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fatcats殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 19178},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 893},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 15976},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 24590},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 23349},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 47273},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 15584},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 11654},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 52536},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 7450},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 25538},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 35423},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 19214},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 4724},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 24818},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 19521},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 47171},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 146932},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 50312},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 61686},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 123776},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 103471},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 62275},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "FatcatsCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 6793},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 26155},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 13652},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 18718},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 22162},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 22944},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 37251},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Fatcats強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 17685},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 13803},
]},
],
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

                   text: 'Fatcats的PT構成(總分1122507)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 943344, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 31488, name: '強襲', legendMarkerType: 'square'},
{  y: 147675, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '萊茵哈特的PT統計(總分251227)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28340,
				            interval: 2834,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊茵哈特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 15, 0), y: 20905},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 2262},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 2224},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 20853},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 9794},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 28293},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 8999},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 7285},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 28340},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 13256},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 15961},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊茵哈特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 18, 0), y: 15235},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 15621},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 9221},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 8530},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊茵哈特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 17, 0), y: 23420},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 8915},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 2869},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 9244},
]},
],
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

                   text: '萊茵哈特的PT構成(總分251227)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 158172, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44448, name: '強襲', legendMarkerType: 'square'},
{  y: 48607, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '~摩淩杏~的PT統計(總分221046)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64104,
				            interval: 6410,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "~摩淩杏~殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 23, 0), y: 16149},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 27988},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 53592},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 381},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 64104},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 44268},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "~摩淩杏~強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 26, 0), y: 14564},
]},
],
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

                   text: '~摩淩杏~的PT構成(總分221046)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 206482, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14564, name: '強襲', legendMarkerType: 'square'},
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
				            text: '享樂的光弓朵兒特的PT統計(總分151575)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26849,
				            interval: 2684,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "享樂的光弓朵兒特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 9744},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 318},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 3187},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 583},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 26849},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 185},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 9459},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 20552},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 18649},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 147},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 14051},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 80},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 16464},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1077},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 529},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 445},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 128},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 2},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1847},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 5955},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 1797},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "享樂的光弓朵兒特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 10, 0), y: 6334},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "享樂的光弓朵兒特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 3930},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 9259},
]},
],
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

                   text: '享樂的光弓朵兒特的PT構成(總分151575)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 132052, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13189, name: '強襲', legendMarkerType: 'square'},
{  y: 6334, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '杰克的PT統計(總分51611)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13627,
				            interval: 1362,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "杰克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 13627},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 13349},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 11310},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "杰克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 22, 0), y: 13325},
]},
],
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

                   text: '杰克的PT構成(總分51611)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 38286, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13325, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '靈糕的PT統計(總分45273)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21165,
				            interval: 2116,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈糕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 22, 0), y: 21165},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 15920},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "靈糕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8188},
]},
],
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

                   text: '靈糕的PT構成(總分45273)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 37085, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8188, name: '強襲', legendMarkerType: 'square'},
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
				            text: '嵐武耀空的PT統計(總分25770)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 16685,
				            interval: 1668,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嵐武耀空CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 9085},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嵐武耀空殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 16685},
]},
],
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

                   text: '嵐武耀空的PT構成(總分25770)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 16685, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9085, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '無極的PT統計(總分24976)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12951,
				            interval: 1295,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無極殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 7160},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 4865},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 12951},
]},
],
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

                   text: '無極的PT構成(總分24976)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 24976, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '血狼的PT統計(總分21497)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 9099,
				            interval: 909,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "血狼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2786},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 8202},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 9099},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 53},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1357},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
]},
],
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

                   text: '血狼的PT構成(總分21497)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 21497, name: '殲滅', legendMarkerType: 'triangle'},
			]
		}
		]
	});
	PlayerPieChart37.render();
}
