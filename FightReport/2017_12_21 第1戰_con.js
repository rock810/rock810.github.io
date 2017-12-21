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
				
				            maximum: 3944987,
				            interval: 394498,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 112652},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 77327},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 102769},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 137664},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 125517},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 104762},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 206376},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 148888},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 178375},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 98924},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 179002},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 402559},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 340693},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 404273},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 323866},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 203514},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 188330},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 123000},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 195101},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 271190},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 344943},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 515165},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 277231},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 313580},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 285331},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 240436},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 341591},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 305503},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 326161},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 353489},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 221112},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 416582},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 908367},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1674905},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 2539210},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 2245720},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1388539},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1954794},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 1524263},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 2543267},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 2156284},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 1599091},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 1705679},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 1466606},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 1571055},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 2526774},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 2729845},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 3944987},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 3007825},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1762724},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 1747431},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 1671157},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 2277745},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 2687946},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 2469469},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 2992324},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 2790557},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 3250879},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2880678},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2367752},
]},
],
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
				
				            maximum: 70251779,
				            interval: 7025177,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 112652},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 189979},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 292748},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 430412},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 555929},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 660691},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 867067},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1015955},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 1194330},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1293254},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1472256},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 1874815},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 2215508},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2619781},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 2943647},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 3147161},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 3335491},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 3458491},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 3653592},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 3924782},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 4269725},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 4784890},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 5062121},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 5375701},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 5661032},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 5901468},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 6243059},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 6548562},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 6874723},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 7228212},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 7228212},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 221112},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 637694},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1546061},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 3220966},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 5760176},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 8005896},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 9394435},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 11349229},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 12873492},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 15416759},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 17573043},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 19172134},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 20877813},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 22344419},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 23915474},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 26442248},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 29172093},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 33117080},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 36124905},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 37887629},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 39635060},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 41306217},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 43583962},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 46271908},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 48741377},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 51733701},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 54524258},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 57775137},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 60655815},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 63023567},
]},
],
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
				
				            maximum: 3574832,
				            interval: 357483,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 84992},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 68557},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 66329},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 95721},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 71776},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 67800},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 174166},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 96157},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 151986},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 66513},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 130160},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 334471},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 258305},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 363941},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 268647},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 131972},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 156848},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 73997},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 155915},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 198407},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 241479},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 422129},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 223729},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 243451},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 224439},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 167725},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 282374},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 233876},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 286254},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 334011},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 129662},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 123974},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 117196},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 80630},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 75059},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 128112},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 180054},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 135585},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 111310},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 175428},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 183939},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 191284},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 214256},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 152629},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 288013},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 223067},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 133768},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 61517},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 144988},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 163372},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 201716},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 196610},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 163334},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 255534},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 310224},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 485618},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 232131},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 219815},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 185828},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 297724},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 31719},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 63486},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 93917},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 109764},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 188123},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 153635},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 139999},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 154848},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 136520},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 142725},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 221975},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 193911},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 206738},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 163287},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 169348},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 257224},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 223192},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 308638},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 296147},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 208380},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 230305},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 211753},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 157995},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 186708},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 273021},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 261513},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 280272},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 232111},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 175984},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 153539},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 59731},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 229122},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 697254},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1484511},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 2276028},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1963973},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1068486},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1664361},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 1276433},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 2225114},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1750370},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 1213896},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 1284685},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 1150690},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 1113694},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 2046483},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 2372885},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 3574832},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 2566690},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1390972},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 1315410},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 1262794},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 1956416},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 2245704},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 1886224},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 2245193},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 2278154},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 2798953},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2518866},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 1916489},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 22199},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 8770},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 36440},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 41943},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 7973},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 33236},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 24158},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 34212},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 26389},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 30843},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 40852},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 47415},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 31192},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 37943},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 55219},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 28495},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 24759},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 42233},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 29713},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 55170},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 53929},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 75221},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 42422},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 22457},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 44990},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 44729},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 39280},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 40763},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 39907},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 7958},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 5461},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 45768},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 3726},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 8052},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 18519},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1568},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 7990},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 20673},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 51196},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2389},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 43047},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 6723},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 6770},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 9473},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 17613},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 49535},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 17815},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 11080},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 47672},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 15902},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 27982},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 19937},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 30864},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 11520},
]},
],
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
				            text: '葬月的PT統計(總分975016)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 157432,
				            interval: 15743,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 7869},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 6166},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 21836},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 13523},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 15944},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 24320},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 102306},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 16619},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 7609},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 14846},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 5505},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 27857},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 8098},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 133921},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 48878},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 35444},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 29331},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 8256},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 17606},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 38998},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 21986},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 23347},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 29620},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 44991},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 157432},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 97715},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 3593},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 5760},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 5640},
]},
],
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

                   text: '葬月的PT構成(總分975016)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 960023, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14993, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '喵鼠的PT統計(總分948010)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 73997,
				            interval: 7399,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 01, 0), y: 4978},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 2067},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 516},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1206},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 2625},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 5020},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 152},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 3402},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 4750},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 3784},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 387},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 12, 0), y: 19647},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 15030},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 20790},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 13077},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 19951},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 11520},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 17502},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 24070},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 31315},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 29643},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 22270},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 15473},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 24991},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 16321},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 27204},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 42886},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 21396},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 18472},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 55219},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 15263},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 24759},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 42233},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 16750},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 55170},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 53929},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 73997},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 34621},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 44990},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 26928},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 19889},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 23910},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 39907},
]},
],
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

                   text: '喵鼠的PT構成(總分948010)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 28887, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 100015, name: '強襲', legendMarkerType: 'square'},
{  y: 819108, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '神威的PT統計(總分799169)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 117718,
				            interval: 11771,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 9675},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 11609},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 10973},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 9550},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 14955},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 2594},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 15841},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 13238},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 44125},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 10772},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 16734},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 41736},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 58431},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 15604},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 41679},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 10908},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 12470},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 9278},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 16069},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 56646},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 35817},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 117718},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 9514},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 11598},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 19157},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 32476},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 48679},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 17461},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 9349},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 60458},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神威CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 809},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9520},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "神威強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 3726},
]},
],
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

                   text: '神威的PT構成(總分799169)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 785114, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3726, name: '強襲', legendMarkerType: 'square'},
{  y: 10329, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分797136)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 116273,
				            interval: 11627,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 9764},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 3364},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 673},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 11878},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 3782},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 8215},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 7138},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 15481},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 3754},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 15515},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 27332},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 20062},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 12537},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 16822},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 16998},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 7321},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 3241},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 14541},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 34418},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 11109},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 22814},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 10089},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 116273},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 69330},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 53125},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 68559},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 91964},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 22636},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 72810},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 9595},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 6770},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 4697},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 4529},
]},
],
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

                   text: '依司瑪耳的PT構成(總分797136)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 771545, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16365, name: '強襲', legendMarkerType: 'square'},
{  y: 9226, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '傑特的PT統計(總分559016)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 65029,
				            interval: 6502,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 11266},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5662},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 7106},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 16764},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 11996},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 5265},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 2018},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 18250},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 3894},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 12506},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 65029},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 15853},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 31862},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 41637},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 9926},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 9356},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 5900},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 3938},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 20241},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 26511},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 50532},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 19458},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 4444},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 24089},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 30},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 37661},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 32867},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 34892},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 18333},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 29, 0), y: 5215},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 25, 0), y: 6515},
]},
],
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

                   text: '傑特的PT構成(總分559016)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 547286, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 6515, name: '強襲', legendMarkerType: 'square'},
{  y: 5215, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分485079)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 50968,
				            interval: 5096,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 12148},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5078},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3595},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 2738},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 3746},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 3470},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 4742},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 20335},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 8975},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 5845},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 5316},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 29852},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 21907},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 18955},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 12000},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 9336},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 11531},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 1840},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 9488},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 48917},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 39475},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 50968},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 3519},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 15622},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 19870},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 2387},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 10640},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 14027},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 8114},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 10, 0), y: 7945},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 6723},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 11380},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 11080},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8635},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 11106},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 10913},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 23, 0), y: 12861},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分485079)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 404436, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 67782, name: '強襲', legendMarkerType: 'square'},
{  y: 12861, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分484327)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 76747,
				            interval: 7674,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 02, 0), y: 7696},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 10276},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 4747},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 11567},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 19753},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 4863},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 17486},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 69017},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 75154},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 76747},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 38629},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 12997},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 16789},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 8507},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 30344},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 8578},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 11791},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 51011},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 15, 0), y: 8375},
]},
],
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

                   text: '阿拉的PT構成(總分484327)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 475952, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8375, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '艾倫的PT統計(總分396778)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 127095,
				            interval: 12709,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 6804},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 9131},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 12853},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 16866},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 16712},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 3050},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 3617},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 13882},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1037},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 25488},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 44687},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 127095},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 43355},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 49650},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 15127},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 7424},
]},
],
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

                   text: '艾倫的PT構成(總分396778)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 396778, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: '冰紅茶的PT統計(總分392360)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59810,
				            interval: 5981,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 21438},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1650},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 2251},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 11766},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 22480},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 18253},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 12392},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 33650},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 17490},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 22064},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 9022},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 30765},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 12332},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 4323},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 3212},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 7512},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 59810},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 12556},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 36951},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 21906},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 18, 0), y: 9473},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 4721},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1833},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 1224},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 7801},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 5485},
]},
],
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

                   text: '冰紅茶的PT構成(總分392360)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 361823, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14194, name: '強襲', legendMarkerType: 'square'},
{  y: 16343, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '御神夜的PT統計(總分379657)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45251,
				            interval: 4525,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 4375},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 7129},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 2794},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 2573},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 7423},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 11342},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 10046},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 11726},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 13355},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 24201},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 12364},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 9264},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 23491},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 17797},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 17401},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 7254},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 37},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 45251},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 30089},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 27513},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 9180},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 8335},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 5794},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 12640},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "御神夜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 12, 0), y: 22479},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 17815},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "御神夜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 10628},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 7361},
]},
],
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

                   text: '御神夜的PT構成(總分379657)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 321374, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 40294, name: '強襲', legendMarkerType: 'square'},
{  y: 17989, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分321252)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40156,
				            interval: 4015,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 7036},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 8312},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 7691},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 9157},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 5609},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 5540},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 10520},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 10074},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 27071},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 10158},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 5079},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 11234},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 16453},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 2640},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 10006},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 9528},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 4902},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 5429},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 40156},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 9285},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 11623},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 5682},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 2598},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 8558},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 09, 0), y: 12689},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 7279},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 8052},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 8881},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 9070},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2389},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 10304},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 18247},
]},
],
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

                   text: '寇內爾緹的PT構成(總分321252)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 244341, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 56943, name: '強襲', legendMarkerType: 'square'},
{  y: 19968, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分308003)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45768,
				            interval: 4576,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 1698},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2680},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1659},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 7091},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 123},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 7576},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 1745},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 728},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 196},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 484},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 863},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 5017},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 4061},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 1144},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 7926},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 12370},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 18739},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 13648},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 8327},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 17349},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 12963},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 12041},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 13751},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 45768},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 20673},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 17713},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 17613},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 38155},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 15902},
]},
],
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

                   text: '土土昕的PT構成(總分308003)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 35065, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 155824, name: '強襲', legendMarkerType: 'square'},
{  y: 117114, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '白愁武神的PT統計(總分208795)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33253,
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
                                    name: "白愁武神殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 10221},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5318},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1834},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 13921},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1954},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 4608},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 2875},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 3655},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 11176},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 8579},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 3487},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 33253},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 8213},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 398},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 14754},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 4609},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 9559},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 9013},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 2149},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 3588},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 4660},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 7486},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 215},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 2182},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 1628},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 8085},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 5017},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 1056},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 7274},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白愁武神強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 25, 0), y: 3617},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 8831},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "白愁武神CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 12, 0), y: 1469},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 4111},
]},
],
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

                   text: '白愁武神的PT構成(總分208795)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 190767, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12448, name: '強襲', legendMarkerType: 'square'},
{  y: 5580, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '格蘭特的PT統計(總分121345)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21934,
				            interval: 2193,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "格蘭特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 20920},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 4067},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 3168},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1338},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 3994},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 14011},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 10052},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 9218},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 15763},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 12023},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 21934},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "格蘭特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 15, 0), y: 4857},
]},
],
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

                   text: '格蘭特的PT構成(總分121345)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 116488, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4857, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '凱爾的PT統計(總分19802)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 5485,
				            interval: 548,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2122},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "凱爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 5485},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5100},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 20},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 3062},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 3977},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 36},
]},
],
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

                   text: '凱爾的PT構成(總分19802)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 17680, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2122, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '魔法的PT統計(總分13956)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 5461,
				            interval: 546,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 5373},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 3122},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 5461},
]},
],
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

                   text: '魔法的PT構成(總分13956)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 8495, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 5461, name: '強襲', legendMarkerType: 'square'},
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
				            text: '艾佛烈的PT統計(總分10999)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 2738,
				            interval: 273,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 35},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 23},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 25},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 25},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1154},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 36},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 38},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 735},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 376},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 61},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 33},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 32},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 265},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 1268},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2738},
{ x: new Date(0, 0, 0, 13, 30, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1568},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 52},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾佛烈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 35},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 612},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1888},
]},
],
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

                   text: '艾佛烈的PT構成(總分10999)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 6844, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1620, name: '強襲', legendMarkerType: 'square'},
{  y: 2535, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾略特的PT統計(總分7512)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 2743,
				            interval: 274,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 13, 00, 0), y: 47},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 16},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 79},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 30},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 2410},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 32},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 55},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 27},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 28},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 28},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 27},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 143},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 37},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 251},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾略特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 08, 0), y: 1398},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 54},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 2743},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾略特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 43},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 45},
]},
],
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

                   text: '艾略特的PT構成(總分7512)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 3229, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 88, name: '強襲', legendMarkerType: 'square'},
{  y: 4195, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '紫星魂的PT統計(總分4412985)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 281227,
				            interval: 28122,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫星魂殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 9201},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 2142},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 12220},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 13276},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 6594},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 5457},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 2709},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 7351},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 34276},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 2740},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 9056},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 4960},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 8297},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 3010},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 3826},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 18092},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫星魂CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 8808},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 8774},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 44560},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 36699},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 38249},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 37775},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 79637},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 34300},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 13896},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "紫星魂強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 60161},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 67473},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 175330},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 270088},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 195938},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 140782},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 232530},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 170139},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 179672},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 124161},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 53406},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 164636},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 281227},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 127950},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 241259},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 225708},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 34617},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 92169},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 60792},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 164814},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 180134},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 141676},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 82423},
]},
],
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

                   text: '紫星魂的PT構成(總分4412985)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 143207, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3967080, name: '強襲', legendMarkerType: 'square'},
{  y: 302698, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'cylsin的PT統計(總分4305462)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 477488,
				            interval: 47748,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cylsin殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 3879},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 1688},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3231},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 6570},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 13046},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 18846},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 7755},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 8016},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 34007},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 2175},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 16318},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 9185},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 4482},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 17758},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 3445},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 5882},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 95},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 9473},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 40187},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cylsinCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 20483},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 11263},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 49711},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 46321},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 18224},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 38195},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 41889},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "cylsin強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 34673},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 32348},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 202753},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 163540},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 52274},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 94868},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 247029},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 202378},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 40899},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 147603},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 137286},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 127890},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 426284},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 304451},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 81924},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 18543},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 57025},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 120554},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 97919},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 35534},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 77650},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 477488},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 392428},
]},
],
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

                   text: 'cylsin的PT構成(總分4305462)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 206038, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3873338, name: '強襲', legendMarkerType: 'square'},
{  y: 226086, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '浪人的PT統計(總分4022454)'
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
                                    name: "浪人殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 13089},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 6734},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 7303},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 8459},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 10408},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 10489},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 28482},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 7052},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 9437},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 6817},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 3302},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 8362},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 8243},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 8269},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 10856},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 10941},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 8379},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 39378},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 15619},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 19025},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 23870},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 9549},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 17522},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "浪人強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 156097},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 23765},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 86938},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 45484},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 54656},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 80365},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 186920},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 246209},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 60132},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 131178},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 126373},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 49166},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 38400},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 217468},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 92295},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 51993},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 186792},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 175946},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 286322},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 84014},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 299997},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 199998},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "浪人CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 9637},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 55836},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 36437},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 23243},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 102453},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 66235},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 44317},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 59403},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 52804},
]},
],
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

                   text: '浪人的PT構成(總分4022454)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 291585, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3280504, name: '強襲', legendMarkerType: 'square'},
{  y: 450365, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '閃光の刻的PT統計(總分3785002)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 293501,
				            interval: 29350,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "閃光の刻強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 6815},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 8960},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 127154},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 213071},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 17680},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 25502},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 88080},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 93888},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 228005},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 125504},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 130336},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 59220},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 85372},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 293501},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 199665},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 8037},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 33714},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 39866},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 138262},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 174291},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 274288},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 176626},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 228603},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 99999},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "閃光の刻殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 3366},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 9336},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 5424},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 12963},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 13359},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 6957},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 14200},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 37237},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 7562},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 8559},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 6860},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 16717},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 12164},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 3440},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 41073},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 8694},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8890},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 2162},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 18383},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 9351},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 15601},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "閃光の刻CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 10152},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 42758},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 9845},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 38383},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 40275},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 104856},
]},
],
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

                   text: '閃光の刻的PT構成(總分3785002)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 262298, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3276435, name: '強襲', legendMarkerType: 'square'},
{  y: 246269, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Dante的PT統計(總分3702136)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 277843,
				            interval: 27784,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "DanteCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 23340},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 98587},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 35547},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 26503},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 59744},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 47019},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 33350},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 17127},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 60184},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 14293},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dante強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 17145},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 17570},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 18015},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 73596},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 77958},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 277843},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 130957},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 118406},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 106254},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 75779},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 64824},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 41449},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 66509},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 113846},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 85884},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 148900},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 136093},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 176194},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 99999},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Dante殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 4515},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 10575},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 5630},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 7783},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 19767},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 6828},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 2540},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1684},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 29401},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 13359},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 6448},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 7757},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 7835},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 14883},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 5876},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 3488},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 1569},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 8875},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 2335},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 35812},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 9311},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 17561},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 8324},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 7077},
]},
],
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

                   text: 'Dante的PT構成(總分3702136)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 239233, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3047209, name: '強襲', legendMarkerType: 'square'},
{  y: 415694, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '畫川的PT統計(總分3680816)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 279235,
				            interval: 27923,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "畫川強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 44871},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 127343},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 155068},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 48606},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 195993},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 256650},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 48926},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 48619},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 69856},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 175870},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 138255},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 196347},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 279235},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 150356},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 180405},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 162141},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 57320},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 67688},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 156345},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 199998},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "畫川殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5332},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 6949},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1442},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 10657},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 4057},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 7036},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 13882},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 7610},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 7364},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 31287},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 7813},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 8084},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 14567},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 82},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 8348},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 8788},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 4444},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 20318},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 35531},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 16348},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 2019},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9411},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 9540},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "畫川CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 04, 0), y: 35175},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 44846},
]},
],
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

                   text: '畫川的PT構成(總分3680816)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 240909, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3359886, name: '強襲', legendMarkerType: 'square'},
{  y: 80021, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '法蘭西的PT統計(總分3357996)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 287066,
				            interval: 28706,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法蘭西殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 11927},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5332},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 2272},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 5728},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 2647},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 13125},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 7080},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 7184},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 4105},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 31846},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 10432},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 25},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 106},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 2962},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 3444},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 11057},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 3749},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 17267},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 17891},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 41378},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 3290},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 8012},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 16900},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 63},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法蘭西強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 77412},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 51998},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 166508},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 124605},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 156638},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 83108},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 53617},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 150737},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 95614},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 96069},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 70662},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 27415},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 109510},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 190451},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 91252},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 59152},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 78103},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 57914},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 102175},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 118869},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 80423},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 226832},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 149102},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 287066},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法蘭西CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 7462},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 85307},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 49983},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 34680},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 47512},
]},
],
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

                   text: '法蘭西的PT構成(總分3357996)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 227822, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2905230, name: '強襲', legendMarkerType: 'square'},
{  y: 224944, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '✨✨小好好✨✨的PT統計(總分3274688)'
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
                                    name: "✨✨小好好✨✨強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 8453},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 23429},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 27140},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 266971},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 72999},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 28956},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 90504},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 198013},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 75630},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 65550},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 12659},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 57972},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 299997},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 290917},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 144252},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 23808},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 142468},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 169226},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 78593},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 123396},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 99999},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "✨✨小好好✨✨殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 9663},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 7575},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 16923},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 64},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 11453},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 33893},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 4180},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 6523},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 5502},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 7656},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 20269},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 14787},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 1421},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 9427},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 30822},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 24430},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 3508},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 12269},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 6314},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 12544},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 9121},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 46203},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 18886},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "✨✨小好好✨✨CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 10, 0), y: 59593},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 33911},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 36188},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 44958},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 44455},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 41222},
]},
],
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

                   text: '✨✨小好好✨✨的PT構成(總分3274688)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 313433, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2700928, name: '強襲', legendMarkerType: 'square'},
{  y: 260327, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '加爾的PT統計(總分3272245)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 355459,
				            interval: 35545,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "加爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 4492},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 62490},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 102541},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 156806},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 132969},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 34606},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 112947},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 64557},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 63870},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 18003},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 355459},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 274541},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 111898},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 112716},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 52583},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 108184},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 85873},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 186976},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 77149},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 223727},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 54213},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 282079},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 61469},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "加爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 5145},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 15035},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 21100},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 27794},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 5473},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 24327},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 15821},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 29474},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 26020},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 50685},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "加爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 1470},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 6374},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 7967},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 6272},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 2519},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1592},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 11357},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1201},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1142},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 21649},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 36357},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 9248},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 7358},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 1417},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 16907},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 7709},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 91},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 3735},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 8854},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 43686},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 14319},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 0},
]},
],
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

                   text: '加爾的PT構成(總分3272245)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 211224, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2840147, name: '強襲', legendMarkerType: 'square'},
{  y: 220874, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '哈哈黑的PT統計(總分3234703)'
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
                                    name: "哈哈黑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 13926},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 27743},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 77170},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 98282},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 65247},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 76471},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 82016},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 134236},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 99619},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 83171},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 42884},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 135878},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 72492},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 73560},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 94106},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 59944},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 231330},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 189747},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 124214},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 193274},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 299997},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈哈黑殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 9219},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 10498},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 11269},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 8534},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 8141},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 1818},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 28441},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 6796},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 11857},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 5523},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 8949},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 7088},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 21415},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 31992},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 27},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 13944},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 8786},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 3084},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 16730},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 8624},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 10981},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 9024},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 1115},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "哈哈黑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 05, 0), y: 6210},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 43434},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 64107},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 29246},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 57099},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 65892},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 49557},
]},
],
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

                   text: '哈哈黑的PT構成(總分3234703)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 243855, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2675303, name: '強襲', legendMarkerType: 'square'},
{  y: 315545, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Chocobo的PT統計(總分2961973)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 249025,
				            interval: 24902,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Chocobo強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 7787},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 75776},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 86239},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 54998},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 27536},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 100433},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 109671},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 95990},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 49601},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 48309},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 25994},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 26470},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 78408},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 73478},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 96074},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 94727},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 38227},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 94401},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 96136},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Chocobo殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 6414},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 7654},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 4317},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 2194},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 20003},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 40355},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 34688},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 17650},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 25620},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 16034},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 16803},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 196},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 88741},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 66860},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 16266},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 42175},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 10324},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 2269},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 5047},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 59900},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 57127},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 249025},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 124925},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 107735},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 49311},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 65496},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ChocoboCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 07, 0), y: 36454},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 36977},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 28102},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 49465},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 49834},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 43760},
]},
],
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

                   text: 'Chocobo的PT構成(總分2961973)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1237128, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1480253, name: '強襲', legendMarkerType: 'square'},
{  y: 244592, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '天罡的PT統計(總分2937537)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 293316,
				            interval: 29331,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天罡強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 15000},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 37700},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 95646},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 124054},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 62609},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 180211},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 126504},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 91059},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 33512},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 65577},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 130379},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 115410},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 17955},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 95032},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 45813},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 26196},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 293316},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 58332},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 86142},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 196434},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 151928},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天罡殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 815},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2309},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 1205},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 12100},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 6786},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 1189},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 7210},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 14009},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 7537},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 8480},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 4367},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 31380},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 7921},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 5407},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 15184},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 1541},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 10799},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 8342},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 17296},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 1683},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "天罡CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 10366},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 26709},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 13194},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 31656},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 61887},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 52019},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 15356},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 11986},
]},
],
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

                   text: '天罡的PT構成(總分2937537)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 165560, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2548804, name: '強襲', legendMarkerType: 'square'},
{  y: 223173, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '風林火山的PT統計(總分2927838)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 292756,
				            interval: 29275,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風林火山CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 7400},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 12526},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 27997},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 39952},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 38128},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 32837},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 17211},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 44246},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 26734},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 62070},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 91141},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 43071},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 70966},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 42396},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 32776},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風林火山殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 8250},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 4101},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 5621},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 7477},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 6498},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 6054},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 1828},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 5247},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 35630},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 7195},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 52},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 13064},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 7950},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 10631},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 2128},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 32192},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 39827},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 23005},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 13794},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 15825},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 8797},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 43792},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 18836},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 4786},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 9606},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風林火山強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 9405},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 63299},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 65201},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 77595},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 54619},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 90038},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 52651},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 20856},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 15546},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 60520},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 56145},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 155430},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 88871},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 180311},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 116939},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 14495},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 292756},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 91529},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 199998},
]},
],
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

                   text: '風林火山的PT構成(總分2927838)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 332186, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2006201, name: '強襲', legendMarkerType: 'square'},
{  y: 589451, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '小毓寶寶的PT統計(總分2913333)'
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
                                    name: "小毓寶寶殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 1970},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 10435},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 15120},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 1558},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 6953},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 4681},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 7021},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 7465},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 30718},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 7953},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 7960},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 15635},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 9584},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 6036},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 4858},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 8159},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 8976},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 9710},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 35514},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 8915},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 23247},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小毓寶寶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 36498},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 68716},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 76651},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 82731},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 17413},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 79724},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 43583},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 125523},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 148398},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 44268},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 69589},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 299997},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 151765},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 162006},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 39280},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 47665},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 76625},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 163508},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 299997},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 99999},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "小毓寶寶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 11, 0), y: 49077},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 57079},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 31922},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 99466},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 60214},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 49173},
]},
],
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

                   text: '小毓寶寶的PT構成(總分2913333)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 232468, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2333934, name: '強襲', legendMarkerType: 'square'},
{  y: 346931, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '特勤隊隊長的PT統計(總分2808897)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 281199,
				            interval: 28119,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "特勤隊隊長殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 14159},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 5463},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 5889},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 6048},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 4207},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 13563},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 7382},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 29442},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 1184},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 4319},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 8000},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 15430},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 8995},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 12675},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 8362},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 12750},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 38432},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 8789},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 3741},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 19114},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "特勤隊隊長強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 49858},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 80237},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 58073},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 116336},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 13921},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 44937},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 125566},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 29932},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 5925},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 183756},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 66502},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 75708},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 19691},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 75947},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 242158},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 161229},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 281199},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 53920},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 42201},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 97620},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "特勤隊隊長CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 14952},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 27081},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 43582},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 30850},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 28980},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 58172},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 52625},
]},
],
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

                   text: '特勤隊隊長的PT構成(總分2808897)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 227944, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2324711, name: '強襲', legendMarkerType: 'square'},
{  y: 256242, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '一柱擎天 歐歐的PT統計(總分2703262)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 257051,
				            interval: 25705,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一柱擎天 歐歐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 2261},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 19014},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 109735},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 168316},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 92620},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 7872},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 34887},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 55297},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 135387},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 49720},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 8459},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 11487},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 8325},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 133267},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 178523},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 66425},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 110200},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 10386},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 29511},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 107841},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 153880},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 188145},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 135674},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 230589},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 257051},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 28812},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 74211},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一柱擎天 歐歐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 939},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 297},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 2258},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 2691},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 7877},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 23},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 1817},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 7493},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 9423},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 379},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2394},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 26},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 7920},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 2937},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 5968},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 2554},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 1602},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 5794},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 8944},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 4852},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 5130},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "一柱擎天 歐歐CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 4117},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 31602},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 4144},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 38199},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 23351},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 10563},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 36144},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 36187},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 29742},
]},
],
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

                   text: '一柱擎天 歐歐的PT構成(總分2703262)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 81318, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2407895, name: '強襲', legendMarkerType: 'square'},
{  y: 214049, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '大村的PT統計(總分2628844)'
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
                                    name: "大村強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 6834},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 3351},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 80370},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 46362},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 140548},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 84075},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 19012},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 45811},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 59842},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 195787},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 76980},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 38259},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 34440},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 37888},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 27316},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 26292},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 176220},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 109751},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 55022},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 74823},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 134368},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 90530},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 37665},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 139984},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 118849},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 199998},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大村殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 2005},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 10411},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 5272},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 6827},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 7148},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 6183},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 1957},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 7306},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 2191},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 7022},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 32457},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 7849},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 8531},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 7957},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 10120},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 141},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 11000},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 6212},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 6837},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 10714},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 7943},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 30},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大村CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 11226},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 12381},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 43655},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 35251},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 28005},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 19769},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 52069},
]},
],
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

                   text: '大村的PT構成(總分2628844)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 166113, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2260375, name: '強襲', legendMarkerType: 'square'},
{  y: 202356, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '史丹利的PT統計(總分2509117)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 241148,
				            interval: 24114,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "史丹利殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 7446},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 9027},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 5278},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 2337},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 6460},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 5831},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 9871},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 4195},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 2649},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 30997},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 20432},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 16585},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 16990},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 2729},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 11276},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 28407},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 8311},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 8355},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 8544},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 9600},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 17936},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 7974},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 17531},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 36144},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 9041},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 5099},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 18601},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "史丹利強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 4538},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 11707},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 68828},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 43204},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 133546},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 33523},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 63283},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 98393},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 37365},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 23349},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 34241},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 97621},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 72750},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 195408},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 168039},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 56921},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 63986},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 241148},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 86131},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 91353},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 103974},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 99999},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "史丹利CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 03, 0), y: 5443},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 27067},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 33149},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 17311},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 51587},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 82524},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 42415},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 63965},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 28703},
]},
],
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

                   text: '史丹利的PT構成(總分2509117)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 327646, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1829307, name: '強襲', legendMarkerType: 'square'},
{  y: 352164, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '逆天的PT統計(總分1984765)'
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
                                    name: "逆天殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 11724},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 6019},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 2130},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 5748},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 9215},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 4597},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 7512},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 7553},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 2040},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 29610},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 1411},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 80},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 3928},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 3885},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 9070},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 9837},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 150},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "逆天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 02, 0), y: 24110},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 81876},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 77414},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 67410},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 56062},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 59798},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 95513},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 112021},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 30101},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 34243},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 29569},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 80181},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 150573},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 190702},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 41805},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 70282},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "逆天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 01, 0), y: 21072},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 55921},
{ x: new Date(0, 0, 0, 13, 05, 0), y: 35119},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 40837},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 50063},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 37097},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 28491},
]},
],
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

                   text: '逆天的PT構成(總分1984765)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 114509, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1601656, name: '強襲', legendMarkerType: 'square'},
{  y: 268600, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '南宮煌的PT統計(總分1599514)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 272284,
				            interval: 27228,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "南宮煌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 9611},
{ x: new Date(0, 0, 0, 13, 01, 0), y: 10833},
{ x: new Date(0, 0, 0, 13, 02, 0), y: 9682},
{ x: new Date(0, 0, 0, 13, 03, 0), y: 12171},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 1096},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 6610},
{ x: new Date(0, 0, 0, 13, 08, 0), y: 7873},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 28894},
{ x: new Date(0, 0, 0, 13, 10, 0), y: 10455},
{ x: new Date(0, 0, 0, 13, 11, 0), y: 7340},
{ x: new Date(0, 0, 0, 13, 12, 0), y: 10080},
{ x: new Date(0, 0, 0, 13, 13, 0), y: 23719},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 5748},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 8470},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 33308},
{ x: new Date(0, 0, 0, 13, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 21, 0), y: 12926},
{ x: new Date(0, 0, 0, 13, 23, 0), y: 17704},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 25, 0), y: 4543},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 13, 27, 0), y: 19809},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 17927},
{ x: new Date(0, 0, 0, 13, 29, 0), y: 39102},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "南宮煌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 00, 0), y: 8159},
{ x: new Date(0, 0, 0, 13, 04, 0), y: 29978},
{ x: new Date(0, 0, 0, 13, 06, 0), y: 43243},
{ x: new Date(0, 0, 0, 13, 07, 0), y: 107627},
{ x: new Date(0, 0, 0, 13, 09, 0), y: 90984},
{ x: new Date(0, 0, 0, 13, 15, 0), y: 81054},
{ x: new Date(0, 0, 0, 13, 16, 0), y: 99999},
{ x: new Date(0, 0, 0, 13, 17, 0), y: 272284},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 41350},
{ x: new Date(0, 0, 0, 13, 22, 0), y: 40542},
{ x: new Date(0, 0, 0, 13, 26, 0), y: 199998},
{ x: new Date(0, 0, 0, 13, 28, 0), y: 99999},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "南宮煌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 13, 06, 0), y: 30634},
{ x: new Date(0, 0, 0, 13, 14, 0), y: 23897},
{ x: new Date(0, 0, 0, 13, 18, 0), y: 48760},
{ x: new Date(0, 0, 0, 13, 19, 0), y: 41740},
{ x: new Date(0, 0, 0, 13, 24, 0), y: 41365},
]},
],
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

                   text: '南宮煌的PT構成(總分1599514)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 297901, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1115217, name: '強襲', legendMarkerType: 'square'},
{  y: 186396, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart38.render();
}
