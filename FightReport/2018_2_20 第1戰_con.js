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
				
				            maximum: 642396,
				            interval: 64239,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 152932},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 176393},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 199674},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 218057},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 213968},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 251027},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 242824},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 235794},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 240701},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 264317},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 260157},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 162868},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 260370},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 390090},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 642396},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 506737},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 378941},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 527279},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 446650},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 476082},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 495558},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 498225},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 454992},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 519699},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 558499},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 437765},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 606847},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 603943},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 624064},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 569972},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 135014},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 155818},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 183301},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 216362},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 193995},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 240654},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 247472},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 240256},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 286793},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 265580},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 304868},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 383812},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 449114},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 421790},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 363569},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 414904},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 470177},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 482470},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 442455},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 449820},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 495439},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 477239},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 513316},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 443078},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 569334},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 526638},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 378563},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 563210},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 517679},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 507793},
]},
],
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
				
				            maximum: 22957334,
				            interval: 2295733,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 152932},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 329325},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 528999},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 747056},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 961024},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1212051},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1454875},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1690669},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1931370},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2195687},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2455844},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2618712},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2879082},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3269172},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3911568},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4418305},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4797246},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5324525},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5771175},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6247257},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6742815},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7241040},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7696032},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8215731},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8774230},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9211995},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9818842},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10422785},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11046849},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11616821},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 135014},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 290832},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 474133},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 690495},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 884490},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1125144},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1372616},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1612872},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1899665},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2165245},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2470113},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2853925},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3303039},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3724829},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4088398},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4503302},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4973479},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5455949},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5898404},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6348224},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6843663},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7320902},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7834218},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8277296},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8846630},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9373268},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9751831},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10315041},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10832720},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11340513},
]},
],
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
				
				            maximum: 538935,
				            interval: 53893,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 115707},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 116174},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 134521},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 152655},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 156060},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 158820},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 194481},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 173954},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 187562},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 165642},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 182988},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 142067},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 249443},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 335017},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 538935},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 394795},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 295892},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 399293},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 338266},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 317163},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 342198},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 380998},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 389655},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 424281},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 449394},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 309417},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 414232},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 463920},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 460734},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 484429},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 109004},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 89247},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 126720},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 139371},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 122251},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 172131},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 134342},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 174949},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 173616},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 163657},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 207617},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 260500},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 306144},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 305466},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 280241},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 199054},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 287232},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 294221},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 254905},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 267389},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 352795},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 282078},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 307038},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 346753},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 355172},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 334179},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 251042},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 244144},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 273151},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 268839},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 17513},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 35485},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 39092},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 33177},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 28345},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 51928},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12793},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 23713},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11774},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 65685},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 44079},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8056},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7170},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 31935},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 61427},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 45498},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 44227},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 66997},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 62666},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 78721},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 106139},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 38426},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25349},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 63408},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 51123},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 78140},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 116474},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 66048},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 87285},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13221},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11599},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 42523},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 17942},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 50000},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 22458},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 29354},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 50231},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22843},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 79621},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 56835},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 28351},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 51315},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 60355},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 48207},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14184},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 104900},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 65115},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 108627},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 86924},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 97905},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 27264},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 94874},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 120093},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 41185},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 140093},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 105771},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 37142},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 198974},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 105838},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 107033},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 14411},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 24048},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 38639},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 26991},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 49286},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 39169},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 62899},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 42464},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 33556},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 45088},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 68900},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 71997},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 82615},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 68117},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 69144},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 110950},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 117830},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 79622},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 100626},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 84526},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 115380},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 100287},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 86185},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 55140},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 74069},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 86688},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 90379},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 120092},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 138690},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 131921},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 19712},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 24734},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 26061},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 32225},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 29563},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 40279},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 35550},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 38127},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 41365},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 32990},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 33090},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12745},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3757},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23138},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 42034},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 66444},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 38822},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 60989},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 45718},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 80198},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 47221},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 78801},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 39988},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32010},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 57982},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 50208},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 76141},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 73975},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 76045},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 72322},
]},
],
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
				            text: '雪歌的PT統計(總分809959)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 70639,
				            interval: 7063,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 19, 0), y: 24825},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13668},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16605},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 33042},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16427},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 28486},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 36425},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 62251},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 52446},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 44563},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 34152},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15289},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21113},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 30092},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 36479},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 70639},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6741},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2554},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10028},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5465},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2302},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4530},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9452},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6087},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3217},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9626},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4848},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11694},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5854},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 700},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5364},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5086},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5401},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6411},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 777},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3252},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12461},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9051},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 57},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6923},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 94},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6851},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10313},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1970},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11285},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 21621},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19586},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 37009},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 26847},
]},
],
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

                   text: '雪歌的PT構成(總分809959)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 155139, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 118318, name: '強襲', legendMarkerType: 'square'},
{  y: 536502, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分672814)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51067,
				            interval: 5106,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7711},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6160},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8136},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6524},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7849},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7074},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1909},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9135},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9295},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6251},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12658},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12309},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 30390},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29701},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 51067},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 30809},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22924},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19844},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11786},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8444},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17648},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19751},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8101},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 21417},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17965},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16871},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8489},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7103},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12516},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14232},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6762},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 18682},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11542},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11032},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12569},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19038},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2530},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7835},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8810},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11304},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13628},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16706},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12752},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9920},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15292},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9607},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17392},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23344},
]},
],
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

                   text: '葬月的PT構成(總分672814)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 444069, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 149120, name: '強襲', legendMarkerType: 'square'},
{  y: 79625, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '暗之武者的PT統計(總分658963)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33254,
				            interval: 3325,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6164},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4743},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6720},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1747},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8505},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4308},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11473},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7283},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2192},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3550},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15451},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11601},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5975},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11687},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13412},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8390},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 30746},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32307},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15805},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 21923},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9212},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 29892},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 32094},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13329},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 33254},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11187},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19001},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10830},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19852},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16727},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 902},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7419},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8590},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11646},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5053},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 27076},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18432},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17300},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14046},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11331},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19654},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "暗之武者強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6069},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8797},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7865},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12545},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13080},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12921},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8812},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 28065},
]},
],
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

                   text: '暗之武者的PT構成(總分658963)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 419360, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 98154, name: '強襲', legendMarkerType: 'square'},
{  y: 141449, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '裁風的PT統計(總分650713)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39086,
				            interval: 3908,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8775},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8725},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5270},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13126},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5459},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6816},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13608},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12612},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12042},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6713},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4843},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8942},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15143},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9523},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7973},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12746},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16034},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24981},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23347},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9199},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 27668},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14115},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22384},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 39086},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 34132},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 27474},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20274},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20703},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14713},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11768},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7292},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5923},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9961},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13025},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18123},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14507},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16411},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 23803},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "裁風強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8080},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7720},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14184},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18566},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12469},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 22455},
]},
],
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

                   text: '裁風的PT構成(總分650713)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 458194, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 83474, name: '強襲', legendMarkerType: 'square'},
{  y: 109045, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分648097)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54741,
				            interval: 5474,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 745},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3260},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8603},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7284},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2599},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7821},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12995},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3580},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7093},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9822},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4771},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1575},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1106},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10236},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22724},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13393},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9223},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2614},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14743},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9132},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14144},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9582},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6363},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5573},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8759},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 58},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7324},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8094},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12849},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8945},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11327},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7856},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8974},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10787},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12089},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19186},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20968},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 40262},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 54741},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19268},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 35638},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6127},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7054},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4110},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3768},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2608},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10332},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9348},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3223},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9400},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9199},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9292},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15005},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11022},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8160},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17188},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13379},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11065},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5914},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17765},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6106},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14807},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12602},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5939},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6691},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13105},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6638},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6731},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9426},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7166},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11683},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13982},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8404},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14603},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17991},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23539},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 32463},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21166},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4344},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5788},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11207},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8480},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4701},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7662},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6274},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10836},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8484},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8600},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13197},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13702},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4452},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3989},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5378},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5630},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5707},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8567},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8100},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2749},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2876},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11614},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10383},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7329},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10407},
]},
],
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

                   text: '凱爾的PT構成(總分648097)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 282708, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 247223, name: '強襲', legendMarkerType: 'square'},
{  y: 118166, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分634476)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38618,
				            interval: 3861,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9431},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3800},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5117},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10082},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12497},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11880},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10255},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 25615},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12640},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8839},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4518},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9196},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12842},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9248},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12650},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3759},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14211},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18068},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 20603},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10905},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6869},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12586},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 35855},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33321},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17832},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9344},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3785},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8386},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6052},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16212},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5934},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8621},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14191},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8452},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11423},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 28487},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25377},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7830},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6874},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16018},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13590},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24374},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9334},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13101},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3100},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22754},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 38618},
]},
],
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

                   text: '嘎喵的PT構成(總分634476)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 376398, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 102485, name: '強襲', legendMarkerType: 'square'},
{  y: 155593, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '龍的PT統計(總分619434)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 71150,
				            interval: 7115,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9593},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11380},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8580},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7853},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8276},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15517},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13810},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1994},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 17545},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7184},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11617},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13103},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18000},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5674},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7925},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12111},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13220},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6013},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6535},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3063},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12148},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4711},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7855},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 71150},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 50551},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20748},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7615},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17038},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11776},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13285},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5041},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8236},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11987},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16231},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18209},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14643},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14018},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10594},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10234},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7346},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13088},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15049},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 36265},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12356},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10267},
]},
],
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

                   text: '龍的PT構成(總分619434)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 415870, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 94371, name: '強襲', legendMarkerType: 'square'},
{  y: 109193, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '迪克的PT統計(總分609990)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39182,
				            interval: 3918,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7377},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5536},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6343},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9689},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2136},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6074},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8906},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13610},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9618},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5792},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19424},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 29273},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 31678},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 31851},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10094},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8679},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 26},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18101},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15515},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13030},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10625},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12846},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8447},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6537},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4945},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14016},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14082},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9459},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17969},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6994},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1158},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17754},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20418},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21052},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13072},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 39182},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16914},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "迪克CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4084},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10489},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2140},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17154},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22750},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22232},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14404},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10531},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17984},
]},
],
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

                   text: '迪克的PT構成(總分609990)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 358672, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 129550, name: '強襲', legendMarkerType: 'square'},
{  y: 121768, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫嫣的PT統計(總分598459)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 55830,
				            interval: 5583,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7973},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4454},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9269},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9529},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4201},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16098},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7230},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9459},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11000},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10756},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11927},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17394},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10169},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8275},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9331},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11251},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15211},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8372},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8032},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16273},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 33821},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 23248},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 48964},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 35281},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 55830},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 38215},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 31777},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16195},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15913},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7582},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3387},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4959},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6271},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9795},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8569},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9883},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14161},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫嫣CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3412},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5351},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8566},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11075},
]},
],
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

                   text: '紫嫣的PT構成(總分598459)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 513030, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57025, name: '強襲', legendMarkerType: 'square'},
{  y: 28404, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分582975)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42996,
				            interval: 4299,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6771},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10152},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5156},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7417},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6191},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9746},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15027},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12004},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7411},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10514},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 24829},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13027},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6624},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11748},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10223},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6436},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5582},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10936},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16830},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4558},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18329},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31138},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 42996},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7604},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13706},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19354},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 38676},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4510},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15062},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3174},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19077},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16414},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13869},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19569},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4025},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19098},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 35625},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17483},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14334},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11529},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16221},
]},
],
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

                   text: '依司瑪耳的PT構成(總分582975)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 372985, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 91675, name: '強襲', legendMarkerType: 'square'},
{  y: 118315, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分574820)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53995,
				            interval: 5399,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3921},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3376},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8853},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6140},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2646},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11183},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7182},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14467},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5230},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13911},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6094},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12217},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16279},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8712},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9390},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6234},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 34841},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 40600},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 29077},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6871},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 25095},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6043},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12340},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9919},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13335},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2606},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12666},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15419},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 898},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8506},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6211},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15944},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17990},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 53995},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8028},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12809},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18264},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14163},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9111},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11649},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15282},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17874},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19449},
]},
],
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

                   text: '羽龍的PT構成(總分574820)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 344647, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 126629, name: '強襲', legendMarkerType: 'square'},
{  y: 103544, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'gotice的PT統計(總分574565)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25438,
				            interval: 2543,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5463},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8458},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3999},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7680},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11488},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5815},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7575},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14159},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14181},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5950},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12904},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9694},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14952},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15231},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25321},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13039},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2922},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18629},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19011},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9680},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22190},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17755},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23581},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6292},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6581},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12397},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9180},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10829},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13307},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4578},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "gotice強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5242},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6093},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7199},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8039},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9046},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9091},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19929},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5339},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10967},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19276},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17969},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "goticeCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6252},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4549},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8205},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12781},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25438},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14838},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14473},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16998},
]},
],
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

                   text: 'gotice的PT構成(總分574565)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 352841, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 118190, name: '強襲', legendMarkerType: 'square'},
{  y: 103534, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Abbey的PT統計(總分524545)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43095,
				            interval: 4309,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6900},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4566},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3689},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3932},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4999},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9114},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5813},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7829},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8055},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8021},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8178},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6568},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13644},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13556},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2568},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7272},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14587},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14544},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3111},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17015},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18911},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 43095},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1473},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7274},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6393},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8435},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11230},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10214},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19293},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12016},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Abbey強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6976},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6068},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2701},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8926},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9696},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 41360},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18658},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19038},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AbbeyCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3745},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 17378},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12824},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18128},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18044},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6047},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 32661},
]},
],
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

                   text: 'Abbey的PT構成(總分524545)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 302295, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 113423, name: '強襲', legendMarkerType: 'square'},
{  y: 108827, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡特爾的PT統計(總分515934)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42477,
				            interval: 4247,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2529},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11262},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8316},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10791},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9590},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8042},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6003},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12757},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5662},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2489},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22844},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 33681},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20803},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4739},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9416},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12748},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 36523},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 42477},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6902},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19187},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17656},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12160},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16489},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16895},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14766},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10382},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8768},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4640},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5315},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6853},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7620},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24841},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7710},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16816},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡特爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3569},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9309},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12549},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14443},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18392},
]},
],
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

                   text: '卡特爾的PT構成(總分515934)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 383877, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 58262, name: '強襲', legendMarkerType: 'square'},
{  y: 73795, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '湖光的PT統計(總分514669)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40573,
				            interval: 4057,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3504},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3812},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2022},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1854},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8354},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6852},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11014},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8138},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3887},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14920},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15682},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6862},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15104},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 18349},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27716},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 40573},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20706},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15388},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14738},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20757},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13742},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14059},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14877},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9889},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3916},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18392},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11428},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11171},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10948},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5051},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12333},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11775},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3949},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11433},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8398},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18261},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "湖光CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4076},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7324},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7542},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16619},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11728},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 27526},
]},
],
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

                   text: '湖光的PT構成(總分514669)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 368654, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 71200, name: '強襲', legendMarkerType: 'square'},
{  y: 74815, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分512236)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37175,
				            interval: 3717,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7369},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1294},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7961},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10942},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 251},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9775},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2569},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4864},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5297},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11254},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12922},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18700},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7280},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30046},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20651},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 28},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15407},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2818},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13636},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13871},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7366},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19135},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11458},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 3178},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31146},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30114},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 27751},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17195},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 37175},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 35932},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4234},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5750},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6687},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3884},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9307},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 25896},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12667},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12709},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5563},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8154},
]},
],
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

                   text: '冰的PT構成(總分512236)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 417385, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 81134, name: '強襲', legendMarkerType: 'square'},
{  y: 13717, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '無銘的PT統計(總分473068)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41369,
				            interval: 4136,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3412},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5712},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14868},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12441},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10235},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 21773},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14563},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3947},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7324},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8027},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1530},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3328},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3869},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7027},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 23},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5325},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10878},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8450},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 41369},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 27289},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11339},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 18386},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8033},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6085},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7793},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7407},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12141},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7819},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4963},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10984},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8937},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8769},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18254},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13954},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10710},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19289},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6660},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "無銘CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3199},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5070},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14199},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1757},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9366},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6648},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9789},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16859},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13268},
]},
],
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

                   text: '無銘的PT構成(總分473068)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 309909, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 83004, name: '強襲', legendMarkerType: 'square'},
{  y: 80155, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分451994)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42782,
				            interval: 4278,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5944},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3751},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6484},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3069},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6835},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8879},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5269},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8570},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3104},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12303},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3456},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18378},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11131},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5988},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5564},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4225},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9852},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23039},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 42782},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 28689},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5659},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11699},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12997},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9323},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12320},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13968},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16588},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5353},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3359},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9293},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6932},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12614},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9169},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7624},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18473},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3246},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17631},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6262},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 29620},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12328},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10224},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分451994)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 299866, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 79311, name: '強襲', legendMarkerType: 'square'},
{  y: 72817, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西沙斯的PT統計(總分443251)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 37479,
				            interval: 3747,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10041},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5888},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10994},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16043},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 37479},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5729},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4608},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3854},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4827},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1768},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4805},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10129},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5525},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5475},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12671},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16582},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18798},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20476},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19910},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 34205},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13362},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7275},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11676},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12091},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9424},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12611},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12355},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16193},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16879},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12791},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17814},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1880},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 729},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西沙斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8357},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10860},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13101},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16046},
]},
],
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

                   text: '西沙斯的PT構成(總分443251)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 314442, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 48364, name: '強襲', legendMarkerType: 'square'},
{  y: 80445, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽西的PT統計(總分269551)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19161,
				            interval: 1916,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1137},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5204},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7425},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11579},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5467},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11964},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5199},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7185},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4130},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11902},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14638},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4674},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5155},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18688},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6844},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5107},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5990},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13935},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6858},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6773},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8765},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6545},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17743},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3571},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3801},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5355},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13683},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18358},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9734},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2981},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19161},
]},
],
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

                   text: '賽西的PT構成(總分269551)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 192907, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 76644, name: '強襲', legendMarkerType: 'square'},
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
				            text: '哈里天使的PT統計(總分789366)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49108,
				            interval: 4910,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈里天使殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12172},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2382},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5765},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14712},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10824},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6788},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10897},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10268},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6611},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11868},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5411},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8796},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22128},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 43646},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 36389},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14023},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15780},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 48041},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 34170},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10228},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14649},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21733},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19612},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 47971},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31436},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 27060},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19287},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17770},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 49108},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 42720},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈里天使CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7296},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7730},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8177},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9508},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1347},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11666},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19821},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18165},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈里天使強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10047},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5449},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6503},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7496},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3652},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6684},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23558},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8323},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11699},
]},
],
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

                   text: '哈里天使的PT構成(總分789366)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 622245, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 83411, name: '強襲', legendMarkerType: 'square'},
{  y: 83710, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '遙。不可及的天使的PT統計(總分703115)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43215,
				            interval: 4321,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "遙。不可及的天使CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6954},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5720},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10609},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8813},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5811},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11933},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10272},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11969},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10207},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10304},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11302},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "遙。不可及的天使殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6751},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9416},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9693},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10384},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8863},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4150},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12926},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10132},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7617},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9265},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5474},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7314},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6961},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13502},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 30996},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24526},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23451},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11423},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22630},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20132},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 43215},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20946},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16336},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 39562},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31059},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 31466},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26177},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19575},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 38808},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 39924},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "遙。不可及的天使強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6393},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2628},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5355},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5922},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 385},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15864},
]},
],
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

                   text: '遙。不可及的天使的PT構成(總分703115)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 562674, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 36547, name: '強襲', legendMarkerType: 'square'},
{  y: 103894, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寶寶馬的PT統計(總分698702)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59570,
				            interval: 5957,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寶寶馬殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4820},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4122},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11769},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3036},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10375},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7255},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10737},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5093},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13682},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17797},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8919},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 374},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 991},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19004},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 30479},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 41997},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4605},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15939},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11191},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 35899},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 59570},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 55888},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 26045},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32843},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 42417},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20331},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 50703},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16936},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13373},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 42809},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寶寶馬強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2634},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11591},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 252},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12965},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13720},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6730},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寶寶馬CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4947},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3771},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6421},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4674},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3800},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2237},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5961},
]},
],
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

                   text: '寶寶馬的PT構成(總分698702)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 618999, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 47892, name: '強襲', legendMarkerType: 'square'},
{  y: 31811, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紅羊的PT統計(總分678074)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46503,
				            interval: 4650,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紅羊殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1371},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6255},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9244},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4266},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8544},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7119},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15676},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6319},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9385},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5114},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10606},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9514},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11990},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16524},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 30919},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 30088},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11924},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20748},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23418},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 26350},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22061},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 40351},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 42654},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 35319},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18805},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 46503},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 43261},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 29614},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13199},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紅羊強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3090},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6590},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12985},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10846},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紅羊CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3613},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5085},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4245},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5230},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7233},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12323},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5797},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9697},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10642},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11343},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12214},
]},
],
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

                   text: '紅羊的PT構成(總分678074)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 557141, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33511, name: '強襲', legendMarkerType: 'square'},
{  y: 87422, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '夏恩的PT統計(總分663331)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64783,
				            interval: 6478,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夏恩殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3391},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12821},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9040},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10416},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10774},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10571},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6123},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8642},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10214},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9556},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 20951},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20254},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16859},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 64783},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 30948},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 41135},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6570},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 35864},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19355},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 23632},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7776},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11968},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 32504},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 49373},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 36219},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 49394},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夏恩強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14988},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15402},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4389},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夏恩CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7190},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8365},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3983},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7054},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8710},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4190},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10115},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19812},
]},
],
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

                   text: '夏恩的PT構成(總分663331)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 559133, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 34779, name: '強襲', legendMarkerType: 'square'},
{  y: 69419, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Eason的PT統計(總分662289)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40769,
				            interval: 4076,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "EasonCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4496},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4982},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11243},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1364},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1389},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9855},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9049},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9949},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7624},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11820},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19055},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Eason殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5720},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8631},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5362},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9683},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6907},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12941},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6446},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3723},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10875},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16666},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9645},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9050},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15370},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11292},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 40769},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18278},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11523},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6689},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 25971},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16597},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14168},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 37902},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 18880},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 35278},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 37000},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25482},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9269},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17918},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 173},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10277},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Eason強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3197},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4626},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6067},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1645},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 960},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8565},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17046},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10570},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2865},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14925},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 28898},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13614},
]},
],
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

                   text: 'Eason的PT構成(總分662289)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 458485, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 112978, name: '強襲', legendMarkerType: 'square'},
{  y: 90826, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '西法的PT統計(總分634895)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50321,
				            interval: 5032,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西法殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7491},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7979},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13205},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12696},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11470},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10447},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5982},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12350},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9246},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3680},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22819},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12731},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25403},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20957},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10013},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9947},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12707},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 22357},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 50321},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19916},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 27145},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16105},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19814},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 29564},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12756},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20132},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 45308},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 29545},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4981},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6380},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8385},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6951},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3403},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15405},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "西法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4784},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7472},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9093},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15805},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16478},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11938},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13778},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7956},
]},
],
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

                   text: '西法的PT構成(總分634895)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 502086, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 87304, name: '強襲', legendMarkerType: 'square'},
{  y: 45505, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞力士的PT統計(總分618594)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40797,
				            interval: 4079,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞力士殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8988},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10480},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8400},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15557},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12878},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12579},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8297},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10900},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13092},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6463},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11233},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8117},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3242},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 23539},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 40797},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17521},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13881},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14252},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2485},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 35195},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23554},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7599},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25691},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25769},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 26764},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19428},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23958},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 32853},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12750},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞力士CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2528},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10894},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11826},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9373},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13043},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 23897},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14476},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞力士強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6793},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7985},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13513},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13293},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14711},
]},
],
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

                   text: '亞力士的PT構成(總分618594)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 476262, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 56295, name: '強襲', legendMarkerType: 'square'},
{  y: 86037, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '背魔的PT統計(總分597631)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49401,
				            interval: 4940,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "背魔殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6619},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 551},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5133},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11151},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3662},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11515},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7485},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4496},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15289},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10381},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2882},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 36376},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16902},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18494},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6952},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12962},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 26939},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 28473},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10519},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14965},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22479},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 42405},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 49401},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8753},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3425},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 34331},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 34938},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14771},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "背魔CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6007},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4700},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6246},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7993},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10214},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2393},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8425},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5933},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7960},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "背魔強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3701},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5012},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4588},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14307},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 695},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10102},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5896},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13152},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10928},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7130},
]},
],
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

                   text: '背魔的PT構成(總分597631)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 462249, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 75511, name: '強襲', legendMarkerType: 'square'},
{  y: 59871, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '費洛武士的PT統計(總分580869)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 56947,
				            interval: 5694,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費洛武士殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4185},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7689},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8218},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4720},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7618},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4528},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5494},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5312},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12646},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9087},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11367},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9002},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8864},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 2817},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 56947},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 37749},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10592},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7115},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16910},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5404},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10045},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15201},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17410},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19172},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16669},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5573},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 37996},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20327},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 45708},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費洛武士強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3580},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6344},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6658},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6781},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1888},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3072},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9793},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11242},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9438},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9663},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6367},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "費洛武士CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3928},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4807},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7527},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14424},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19677},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11783},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9240},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10292},
]},
],
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

                   text: '費洛武士的PT構成(總分580869)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 424365, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 74826, name: '強襲', legendMarkerType: 'square'},
{  y: 81678, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '若雪的PT統計(總分578567)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38832,
				            interval: 3883,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "若雪殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7165},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8763},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11853},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4521},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9898},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 12685},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9194},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13292},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10265},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5806},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2494},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9378},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 23562},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13461},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 30363},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 35947},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14120},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 27122},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23398},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9559},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4409},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10251},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 38832},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18652},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 37201},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6851},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7991},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 31784},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 26641},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 36692},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "若雪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4434},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5542},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6878},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 402},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3682},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2406},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4280},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11027},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11374},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "若雪CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1992},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7098},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4905},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8087},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4310},
]},
],
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

                   text: '若雪的PT構成(總分578567)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 502150, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 50025, name: '強襲', legendMarkerType: 'square'},
{  y: 26392, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '月靈的PT統計(總分577132)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51655,
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
                                    name: "月靈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4540},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7961},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4087},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10276},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1985},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6640},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3192},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13045},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13516},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10190},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6048},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3540},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9393},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 38371},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 28435},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10888},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11342},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 31811},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17107},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2886},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11337},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16307},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 43557},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 51655},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 36376},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 33194},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "月靈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5484},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5705},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9306},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10302},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10548},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20786},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11037},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7915},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8394},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9442},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11433},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "月靈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5558},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6226},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9703},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17614},
]},
],
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

                   text: '月靈的PT構成(總分577132)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 427679, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 110352, name: '強襲', legendMarkerType: 'square'},
{  y: 39101, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '卡洛特的PT統計(總分531781)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39671,
				            interval: 3967,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡洛特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8106},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2966},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4413},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11882},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9490},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13986},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12417},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13751},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5404},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13597},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8192},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4731},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 27125},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17248},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11694},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8074},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21444},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 30074},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8040},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6988},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10772},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9551},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14744},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17994},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 36215},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3784},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21357},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 687},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 39671},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 27249},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡洛特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3052},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5204},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8394},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14476},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13195},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20563},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9490},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7996},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10114},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10137},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "卡洛特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7514},
]},
],
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

                   text: '卡洛特的PT構成(總分531781)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 421646, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 102621, name: '強襲', legendMarkerType: 'square'},
{  y: 7514, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '傑特的PT統計(總分522619)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40291,
				            interval: 4029,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 12349},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5161},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7038},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6268},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10770},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2318},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5173},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6165},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7734},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 25},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12680},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6681},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 16324},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20291},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 40291},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7254},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22033},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10697},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5264},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2409},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13347},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8348},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7927},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13539},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7464},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 29980},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9683},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 36748},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15415},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5147},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8251},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5576},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9178},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10032},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10266},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13982},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6688},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7535},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5380},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12897},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3578},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4041},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4079},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5079},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5644},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5373},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13573},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9087},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7178},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6274},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14405},
]},
],
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

                   text: '傑特的PT構成(總分522619)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 349376, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 78311, name: '強襲', legendMarkerType: 'square'},
{  y: 94932, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '智多星的PT統計(總分510448)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34897,
				            interval: 3489,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "智多星殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5584},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5455},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2051},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8374},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10852},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6555},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10756},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5753},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5377},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7488},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5112},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9110},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5026},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 27272},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8738},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8914},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 27},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1077},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4999},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7372},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12400},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 14079},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11979},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4982},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8272},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4736},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14202},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11770},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "智多星強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6347},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10263},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13014},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9243},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9376},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 34897},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16766},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14600},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20528},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10365},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "智多星CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5400},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6976},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14289},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3014},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11763},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 25573},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18981},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5926},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8550},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19080},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17185},
]},
],
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

                   text: '智多星的PT構成(總分510448)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 228312, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 145399, name: '強襲', legendMarkerType: 'square'},
{  y: 136737, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '多利斯坦的PT統計(總分489997)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38082,
				            interval: 3808,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "多利斯坦殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7588},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7313},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12475},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7960},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10138},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5931},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14689},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14233},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9985},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15211},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13993},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10772},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14432},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8943},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 28880},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16885},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14616},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 38082},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9743},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11156},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15519},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4953},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19749},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5318},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7318},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2103},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13140},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13147},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4479},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14112},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "多利斯坦CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3603},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4629},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10071},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10434},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10703},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8114},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14866},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "多利斯坦強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6078},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8150},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8405},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7354},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10399},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14328},
]},
],
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

                   text: '多利斯坦的PT構成(總分489997)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 372863, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 54714, name: '強襲', legendMarkerType: 'square'},
{  y: 62420, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '爆乳騎士的PT統計(總分485372)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42633,
				            interval: 4263,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "爆乳騎士殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4245},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8752},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8024},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8308},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3776},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13266},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5946},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11367},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13692},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4166},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12583},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12270},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15610},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 27125},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 37124},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 42633},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19998},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6089},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4895},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15048},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2578},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9775},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21800},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11741},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7277},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13065},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13896},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20538},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9400},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "爆乳騎士CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8866},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11504},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12084},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "爆乳騎士強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11045},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6012},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6970},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9169},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8266},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 26469},
]},
],
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

                   text: '爆乳騎士的PT構成(總分485372)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 384987, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 67931, name: '強襲', legendMarkerType: 'square'},
{  y: 32454, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '緋炎狼的PT統計(總分456088)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44278,
				            interval: 4427,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋炎狼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6830},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1136},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1708},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4599},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7463},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2298},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11911},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8172},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10847},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7246},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4587},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8404},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7798},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14916},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 44278},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8212},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19491},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7104},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 28038},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10789},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2749},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 17246},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13982},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12926},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8848},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 35893},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 41343},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 24001},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8505},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12908},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋炎狼CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6000},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9795},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 5260},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11760},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋炎狼強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3757},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4739},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6350},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4383},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1367},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8449},
]},
],
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

                   text: '緋炎狼的PT構成(總分456088)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 394228, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 29045, name: '強襲', legendMarkerType: 'square'},
{  y: 32815, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '凱爾的PT統計(總分425466)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 54741,
				            interval: 5474,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 745},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3260},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8603},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7284},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2599},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7821},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12995},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3580},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7093},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9822},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4771},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1575},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1106},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10236},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22724},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13393},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9223},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2614},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14743},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9132},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14144},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9582},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6363},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5573},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8759},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 58},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7324},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8094},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 12849},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8945},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11327},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7856},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8974},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10787},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12089},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19186},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20968},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 40262},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 54741},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19268},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 35638},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6127},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7054},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4110},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3768},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2608},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10332},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9348},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3223},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9400},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9199},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9292},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15005},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11022},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8160},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17188},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13379},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11065},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5914},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17765},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6106},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14807},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12602},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5939},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6691},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13105},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6638},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6731},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9426},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7166},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11683},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13982},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8404},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14603},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17991},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23539},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 32463},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21166},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4344},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5788},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11207},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8480},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4701},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7662},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6274},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10836},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8484},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8600},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13197},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13702},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4452},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3989},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5378},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5630},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5707},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8567},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8100},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2749},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2876},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11614},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10383},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7329},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10407},
]},
],
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

                   text: '凱爾的PT構成(總分425466)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 235010, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 87181, name: '強襲', legendMarkerType: 'square'},
{  y: 103275, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Dark的PT統計(總分412485)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28784,
				            interval: 2878,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dark強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2994},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3832},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14871},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12528},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10180},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2856},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dark殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4978},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11323},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6811},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2658},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5892},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7982},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10493},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12340},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10836},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5211},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14750},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2257},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 21607},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28784},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10944},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 18702},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12401},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11626},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6414},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16584},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15163},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3556},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5656},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13760},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6094},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5489},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9450},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13395},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13647},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "DarkCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3587},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4721},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5062},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6661},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12705},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11996},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11689},
]},
],
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

                   text: 'Dark的PT構成(總分412485)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 308803, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 47261, name: '強襲', legendMarkerType: 'square'},
{  y: 56421, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
