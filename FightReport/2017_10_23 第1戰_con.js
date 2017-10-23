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
				
				            maximum: 665361,
				            interval: 66536,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 141866},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 168599},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 141565},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 179322},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 210118},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 201668},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 232642},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 223164},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 239793},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 285079},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 282360},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 549339},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 314005},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 472452},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 257211},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 290123},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 253023},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 447852},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 342664},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 401245},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 301654},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 423837},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 389573},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 434554},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 371153},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 461162},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 395260},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 527899},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 460067},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 501073},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 164329},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 176501},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 209080},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 247624},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 262041},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 234104},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 257314},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 246759},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 241788},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 247355},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 283483},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 231087},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 269291},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 230268},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 440609},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 404821},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 484706},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 395854},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 465206},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 448732},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 449684},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 515482},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 575875},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 491423},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 665361},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 493852},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 565565},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 440014},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 554231},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 463434},
]},
],
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
				
				            maximum: 21056195,
				            interval: 2105619,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 141866},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 310465},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 452030},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 631352},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 841470},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1043138},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1275780},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1498944},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1738737},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2023816},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2306176},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2855515},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3169520},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3641972},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3899183},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4189306},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4442329},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4890181},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5232845},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5634090},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5935744},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6359581},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6749154},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7183708},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7554861},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8016023},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8411283},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8939182},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9399249},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9900322},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 164329},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 340830},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 549910},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 797534},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1059575},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1293679},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1550993},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1797752},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2039540},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2286895},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2570378},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2801465},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3070756},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3301024},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3741633},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4146454},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4631160},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 5027014},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5492220},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5940952},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6390636},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6906118},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7481993},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7973416},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8638777},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9132629},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9698194},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10138208},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10692439},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11155873},
]},
],
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
				
				            maximum: 444248,
				            interval: 44424,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 33951},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 45330},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 22049},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 30170},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 23637},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 46386},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 26726},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 43693},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 50570},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 19349},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 54253},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 136306},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 45130},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 73375},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 43193},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 61007},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 40635},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 126903},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 95677},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 168496},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 92144},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 208382},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 172624},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 141897},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 165924},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 191804},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 138047},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 138978},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 147611},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 179771},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 114353},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 118995},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 134576},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 128530},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 118859},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 153719},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 153506},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 179544},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 152305},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 113496},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 171019},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 143395},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 157350},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 163083},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 190314},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 215783},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 253761},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 227508},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 265331},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 271384},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 292754},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 275340},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 375854},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 322883},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 444248},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 355031},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 299565},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 308851},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 300082},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 326708},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 84274},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 91478},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 89517},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 119614},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 146671},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 123528},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 148891},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 137103},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 139439},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 214947},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 170235},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 321863},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 186504},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 333150},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 150614},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 167752},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 185795},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 226513},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 180395},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 149536},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 110216},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 132734},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 133643},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 163154},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 138584},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 163308},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 184840},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 180864},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 189460},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 232661},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 22947},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 24735},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 28476},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 61250},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 41529},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 44602},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 38032},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 42811},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 47141},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 57200},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 49239},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 48253},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 50745},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 45174},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 67731},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 129914},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 97786},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 73820},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 90067},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 82128},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 82378},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 79837},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 95157},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 70352},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 144624},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 110474},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 107986},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 92369},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 98736},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 61686},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 27029},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 32771},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 46028},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 57844},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 101653},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 35783},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 65776},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 24404},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 42342},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 76659},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 63225},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 39439},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 61196},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 22011},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 182564},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 59124},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 133159},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 94526},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 109808},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 95220},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 74552},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 160305},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 104864},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 98188},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 76489},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 28347},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 158014},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 38794},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 155413},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 75040},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 23641},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 31791},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 29999},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 29538},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 39810},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 31754},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 57025},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 42368},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 49784},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 50783},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 57872},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 91170},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 82371},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 65927},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 63404},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 61364},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 26593},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 94436},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 66592},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 83213},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 99294},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 82721},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 83306},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 129503},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 66645},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 106050},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 72373},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 208057},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 122996},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 88641},
]},
],
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
				            text: '喵鼠的PT統計(總分895615)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 124477,
				            interval: 12447,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8577},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3927},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 785},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2409},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4625},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4019},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5802},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3326},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5064},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3747},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9576},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3362},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 636},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8517},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4660},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2497},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13244},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5749},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9800},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 4729},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19487},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10550},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 17194},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11331},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5946},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 18839},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13319},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13289},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14039},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13883},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 29198},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 54610},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17840},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22011},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14669},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8855},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18557},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21548},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 48937},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 25029},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20281},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 29552},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 124477},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 32806},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7313},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19681},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14110},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 25973},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13589},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 33544},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 31239},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 22123},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 16745},
]},
],
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

                   text: '喵鼠的PT構成(總分895615)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 124538, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 184317, name: '強襲', legendMarkerType: 'square'},
{  y: 586760, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分661831)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47561,
				            interval: 4756,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7381},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6822},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9161},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11046},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12051},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6072},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9668},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10409},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13267},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10158},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10780},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 35270},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8130},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13586},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10853},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 32000},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8445},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15236},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11005},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3290},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14866},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6484},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13482},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16566},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13442},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 3739},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8780},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5807},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 3793},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18869},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7673},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29046},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7822},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5355},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24534},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 20417},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15180},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 47561},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23889},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23924},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14996},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4140},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9855},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12074},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14673},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7509},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18268},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 24457},
]},
],
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

                   text: '阿拉的PT構成(總分661831)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 350458, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 220397, name: '強襲', legendMarkerType: 'square'},
{  y: 90976, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分626340)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48764,
				            interval: 4876,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4145},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8208},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4809},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13392},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11503},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10259},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10149},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1929},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2594},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12458},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11884},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 21785},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 48764},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7502},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24349},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13857},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 26717},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 25574},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12185},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8456},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6785},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 762},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11340},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6702},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9156},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10054},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17557},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6753},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10900},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10901},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16142},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18440},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19346},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25979},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20434},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6617},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 18540},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 19107},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6902},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 28378},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 28136},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18904},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21412},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6574},
]},
],
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

                   text: '葬月的PT構成(總分626340)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 360528, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 154570, name: '強襲', legendMarkerType: 'square'},
{  y: 111242, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分604795)'
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
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9341},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8592},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12899},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8685},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 31518},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13884},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17160},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24656},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 33777},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5968},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3325},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8399},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4364},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4394},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8515},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4582},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2598},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4649},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10758},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4483},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2888},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7713},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8443},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5968},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1713},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2393},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 800},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7948},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2415},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7436},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9009},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8312},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6496},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15166},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10031},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10532},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6188},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10487},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12085},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13506},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 23528},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 30998},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 25872},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 38691},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20984},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 28435},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 64211},
]},
],
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

                   text: '雪歌的PT構成(總分604795)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 169298, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 160512, name: '強襲', legendMarkerType: 'square'},
{  y: 274985, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分601726)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45954,
				            interval: 4595,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 448},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3971},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4563},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7357},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4845},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5051},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13181},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7591},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10434},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8003},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5413},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3374},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 13873},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7546},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8459},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3516},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14683},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 331},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 12350},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1477},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10311},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6146},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7050},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10003},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 9395},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13101},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 15846},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3470},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4288},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 28037},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15156},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 45954},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18865},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11930},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7553},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 32637},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8990},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8371},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 10131},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11091},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7287},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 13827},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10172},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 25953},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 40649},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14339},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 18098},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 28641},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 27969},
]},
],
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

                   text: '土土昕的PT構成(總分601726)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 208318, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 176880, name: '強襲', legendMarkerType: 'square'},
{  y: 216528, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分557628)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29392,
				            interval: 2939,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2210},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4128},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6144},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6971},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13380},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2882},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7088},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5174},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6518},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3537},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10634},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11874},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7013},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12994},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7848},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19196},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23849},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19186},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6676},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11290},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6119},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6336},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6803},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14937},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13721},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11891},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10515},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6673},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10294},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6757},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6527},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17632},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7458},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9241},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14919},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25184},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 7465},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 29392},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16459},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18293},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18324},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19905},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20976},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5913},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7696},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9802},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20054},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19750},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分557628)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 275881, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 218532, name: '強襲', legendMarkerType: 'square'},
{  y: 63215, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分546794)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 51618,
				            interval: 5161,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6132},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6936},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7930},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8604},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13290},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7250},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3634},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11878},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9051},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15513},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2322},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 22391},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6019},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11684},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5656},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11719},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 23317},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 51618},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 24417},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17481},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3834},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13303},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8531},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15297},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3738},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21430},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7855},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 4768},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14987},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12733},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3787},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4407},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6603},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7046},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7473},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7934},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8132},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13043},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4919},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 11906},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 14829},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11645},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15286},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 36699},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11808},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7959},
]},
],
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

                   text: '冰的PT構成(總分546794)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 373318, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 153709, name: '強襲', legendMarkerType: 'square'},
{  y: 19767, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '緋煌的PT統計(總分546172)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40191,
				            interval: 4019,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4790},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16002},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5512},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12279},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11795},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14782},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15568},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 40191},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6056},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6697},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12557},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11586},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19592},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14668},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11069},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14902},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 27174},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "緋煌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6590},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3849},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8790},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7462},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10946},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9506},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9820},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14884},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3611},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13615},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14556},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5170},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 31017},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14808},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5792},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9453},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13923},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15648},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7566},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2627},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9969},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13167},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9567},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8410},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12467},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4997},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11935},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20807},
]},
],
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

                   text: '緋煌的PT構成(總分546172)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 300952, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 124301, name: '強襲', legendMarkerType: 'square'},
{  y: 120919, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分505643)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29218,
				            interval: 2921,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4334},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6507},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1095},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13090},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 18256},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 21196},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 28930},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17567},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16160},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21878},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13759},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 29218},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7817},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5866},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2914},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 2507},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4187},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14031},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6248},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6396},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6254},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6373},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9478},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7585},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7219},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7776},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1077},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15110},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17656},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12473},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4077},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9044},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6815},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3866},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4657},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8031},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16504},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10648},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13765},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13449},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13106},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6908},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6488},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7774},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18025},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4717},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9809},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15003},
]},
],
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

                   text: '嘎喵的PT構成(總分505643)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 332957, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 103962, name: '強襲', legendMarkerType: 'square'},
{  y: 68724, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分489373)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 63999,
				            interval: 6399,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 36, 0), y: 23834},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 16645},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20841},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 23548},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 7950},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 36144},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 63999},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7521},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6773},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3139},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8475},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5835},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5873},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10514},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4506},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9977},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15936},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9075},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10548},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6085},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 16333},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11095},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 1371},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12452},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 23138},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14408},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6408},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9738},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 3786},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3203},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 421},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8705},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6870},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12894},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7057},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4371},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16576},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 33329},
]},
],
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

                   text: '依司瑪耳的PT構成(總分489373)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 242136, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 192961, name: '強襲', legendMarkerType: 'square'},
{  y: 54276, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神隱的PT統計(總分488420)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30829,
				            interval: 3082,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7218},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 281},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16673},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17472},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 24331},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14080},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6454},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2617},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6994},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4858},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3641},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4246},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9233},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 206},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9835},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3374},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6198},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10253},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10102},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30829},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15375},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18757},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21109},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16783},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4061},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10943},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3018},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8314},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12580},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9144},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2363},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4307},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14611},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7811},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6730},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10845},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神隱強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11084},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11641},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6073},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8741},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10613},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21636},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18907},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 22225},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 21854},
]},
],
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

                   text: '神隱的PT構成(總分488420)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 275591, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 132774, name: '強襲', legendMarkerType: 'square'},
{  y: 80055, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分476996)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 39077,
				            interval: 3907,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7488},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5446},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4273},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9548},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7164},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11268},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12149},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7764},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5256},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13949},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 24842},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 27223},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11327},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 39077},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19206},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13557},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 25},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4331},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5658},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15392},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 5728},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16423},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7350},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 5963},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8438},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8331},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16521},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6605},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14468},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6074},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15064},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 23665},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10154},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17024},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4107},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5675},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6754},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6893},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14783},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11013},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3258},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5020},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12742},
]},
],
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

                   text: '寇內爾緹的PT構成(總分476996)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 340844, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 70245, name: '強襲', legendMarkerType: 'square'},
{  y: 65907, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '幻想魔術師的PT統計(總分473864)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 55148,
				            interval: 5514,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3059},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2526},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3686},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4926},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4133},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4995},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4117},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2228},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10031},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5494},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4410},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11631},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23710},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11188},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14236},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13111},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5923},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 56},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 4781},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1956},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7123},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6435},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10473},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10105},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10332},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 18823},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8378},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 17060},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10475},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9456},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5875},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19802},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 24118},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 22906},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10764},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "幻想魔術師強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5407},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8154},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 18677},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9275},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7182},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17471},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 2443},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 55148},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21785},
]},
],
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

                   text: '幻想魔術師的PT構成(總分473864)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 199488, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 145542, name: '強襲', legendMarkerType: 'square'},
{  y: 128834, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分425220)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33754,
				            interval: 3375,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4387},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9948},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3695},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3057},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7685},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6107},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7383},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 3130},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10592},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 19529},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10582},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 26340},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 27751},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20983},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7329},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8497},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 2115},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3796},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6883},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11660},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6408},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16086},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3709},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13049},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5667},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 13534},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13416},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9905},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4681},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6616},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11666},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17768},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4562},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5031},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5391},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6764},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8550},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13217},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23997},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 33754},
]},
],
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

                   text: '藏月的PT構成(總分425220)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 283223, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 101266, name: '強襲', legendMarkerType: 'square'},
{  y: 40731, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分399862)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 67177,
				            interval: 6717,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5447},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8279},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5354},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19145},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 67177},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4510},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29953},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4100},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5083},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9114},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11892},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6031},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6657},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12955},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6195},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 672},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9311},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1332},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14225},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11913},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11252},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7179},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13523},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10608},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12729},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 40723},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17279},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12343},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 18771},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16110},
]},
],
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

                   text: '魔法的PT構成(總分399862)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 271299, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 81339, name: '強襲', legendMarkerType: 'square'},
{  y: 47224, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分397834)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27555,
				            interval: 2755,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6160},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2743},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4137},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 21},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3018},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8392},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5978},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4738},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8821},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14827},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3019},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 27555},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10200},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25188},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2721},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 4069},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9327},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 25239},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8151},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6099},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7312},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1022},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12801},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 57},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 6338},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9637},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12584},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10422},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 16590},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 8527},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 672},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4132},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5152},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14243},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7931},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1962},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3036},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3664},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 684},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4149},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4908},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4868},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5026},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5882},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1074},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7079},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7701},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12276},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16895},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12014},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8793},
]},
],
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

                   text: '亞歷的PT構成(總分397834)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 265693, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 98049, name: '強襲', legendMarkerType: 'square'},
{  y: 34092, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分379974)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17132,
				            interval: 1713,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6404},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5865},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5025},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6287},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7529},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5034},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14684},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1831},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13007},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16722},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17132},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16566},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5711},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14060},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 744},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13936},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1567},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6036},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6084},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5408},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9818},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7923},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11422},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5295},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10001},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8497},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13251},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10548},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5601},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12663},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5537},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 8342},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8565},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6202},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2568},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13783},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 10158},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17100},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7542},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4126},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13200},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13026},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5174},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分379974)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 229437, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 116086, name: '強襲', legendMarkerType: 'square'},
{  y: 34451, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分368443)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29963,
				            interval: 2996,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1853},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7551},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6425},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5057},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8517},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1542},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5041},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4805},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2826},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6418},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4715},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8083},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8596},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9044},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 3526},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 27},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10422},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4333},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4960},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2454},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 88},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3692},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4177},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 943},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7516},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6928},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11228},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 2080},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4159},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8283},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11316},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12427},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11028},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14702},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 29963},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20155},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18867},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 26815},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 22644},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9045},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17929},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18263},
]},
],
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

                   text: '秋風冷月的PT構成(總分368443)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 142847, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 180359, name: '強襲', legendMarkerType: 'square'},
{  y: 45237, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分278394)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36485,
				            interval: 3648,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4136},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6363},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5191},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7423},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 951},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10022},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7825},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13430},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4555},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2915},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4517},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 11131},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4356},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4693},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 2382},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6356},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 4365},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7596},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1283},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5814},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5372},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3766},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3138},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2880},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8928},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14412},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8485},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18111},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9540},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 36485},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9357},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2180},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8434},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3686},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 28316},
]},
],
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

                   text: '阿榮的PT構成(總分278394)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 127580, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 98841, name: '強襲', legendMarkerType: 'square'},
{  y: 51973, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分175398)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50692,
				            interval: 5069,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7026},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8943},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 7103},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5343},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17218},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8637},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17935},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 50692},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 38, 0), y: 3873},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14984},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 18866},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11653},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3125},
]},
],
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

                   text: '冰紅茶的PT構成(總分175398)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 122897, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 49376, name: '強襲', legendMarkerType: 'square'},
{  y: 3125, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '辛比歐斯的PT統計(總分731587)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 48480,
				            interval: 4848,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "辛比歐斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3813},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6392},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9424},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1825},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4641},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8576},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4844},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14718},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12502},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7925},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11663},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11520},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8995},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11942},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10298},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10447},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3223},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12421},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18759},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 18659},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 25126},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 33453},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32639},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 33629},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 46989},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 17067},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 48480},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20214},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 10445},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "辛比歐斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9260},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14986},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8948},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9574},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5475},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10399},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 20355},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15829},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19971},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 34431},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14235},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 13339},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16399},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17129},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15907},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "辛比歐斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8253},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8832},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7504},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20132},
]},
],
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

                   text: '辛比歐斯的PT構成(總分731587)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 460629, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 226237, name: '強襲', legendMarkerType: 'square'},
{  y: 44721, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'shiuan的PT統計(總分718288)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43834,
				            interval: 4383,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "shiuan殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10891},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6375},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10843},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7751},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9095},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2960},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9899},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7892},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10417},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 313},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14498},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12381},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12051},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16619},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 16366},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 43834},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20974},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6643},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9261},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19579},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8396},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15962},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 23470},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20993},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 36566},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 36308},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18145},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11940},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "shiuanCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5244},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9014},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9918},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 16182},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8299},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21995},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17328},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23582},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 28777},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20107},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17717},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "shiuan強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5630},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13670},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 7126},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10351},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8361},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12815},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 15136},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20269},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 26345},
]},
],
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

                   text: 'shiuan的PT構成(總分718288)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 420422, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 119703, name: '強襲', legendMarkerType: 'square'},
{  y: 178163, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾爾的PT統計(總分717037)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 49655,
				            interval: 4965,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4403},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15128},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9346},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12530},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 26351},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 25462},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 17361},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14486},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12669},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10622},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23852},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 29923},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 33399},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17211},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5534},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11896},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5655},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5135},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13081},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2864},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3179},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11517},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15218},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2940},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8303},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2315},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6244},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18291},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14105},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5262},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10487},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 33367},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 69},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 29488},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 49655},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21615},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15037},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13011},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20012},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8174},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26276},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18113},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7724},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11421},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 14482},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10528},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 4712},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11019},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 27540},
]},
],
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

                   text: '艾爾的PT構成(總分717037)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 384592, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 252743, name: '強襲', legendMarkerType: 'square'},
{  y: 79702, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Bao的PT統計(總分661621)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 85274,
				            interval: 8527,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Bao殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6321},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5875},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4113},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4824},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2303},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6899},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12026},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4211},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5247},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9849},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2170},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9312},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 495},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10962},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14055},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 3749},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12613},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11165},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11505},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 10732},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 9150},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 6168},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13551},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6555},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4581},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5922},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 5904},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 9890},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 7714},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "BaoCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7911},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10542},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16041},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13920},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24759},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22645},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13215},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 85274},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 54550},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 24065},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Bao強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6487},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10592},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10995},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12479},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11164},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13988},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11852},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 19672},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20984},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 22041},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 30584},
]},
],
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

                   text: 'Bao的PT構成(總分661621)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 217861, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 170838, name: '強襲', legendMarkerType: 'square'},
{  y: 272922, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '塔希雷的PT統計(總分637939)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36525,
				            interval: 3652,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "塔希雷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8529},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9090},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10608},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3007},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8462},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10406},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7597},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8536},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11933},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11940},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4538},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5954},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12558},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11754},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17318},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27197},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22628},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 25829},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 69},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2949},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 21989},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7321},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17174},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31659},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 17678},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 9956},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3175},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 36525},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "塔希雷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7537},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13365},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14822},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16438},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 17604},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14806},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14442},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 29984},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "塔希雷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12389},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9024},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7936},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7653},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 13057},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13405},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12554},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14040},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12834},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20637},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11113},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 7920},
]},
],
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

                   text: '塔希雷的PT構成(總分637939)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 366379, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 142562, name: '強襲', legendMarkerType: 'square'},
{  y: 128998, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '和平修羅的PT統計(總分636987)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50684,
				            interval: 5068,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "和平修羅殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7886},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3917},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5579},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 270},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8382},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11683},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10337},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12617},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7934},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5577},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6007},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5465},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10772},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4735},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14877},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9187},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 17782},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4672},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 10564},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 45427},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23627},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18238},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17320},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8250},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 50684},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 22193},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6472},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8708},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25114},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 25474},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "和平修羅強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6525},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11513},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21857},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 27399},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 11180},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4309},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1569},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "和平修羅CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7511},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5685},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13621},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 22991},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6609},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11154},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 10214},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 27434},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 22717},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14949},
]},
],
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

                   text: '和平修羅的PT構成(總分636987)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 409750, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 84352, name: '強襲', legendMarkerType: 'square'},
{  y: 142885, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'MiMiC的PT統計(總分633942)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53803,
				            interval: 5380,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "MiMiC殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10600},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5578},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10230},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5047},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5250},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1380},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11331},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12314},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5203},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 24415},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19250},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 17338},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8590},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12003},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7367},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14870},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6568},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20378},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13361},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16033},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7008},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 33448},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29712},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3444},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8903},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11009},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14307},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7104},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11649},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "MiMiCCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10548},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 11060},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11498},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8975},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5381},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18823},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17004},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 53803},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17811},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "MiMiC強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9769},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7122},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 1079},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9015},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17997},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 28213},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 33822},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5759},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12573},
]},
],
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

                   text: 'MiMiC的PT構成(總分633942)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 353690, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 125349, name: '強襲', legendMarkerType: 'square'},
{  y: 154903, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Air的PT統計(總分612165)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46817,
				            interval: 4681,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Air殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2147},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9165},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8271},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8911},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 45},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13043},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8154},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3467},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5949},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8004},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17519},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14327},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9148},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13129},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 20256},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 14558},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21264},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 31818},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 35597},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16837},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 44542},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 7250},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 46817},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19186},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26270},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25434},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7592},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19580},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Air強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4992},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 15488},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11027},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8226},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9442},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16689},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15876},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14175},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "AirCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9209},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12530},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1627},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7617},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8407},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18580},
]},
],
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

                   text: 'Air的PT構成(總分612165)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 458280, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 95915, name: '強襲', legendMarkerType: 'square'},
{  y: 57970, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Liu的PT統計(總分604905)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35712,
				            interval: 3571,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Liu殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4143},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4296},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9071},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3107},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6276},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 4888},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 10899},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5149},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6637},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 17444},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 1887},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10538},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5907},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10655},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15949},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12091},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6968},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 27171},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 25967},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 35712},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20786},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 24937},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25575},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24891},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15657},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5926},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8677},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18415},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13004},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Liu強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3040},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4167},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6970},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7863},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3749},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14600},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9725},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 25444},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12178},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "LiuCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9160},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3300},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6479},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6992},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 13380},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10009},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27032},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16958},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20687},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20549},
]},
],
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

                   text: 'Liu的PT構成(總分604905)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 382623, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 87736, name: '強襲', legendMarkerType: 'square'},
{  y: 134546, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '斐新的PT統計(總分599134)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44779,
				            interval: 4477,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "斐新殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4381},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8554},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4682},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10132},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3241},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 11055},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5403},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5817},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 13894},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1098},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11547},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7996},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5979},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6149},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 9423},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5879},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6305},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15714},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6687},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12432},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 2046},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8859},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 27492},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 43657},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 30887},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 8882},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21566},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 38687},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19025},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 40635},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "斐新CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8202},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13236},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19605},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 44779},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22145},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 23195},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13811},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "斐新強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8053},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5318},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9177},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7829},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 11101},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14579},
]},
],
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

                   text: '斐新的PT構成(總分599134)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 398104, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 56057, name: '強襲', legendMarkerType: 'square'},
{  y: 144973, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '御劍唯心的PT統計(總分589326)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44797,
				            interval: 4479,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "御劍唯心殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8048},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 9699},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6569},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7079},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5224},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13439},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11035},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9297},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 12598},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5738},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11794},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6459},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7001},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4755},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19273},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6553},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16970},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6244},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16373},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17172},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10652},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8273},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6314},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15857},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31882},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 44797},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 37569},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 31121},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 34167},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "御劍唯心強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6422},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7442},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 16154},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8117},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17622},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12941},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "御劍唯心CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4211},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15876},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 41596},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 22121},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 14872},
]},
],
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

                   text: '御劍唯心的PT構成(總分589326)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 421952, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 68698, name: '強襲', legendMarkerType: 'square'},
{  y: 98676, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '涅口瑪魯的PT統計(總分588073)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27131,
				            interval: 2713,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "涅口瑪魯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6888},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7186},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3612},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7749},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 15297},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24368},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 16475},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 22192},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12551},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "涅口瑪魯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3983},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6563},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12377},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4392},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10238},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10275},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12386},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5881},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 935},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3712},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16895},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5504},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11820},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4555},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 10734},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13274},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9110},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6929},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5636},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5095},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17391},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11722},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 21163},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 23755},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9838},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 6384},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 16393},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25276},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20199},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 20093},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "涅口瑪魯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5995},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8375},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5679},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11848},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18851},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17003},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 27131},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 11218},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14648},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18499},
]},
],
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

                   text: '涅口瑪魯的PT構成(總分588073)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 332508, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 139247, name: '強襲', legendMarkerType: 'square'},
{  y: 116318, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '讓你很舒服的PT統計(總分553457)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42552,
				            interval: 4255,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "讓你很舒服強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9981},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 26823},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 25111},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 24549},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 42552},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 11944},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1209},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 27153},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 16122},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "讓你很舒服殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4260},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4686},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9306},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9290},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7292},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10156},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8028},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12340},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10309},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4175},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9423},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 10680},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8662},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9074},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7747},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8748},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4639},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 15689},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7042},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 29},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12595},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5362},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 19957},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9386},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 34824},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7633},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3174},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 10027},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 13457},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9985},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "讓你很舒服CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11708},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21996},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 20232},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26102},
]},
],
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

                   text: '讓你很舒服的PT構成(總分553457)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 287975, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 185444, name: '強襲', legendMarkerType: 'square'},
{  y: 80038, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '薑薑的PT統計(總分523286)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 32793,
				            interval: 3279,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薑薑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 7396},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8441},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11897},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9370},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8319},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10069},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10293},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11186},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5927},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8202},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 2476},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11212},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 12538},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9409},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5571},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18187},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5739},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12887},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 9580},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16703},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6611},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19665},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 29129},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16982},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24786},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 15994},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12746},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 2761},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 10392},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13851},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薑薑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8266},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5442},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19015},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 32793},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13002},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8967},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20100},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 12868},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "薑薑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5152},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5908},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 27481},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15973},
]},
],
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

                   text: '薑薑的PT構成(總分523286)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 348319, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 54514, name: '強襲', legendMarkerType: 'square'},
{  y: 120453, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾略特的PT統計(總分515350)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24360,
				            interval: 2436,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾略特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2602},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10587},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11471},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 18331},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 9133},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14304},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13612},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13915},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8212},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 24360},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 19958},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1964},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾略特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 5372},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5384},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1321},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11114},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 2724},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5843},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 7109},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1954},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2807},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5081},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6030},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6263},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6892},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6856},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5842},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5237},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6918},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8611},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19753},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 5349},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7994},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 9394},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 23737},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16366},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14874},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7056},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 8278},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13701},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 14906},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 2919},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾略特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3539},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10513},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11466},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13038},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13329},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 9029},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 19753},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16845},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10191},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 13513},
]},
],
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

                   text: '艾略特的PT構成(總分515350)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 245685, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 121216, name: '強襲', legendMarkerType: 'square'},
{  y: 148449, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '來未的PT統計(總分506310)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 41262,
				            interval: 4126,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "來未殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 1495},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4655},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6792},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10092},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9355},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5014},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8062},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4854},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4743},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4970},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13959},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4757},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4127},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13960},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11666},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 12513},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19201},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 22235},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13345},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10280},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 23239},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13346},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9446},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10150},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 29532},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 41262},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6688},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 37102},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 26493},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "來未CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14663},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7757},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 21524},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "來未強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7066},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6904},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10607},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8878},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14526},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 15266},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15786},
]},
],
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

                   text: '來未的PT構成(總分506310)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 383333, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 79033, name: '強襲', legendMarkerType: 'square'},
{  y: 43944, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '709394的PT統計(總分445114)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42225,
				            interval: 4222,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "709394殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9318},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2116},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2461},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9541},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 995},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6172},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5317},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6830},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 8979},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5201},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10951},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8458},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1164},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5744},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6920},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5925},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6981},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7053},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3930},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24351},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 21709},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7935},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6842},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6529},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 13198},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 42225},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1236},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26032},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8437},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5025},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "709394CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4646},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 2764},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7811},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 14929},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12497},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 11805},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11643},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "709394強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5790},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6452},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7281},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7978},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4752},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5719},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 16024},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12965},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11813},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9639},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13031},
]},
],
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

                   text: '709394的PT構成(總分445114)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 277575, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 101444, name: '強襲', legendMarkerType: 'square'},
{  y: 66095, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '不死召呂的PT統計(總分438316)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35842,
				            interval: 3584,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不死召呂殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4160},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8570},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 7186},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3126},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1949},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6732},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14344},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11412},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7785},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10668},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8859},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4007},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 11426},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7613},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5853},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13082},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 13452},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12063},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 4880},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12725},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 6897},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8009},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9298},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 13294},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 10264},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 2161},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14928},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9689},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不死召呂強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7402},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 26969},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 20684},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 10434},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 17933},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 35842},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 14929},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "不死召呂CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8230},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7244},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 5544},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 17310},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 21363},
]},
],
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

                   text: '不死召呂的PT構成(總分438316)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 244432, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 134193, name: '強襲', legendMarkerType: 'square'},
{  y: 59691, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Xun的PT統計(總分418965)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35940,
				            interval: 3594,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Xun殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4572},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4313},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5733},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8458},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10058},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6564},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10431},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 11018},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2460},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4068},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5035},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 5500},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 3098},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 4972},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8549},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12261},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 15084},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8064},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7090},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6048},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14810},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5687},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 6427},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25419},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 35940},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 14175},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15051},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8410},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20856},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 19796},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Xun強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5165},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4376},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5128},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5331},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 14396},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 10630},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 16430},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 6370},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12639},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13082},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1739},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "XunCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2972},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10760},
]},
],
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

                   text: 'Xun的PT構成(總分418965)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 309947, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 95286, name: '強襲', legendMarkerType: 'square'},
{  y: 13732, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '高坂京介的PT統計(總分24071)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 4744,
				            interval: 474,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "高坂京介殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 3651},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4744},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3131},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4035},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 4406},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4104},
]},
],
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

                   text: '高坂京介的PT構成(總分24071)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 24071, name: '殲滅', legendMarkerType: 'triangle'},
			]
		}
		]
	});
	PlayerPieChart40.render();
}
