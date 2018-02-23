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
				
				            maximum: 370040,
				            interval: 37004,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 203752},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 194294},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 210422},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 165402},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 297717},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 207113},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 309117},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 274217},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 264666},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 232979},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 217616},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 232929},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 262601},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 356505},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 290218},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 334535},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 362115},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 282524},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 320813},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 370040},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 207449},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 326439},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 171535},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 180842},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 97178},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 197285},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 174455},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 217131},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 140697},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 138276},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 11613},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 22265},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 14549},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 61827},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 57124},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 40974},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 72373},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 83956},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 93126},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 75084},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 95188},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 26950},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 35751},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 47735},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 51233},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 36892},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 37328},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 36251},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 24873},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10691},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1337},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7040},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 12580},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 1988},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 30848},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2536},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 16677},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 0},
]},
],
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
				
				            maximum: 8249651,
				            interval: 824965,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 203752},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 398046},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 608468},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 773870},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 1071587},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 1278700},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1587817},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 1862034},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2126700},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2359679},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2577295},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 2810224},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3072825},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3429330},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 3719548},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4054083},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 4416198},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4698722},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5019535},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5389575},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 5597024},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 5923463},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 6094998},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 6275840},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 6373018},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6570303},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 6744758},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6961889},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 7102586},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 7240862},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 11613},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 33878},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 48427},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 110254},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 167378},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 208352},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 280725},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 364681},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 457807},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 532891},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 628079},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 655029},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 690780},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 738515},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 789748},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 826640},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 863968},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 900219},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 925092},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 935783},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 935783},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 937120},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 944160},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 944160},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 956740},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 958728},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 989576},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 992112},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 1008789},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 1008789},
]},
],
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
				
				            maximum: 223719,
				            interval: 22371,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 146224},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 106790},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 105423},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 90594},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 156583},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 120479},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 206731},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 147812},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 123454},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 143147},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 107517},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 139197},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 143318},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 164598},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 165549},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 138713},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 223719},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 115432},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 177426},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 136426},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 128305},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 118566},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 129840},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 119984},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 58636},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 44469},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 136980},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 202052},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 94019},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 46071},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 23660},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 73209},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 25571},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 34862},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 99276},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 58353},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 102386},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 56697},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 113043},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 57826},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 98328},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 52058},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 41058},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 188387},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 55693},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 148316},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 58017},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 146377},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 59450},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 146732},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 63499},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 150682},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 41695},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 23337},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 16359},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 127770},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 35191},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15079},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 35750},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 32762},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 33868},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 14295},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 79428},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 39946},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 41858},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 28281},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 69708},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 28169},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 32006},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11771},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 41674},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 78225},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3520},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 68976},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 47506},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 80379},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 20715},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 83937},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 86882},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 15645},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 57191},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 37521},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 22183},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 25046},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 2284},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10928},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 59443},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 11613},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 18447},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 12876},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 40637},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 39268},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 17686},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 65715},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 63443},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 78197},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 73318},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 47925},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 17270},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 22032},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 40038},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 35450},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 6404},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 19305},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 20453},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16280},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 4520},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 7040},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 4707},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 1988},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 13375},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2536},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6673},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3818},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1673},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7136},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6405},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9554},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6658},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 13415},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7707},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 1766},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 14207},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 1809},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5785},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 2233},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 10403},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 9844},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6766},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8593},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1337},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 9647},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10004},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 14054},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11451},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 13734},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7098},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7222},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 33056},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7871},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 7934},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5464},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 5380},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 20644},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11257},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 15798},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6171},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7873},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 7826},
]},
],
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
				            text: 'gotice的PT統計(總分921709)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42622,
				            interval: 4262,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7191},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6079},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8752},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 13291},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 16992},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 17680},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 17119},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 23809},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 28144},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 14036},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 9984},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 13634},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12157},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14862},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3539},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8203},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5658},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 10201},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10179},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7418},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5112},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10066},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1952},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12925},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5847},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 17252},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 29255},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 42622},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 28157},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5604},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11728},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 3169},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 14808},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15166},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 27436},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 19086},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 14162},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 5971},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 12797},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 6346},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 37290},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 40065},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 35652},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 8970},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "goticeCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4765},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9895},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 33913},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 18733},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 14293},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 35823},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 22958},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 20550},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 17397},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 17997},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 14817},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 14780},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 17396},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 18026},
]},
],
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

                   text: 'gotice的PT構成(總分921709)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 456636, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 203730, name: '強襲', legendMarkerType: 'square'},
{  y: 261343, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分767750)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 69978,
				            interval: 6997,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3575},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8941},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7243},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5373},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7515},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 2122},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 9149},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10657},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10497},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 13607},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10447},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 16243},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8135},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 15611},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1847},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 39013},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 69978},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 23152},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 40135},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 24920},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 8450},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 12434},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12014},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 32112},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 22473},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 9555},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 21006},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 48291},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 16463},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 19687},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7745},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7571},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 6265},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11771},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6512},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 13248},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5157},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 15645},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 10509},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 16857},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 14514},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 10343},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6034},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7162},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 18641},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 22161},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 20569},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 10537},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 25864},
]},
],
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

                   text: '嘎喵的PT構成(總分767750)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 530645, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 101280, name: '強襲', legendMarkerType: 'square'},
{  y: 135825, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分668904)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53755,
				            interval: 5375,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4418},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2257},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4823},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9538},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4577},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5388},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4920},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 1889},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5026},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 10921},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 8941},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6054},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5457},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 3401},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 3280},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 12271},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 8977},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 8566},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 24801},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 42764},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 52994},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 23276},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 11753},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8136},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 17303},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 13194},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 11302},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 43456},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 23141},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 22687},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 18638},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 35188},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 45502},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 53755},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 15698},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 15871},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7572},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 9103},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 17182},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 15631},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 23887},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 5366},
]},
],
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

                   text: '依司瑪耳的PT構成(總分668904)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 266292, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 78741, name: '強襲', legendMarkerType: 'square'},
{  y: 323871, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無銘的PT統計(總分616623)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30258,
				            interval: 3025,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 16747},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 9497},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10718},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 17199},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 24374},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 19102},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 26088},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 8076},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 16393},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 12634},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 15079},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 15252},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 14736},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10409},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8853},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 15285},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11553},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 6308},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10928},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 27724},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 11416},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4811},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 12454},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 225},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 13269},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8276},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 26666},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5451},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 12623},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 27406},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 19684},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 26927},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 16653},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 13813},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 6625},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 5619},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 11016},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 9310},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 30258},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 16159},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6814},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6340},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 13131},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 6301},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 6013},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 471},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 1937},
]},
],
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

                   text: '無銘的PT構成(總分616623)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 319668, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 91060, name: '強襲', legendMarkerType: 'square'},
{  y: 205895, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分583184)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28216,
				            interval: 2821,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 10442},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7213},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7071},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6447},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11958},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7233},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 24005},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 18118},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 15291},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 24439},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 18330},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5557},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5095},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6876},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 8633},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 2540},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 4393},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5168},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 15975},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6646},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 7455},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7384},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 638},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 11070},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6338},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 3426},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 10839},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 14093},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 10034},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 12463},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 25522},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 16762},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 20598},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 23565},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 21795},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 24031},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 15865},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 10703},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 28216},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 19320},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 20498},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8350},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 12696},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4111},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 15558},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 18140},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 2284},
]},
],
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

                   text: '羽龍的PT構成(總分583184)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 247741, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 61139, name: '強襲', legendMarkerType: 'square'},
{  y: 274304, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '龍的PT統計(總分477994)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51287,
				            interval: 5128,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 13596},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 5290},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8602},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7147},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4238},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 14673},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 570},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11140},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4759},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 15124},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 15053},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8423},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 11479},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14287},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 51287},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 26958},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 13789},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 15311},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 18721},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 5216},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 6066},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 11340},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 1035},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 57},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 29269},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 42760},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5100},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 13327},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4409},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6412},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 6868},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 11827},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 13498},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 1579},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12266},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5334},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 13454},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 11943},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 7890},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 7897},
]},
],
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

                   text: '龍的PT構成(總分477994)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 361290, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 46518, name: '強襲', legendMarkerType: 'square'},
{  y: 70186, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽西的PT統計(總分444540)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47244,
				            interval: 4724,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 10487},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3638},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 744},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9648},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4948},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 10464},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1111},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 5147},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 8344},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 12330},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4865},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5053},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 237},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 25930},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 21662},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 34347},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5583},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 12051},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 4508},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 16938},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 28484},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 47244},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 29423},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3938},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 9780},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 13634},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 20908},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 22035},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 15785},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10762},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 11649},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3276},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 3520},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 26067},
]},
],
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

                   text: '賽西的PT構成(總分444540)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 303186, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 55274, name: '強襲', legendMarkerType: 'square'},
{  y: 86080, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡特爾的PT統計(總分347662)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39960,
				            interval: 3996,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 8204},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 10099},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3146},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6583},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 5073},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8521},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 14749},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 12336},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9458},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5748},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10467},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 1440},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 20300},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 14040},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 39960},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 13030},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 11010},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11958},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 5135},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 6387},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 11424},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6509},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 6207},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 4180},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 10793},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 14921},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 26046},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12439},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4854},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7133},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 9858},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 15654},
]},
],
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

                   text: '卡特爾的PT構成(總分347662)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 229068, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 81095, name: '強襲', legendMarkerType: 'square'},
{  y: 37499, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分340411)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33812,
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
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 4214},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8747},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4183},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4241},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8533},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8694},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 7628},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10654},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5913},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4636},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5603},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 11087},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3735},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 16979},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 5927},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 8287},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 10277},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 8116},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 11428},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 11409},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 12160},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5449},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 5253},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2726},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 33812},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 19524},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12422},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 11397},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 6469},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 21427},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16507},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 16200},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 16774},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分340411)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 183153, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 88774, name: '強襲', legendMarkerType: 'square'},
{  y: 68484, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '暗之武者的PT統計(總分304400)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39234,
				            interval: 3923,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3676},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3851},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4206},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 10625},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 9681},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 1321},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 5377},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 6091},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5802},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8874},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9389},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9957},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 29896},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 27514},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 10820},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 26536},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 27152},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 39234},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 15790},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 18740},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 23710},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6158},
]},
],
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

                   text: '暗之武者的PT構成(總分304400)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 44828, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 6158, name: '強襲', legendMarkerType: 'square'},
{  y: 253414, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分292063)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32207,
				            interval: 3220,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 9350},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 19},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6774},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4310},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6475},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5046},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3870},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 10607},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 8931},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 5585},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3856},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7342},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5754},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10367},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 12598},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 10685},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 11074},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 11575},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 80},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 12287},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 32207},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 17105},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 25938},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 31158},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 10172},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 10206},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10431},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 8261},
]},
],
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

                   text: '雪歌的PT構成(總分292063)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 134298, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39070, name: '強襲', legendMarkerType: 'square'},
{  y: 118695, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分232323)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25748,
				            interval: 2574,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6089},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3752},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3049},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 12561},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7785},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 11674},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4816},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6196},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 8338},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 17274},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7329},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 3436},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 25748},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4569},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 15186},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7708},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13746},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 12475},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4860},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3763},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 20799},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6632},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2308},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 13335},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 8895},
]},
],
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

                   text: '葬月的PT構成(總分232323)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 171731, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 36054, name: '強襲', legendMarkerType: 'square'},
{  y: 24538, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分232162)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24427,
				            interval: 2442,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 11599},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7439},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3087},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9488},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 14991},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 4651},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 24427},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 21827},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 11147},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 5753},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 6176},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6622},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 22845},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 14986},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 9074},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 3710},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 6401},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7068},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 10154},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6903},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 12392},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7465},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3957},
]},
],
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

                   text: '冰的PT構成(總分232162)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 184223, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11422, name: '強襲', legendMarkerType: 'square'},
{  y: 36517, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西沙斯的PT統計(總分229044)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18781,
				            interval: 1878,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6810},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 5691},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8135},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 193},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 71},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5109},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 7267},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7826},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 546},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5620},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 3496},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 10984},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 10606},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 5887},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 2235},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5513},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8992},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 12475},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 14676},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 12711},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 18781},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 15908},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11799},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10331},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 4740},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 16531},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 16111},
]},
],
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

                   text: '西沙斯的PT構成(總分229044)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 80476, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 59512, name: '強襲', legendMarkerType: 'square'},
{  y: 89056, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Abbey的PT統計(總分221921)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21866,
				            interval: 2186,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Abbey殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6133},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 6435},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8908},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5463},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 2755},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 21},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 14255},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10156},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7338},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 10063},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 3894},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 13738},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 11152},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5142},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 10771},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 4172},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 4910},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 5338},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AbbeyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9628},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 13148},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 13906},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 21866},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Abbey強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7754},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 15482},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 9493},
]},
],
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

                   text: 'Abbey的PT構成(總分221921)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 130644, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32729, name: '強襲', legendMarkerType: 'square'},
{  y: 58548, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '裁風的PT統計(總分181100)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14910,
				            interval: 1491,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 14910},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 14050},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7792},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 10983},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 12889},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 11747},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 4185},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4755},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1556},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 10476},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7757},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 5139},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 10447},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 3188},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5357},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4635},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 5982},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 6599},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 12327},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 12709},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 13617},
]},
],
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

                   text: '裁風的PT構成(總分181100)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 81823, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 60624, name: '強襲', legendMarkerType: 'square'},
{  y: 38653, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分122988)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15452,
				            interval: 1545,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 09, 0), y: 13812},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6951},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7777},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 4487},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 3933},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8202},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 8339},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 11595},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4854},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7129},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9966},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7308},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 13183},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 15452},
]},
],
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

                   text: '凱爾的PT構成(總分122988)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 63267, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13812, name: '強襲', legendMarkerType: 'square'},
{  y: 45909, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '迪克的PT統計(總分121888)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15330,
				            interval: 1533,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5020},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 11278},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 11089},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 5385},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 6303},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 8694},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7385},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 651},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 8837},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5643},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 15330},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 12341},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 10279},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 13653},
]},
],
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

                   text: '迪克的PT構成(總分121888)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 65184, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32772, name: '強襲', legendMarkerType: 'square'},
{  y: 23932, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '湖光的PT統計(總分93390)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14875,
				            interval: 1487,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 7395},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 534},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3996},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 4127},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3026},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 14875},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6723},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 4913},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 6397},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 1630},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 7538},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 7257},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6714},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8782},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 9483},
]},
],
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

                   text: '湖光的PT構成(總分93390)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 53616, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 18265, name: '強襲', legendMarkerType: 'square'},
{  y: 21509, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫嫣的PT統計(總分40806)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 10787,
				            interval: 1078,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 10787},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3857},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 6098},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 1681},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7249},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 613},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7165},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3356},
]},
],
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

                   text: '紫嫣的PT構成(總分40806)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 30285, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3356, name: '強襲', legendMarkerType: 'square'},
{  y: 7165, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '辣妹大媽碎碎唸的PT統計(總分231527)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28637,
				            interval: 2863,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "辣妹大媽碎碎唸殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 2547},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2702},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5358},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4000},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 3984},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 1835},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 16966},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 26367},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 28637},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 15367},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 51},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 382},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4210},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3160},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 4966},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 16569},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 7494},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 2660},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "辣妹大媽碎碎唸強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8767},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 7149},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 5464},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 5380},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 8922},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 13400},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "辣妹大媽碎碎唸CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 9554},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 6658},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 1809},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 10403},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 6766},
]},
],
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

                   text: '辣妹大媽碎碎唸的PT構成(總分231527)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 147255, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 49082, name: '強襲', legendMarkerType: 'square'},
{  y: 35190, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '吃我一箭辣的PT統計(總分203949)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40100,
				            interval: 4010,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吃我一箭辣殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 723},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 9682},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 3428},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8015},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 9792},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6266},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 25855},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 40100},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 34447},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 26080},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 8982},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2578},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1965},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 212},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 22},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 146},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 44},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 105},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吃我一箭辣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 7352},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 7780},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3239},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吃我一箭辣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 7136},
]},
],
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

                   text: '吃我一箭辣的PT構成(總分203949)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 178442, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 18371, name: '強襲', legendMarkerType: 'square'},
{  y: 7136, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '颻光的PT統計(總分119996)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27836,
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
                                    name: "颻光殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 06, 0), y: 3712},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4659},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 27836},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 19662},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 5412},
{ x: new Date(0, 0, 0, 22, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 13229},
{ x: new Date(0, 0, 0, 22, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "颻光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4245},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 9844},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 8593},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 10004},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "颻光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 10, 0), y: 4974},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 7826},
]},
],
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

                   text: '颻光的PT構成(總分119996)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 74510, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12800, name: '強襲', legendMarkerType: 'square'},
{  y: 32686, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '江山9527的PT統計(總分118518)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19114,
				            interval: 1911,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "江山9527殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 00, 0), y: 5193},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 2097},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 8791},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 18478},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 19114},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 535},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 12362},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 3756},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 1544},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1410},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1952},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 4520},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 2858},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 27, 0), y: 2492},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "江山9527CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3818},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 7707},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 2233},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "江山9527強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 05, 0), y: 5954},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 5833},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 7871},
]},
],
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

                   text: '江山9527的PT構成(總分118518)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 85102, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 19658, name: '強襲', legendMarkerType: 'square'},
{  y: 13758, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '夜未眠的PT統計(總分102042)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 9962,
				            interval: 996,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜未眠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 08, 0), y: 3527},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 6360},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3525},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 2128},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 1410},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 7565},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 3244},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 3679},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 2856},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 1490},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 22, 0), y: 1522},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 4495},
{ x: new Date(0, 0, 0, 22, 25, 0), y: 1966},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 28, 0), y: 6568},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜未眠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 10, 0), y: 7660},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 6442},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 7814},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 6171},
{ x: new Date(0, 0, 0, 22, 24, 0), y: 7873},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜未眠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 10, 0), y: 9962},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 5785},
]},
],
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

                   text: '夜未眠的PT構成(總分102042)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 50335, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35960, name: '強襲', legendMarkerType: 'square'},
{  y: 15747, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '奧彌薩的PT統計(總分69464)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18696,
				            interval: 1869,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "奧彌薩CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 09, 0), y: 1766},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 9647},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "奧彌薩殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4738},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 2980},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 18696},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 3403},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 14487},
{ x: new Date(0, 0, 0, 22, 13, 0), y: 4617},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 1937},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2582},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 838},
{ x: new Date(0, 0, 0, 22, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 26, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "奧彌薩強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2385},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 1388},
]},
],
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

                   text: '奧彌薩的PT構成(總分69464)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 54278, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3773, name: '強襲', legendMarkerType: 'square'},
{  y: 11413, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '諾雅的PT統計(總分52434)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 8583,
				            interval: 858,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 22, 00, 0), y: 3150},
{ x: new Date(0, 0, 0, 22, 01, 0), y: 3949},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 655},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 8583},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 3478},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6895},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 1802},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2679},
{ x: new Date(0, 0, 0, 22, 14, 0), y: 4876},
{ x: new Date(0, 0, 0, 22, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2666},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 1028},
{ x: new Date(0, 0, 0, 22, 18, 0), y: 4506},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 15, 0), y: 2041},
{ x: new Date(0, 0, 0, 22, 16, 0), y: 2055},
{ x: new Date(0, 0, 0, 22, 17, 0), y: 2398},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 02, 0), y: 1673},
]},
],
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

                   text: '諾雅的PT構成(總分52434)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 44267, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 6494, name: '強襲', legendMarkerType: 'square'},
{  y: 1673, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿邦邦的PT統計(總分50121)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13415,
				            interval: 1341,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿邦邦殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 1848},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 5961},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 2201},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 8724},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿邦邦強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 7098},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 10874},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿邦邦CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 07, 0), y: 13415},
]},
],
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

                   text: '阿邦邦的PT構成(總分50121)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 18734, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17972, name: '強襲', legendMarkerType: 'square'},
{  y: 13415, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '四聖天的PT統計(總分43409)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21951,
				            interval: 2195,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "四聖天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 01, 0), y: 17},
{ x: new Date(0, 0, 0, 22, 02, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 03, 0), y: 2},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 2884},
{ x: new Date(0, 0, 0, 22, 05, 0), y: 6},
{ x: new Date(0, 0, 0, 22, 06, 0), y: 21951},
{ x: new Date(0, 0, 0, 22, 07, 0), y: 819},
{ x: new Date(0, 0, 0, 22, 08, 0), y: 2611},
{ x: new Date(0, 0, 0, 22, 09, 0), y: 3300},
{ x: new Date(0, 0, 0, 22, 11, 0), y: 1567},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 913},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "四聖天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 08, 0), y: 4837},
{ x: new Date(0, 0, 0, 22, 10, 0), y: 3715},
{ x: new Date(0, 0, 0, 22, 12, 0), y: 785},
]},
],
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

                   text: '四聖天的PT構成(總分43409)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 34072, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9337, name: '強襲', legendMarkerType: 'square'},
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
				            text: '快速劍的PT統計(總分15992)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 6405,
				            interval: 640,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "快速劍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 5287},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 4099},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "快速劍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 04, 0), y: 6405},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "快速劍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 03, 0), y: 201},
{ x: new Date(0, 0, 0, 22, 04, 0), y: 0},
]},
],
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

                   text: '快速劍的PT構成(總分15992)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 201, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9386, name: '強襲', legendMarkerType: 'square'},
{  y: 6405, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '安好的PT統計(總分1337)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 1337,
				            interval: 133,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "安好CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 21, 0), y: 1337},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "安好殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 22, 17, 0), y: 0},
]},
],
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

                   text: '安好的PT構成(總分1337)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
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
{  y: 1337, name: 'CBC', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart31.render();
}
