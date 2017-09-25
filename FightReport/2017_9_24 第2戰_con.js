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
				
				            maximum: 303326,
				            interval: 30332,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 33184},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 23693},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 48533},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 60966},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 87658},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 91619},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 104428},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 168172},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 141065},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 183645},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 83011},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 116074},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 97523},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 130595},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 95191},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 157308},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 146390},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 131533},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 155368},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 176910},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 147890},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 114111},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 73111},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 188492},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 280334},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 204447},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 186634},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 303326},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 288263},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 255144},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10413},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 26523},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20790},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 46139},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 103396},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 143622},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 176113},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 119937},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 87204},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 59693},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5282},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 64},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 136605},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 136704},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 165740},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 115140},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 239798},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 115504},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9751},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 436},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 161156},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 212149},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 263531},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 181317},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 158508},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 147973},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 203353},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 219189},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 171823},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 96722},
]},
],
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
				
				            maximum: 7809193,
				            interval: 780919,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 33184},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 56877},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 105410},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 166376},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 254034},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 345653},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 450081},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 618253},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 759318},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 942963},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1025974},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1142048},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1239571},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1370166},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1465357},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1622665},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1769055},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1900588},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2055956},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2232866},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2380756},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2494867},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2567978},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2756470},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3036804},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3241251},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3427885},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3731211},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4019474},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4274618},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 10413},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 36936},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 57726},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 103865},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 207261},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 350883},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 526996},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 646933},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 734137},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 793830},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 799112},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 799176},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 935781},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1072485},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1238225},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1353365},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1593163},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1708667},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 1718418},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1718854},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1880010},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2092159},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2355690},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2537007},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2695515},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2843488},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3046841},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3266030},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3437853},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3534575},
]},
],
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
				
				            maximum: 182994,
				            interval: 18299,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 29327},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 15492},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 32681},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 25151},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 40355},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 59847},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 58145},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 115717},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 87817},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 97103},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 52349},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 59188},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 51430},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 71554},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 35821},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 54504},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 80977},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 107596},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 101756},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 93009},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 91872},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 41749},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 33675},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 79348},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 124226},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 152869},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 96403},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 182994},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 166722},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 112396},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 7553},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16724},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9705},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 22510},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 80910},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 96832},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 99905},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 75908},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 27376},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 28236},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 84},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 64},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 42873},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 62367},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 83937},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 63134},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 115866},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 27806},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9423},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 436},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 47171},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 91114},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 111660},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 83368},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 77226},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 86969},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 126609},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 115015},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 94689},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 65122},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3857},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2688},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4853},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 28391},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 38384},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 26952},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 46283},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 51467},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 47646},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 74791},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 18097},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37821},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 41784},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 50197},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 42508},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 96342},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 54749},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23937},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 44289},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 54103},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 44659},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 55529},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 29504},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 91347},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 131773},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28065},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 57443},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 94119},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 81084},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 87980},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1752},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6876},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10303},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 15205},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 15262},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 32749},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 63255},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 30311},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 55458},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 25977},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 90676},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 63810},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 75811},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 40388},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 123932},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 65384},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 101079},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 106162},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 127971},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 77675},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 62868},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 56809},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 50010},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 56602},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 64684},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20303},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5513},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 10999},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7424},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 8919},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4820},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 988},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5602},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 11751},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 12565},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 19065},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4309},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8844},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 16862},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6462},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10664},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9323},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 29798},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11359},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 16833},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9932},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 17797},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 24335},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23513},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 32788},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26213},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40457},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 54768},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1108},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2923},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 782},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 8424},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7224},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14041},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12953},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 13718},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4370},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5480},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5198},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3056},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 10527},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5992},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 11618},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22314},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 328},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12906},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14873},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 23900},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 20274},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18414},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4195},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26734},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 47572},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12450},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11297},
]},
],
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
				            text: '喵鼠的PT統計(總分419090)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 58128,
				            interval: 5812,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1698},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7035},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9700},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 25991},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 25977},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 37972},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 27146},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28338},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 56320},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 48591},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 58128},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 10837},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 24606},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15704},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3425},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1665},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 459},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3907},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2802},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2100},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3777},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5092},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3891},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 568},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13295},
]},
],
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

                   text: '喵鼠的PT構成(總分419090)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 23759, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13863, name: '強襲', legendMarkerType: 'square'},
{  y: 381468, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分393283)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 77218,
				            interval: 7721,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1069},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6053},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3663},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 29467},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 52704},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32826},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 56755},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 38667},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 77218},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 31996},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 40347},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16878},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 655},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1283},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 697},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2841},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 54},
]},
],
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

                   text: '土土昕的PT構成(總分393283)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 5640, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 387643, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '葬月的PT統計(總分341880)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 77135,
				            interval: 7713,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 132},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 176},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 184},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 64},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1762},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1006},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1734},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2711},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5444},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5068},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1768},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1560},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 42285},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 18255},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 77135},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 45530},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 32638},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 52031},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 31387},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19424},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1536},
]},
],
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

                   text: '葬月的PT構成(總分341880)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 20099, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1536, name: '強襲', legendMarkerType: 'square'},
{  y: 320245, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分324958)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47473,
				            interval: 4747,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 424},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 16},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 866},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 143},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1039},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 285},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 74},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 286},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 52},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 354},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1320},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 786},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5047},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 267},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5096},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21374},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5722},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4250},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 27469},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20970},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 47473},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 38643},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 44663},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19854},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11686},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19547},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25422},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 21807},
]},
],
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

                   text: '雪歌的PT構成(總分324958)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 16078, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 21374, name: '強襲', legendMarkerType: 'square'},
{  y: 287506, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分290253)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36578,
				            interval: 3657,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 175},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 578},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2204},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1465},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25945},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20999},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 36578},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4853},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 251},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 30349},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3497},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 29465},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 127},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 19001},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 970},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 13288},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11042},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14921},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22078},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 16214},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1651},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 540},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 782},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3375},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2517},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5189},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2328},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4142},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4725},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2162},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8779},
]},
],
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

                   text: '嘎喵的PT構成(總分290253)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 255714, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 18873, name: '強襲', legendMarkerType: 'square'},
{  y: 15666, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分241425)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31160,
				            interval: 3116,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 476},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 925},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 284},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 312},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17545},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14710},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 4495},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 753},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13281},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 31160},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7030},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12653},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 21986},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11038},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5248},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7997},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16182},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 13447},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1341},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2560},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2593},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5802},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 7164},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7127},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10208},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4195},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8608},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3684},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1303},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7298},
]},
],
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

                   text: '阿拉的PT構成(總分241425)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 179542, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 53282, name: '強襲', legendMarkerType: 'square'},
{  y: 8601, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分213328)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34865,
				            interval: 3486,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 181},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 544},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1617},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1779},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 332},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19544},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 20018},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10884},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 62},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29794},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 34865},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8540},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 453},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17357},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 25386},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 29883},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5363},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1496},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 675},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4370},
]},
],
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

                   text: '魔法的PT構成(總分213328)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 208283, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 5045, name: '強襲', legendMarkerType: 'square'},
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
				            text: '依司瑪耳的PT統計(總分180373)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 31164,
				            interval: 3116,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 4058},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2157},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3268},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2190},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2824},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 111},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5113},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2276},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5847},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18506},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 31164},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 24206},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4555},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 69},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8279},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14181},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 24666},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5480},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 45},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 12417},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8961},
]},
],
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

                   text: '依司瑪耳的PT構成(總分180373)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 153470, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 17942, name: '強襲', legendMarkerType: 'square'},
{  y: 8961, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分175933)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24726,
				            interval: 2472,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 247},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 840},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2191},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 18680},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 8523},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4460},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24726},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 17342},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 723},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2672},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13195},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 6756},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7564},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2858},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 703},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2214},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8633},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9881},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 10117},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1646},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6183},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9268},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16418},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分175933)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 110870, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 53513, name: '強襲', legendMarkerType: 'square'},
{  y: 11550, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分161770)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 24463,
				            interval: 2446,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1022},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1731},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7440},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10477},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10673},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5013},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7673},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24463},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10041},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3479},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2514},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5869},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5297},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 16521},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9838},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16102},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 75},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5174},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 783},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2710},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5153},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4169},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4789},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 743},
]},
],
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

                   text: '亞歷的PT構成(總分161770)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 144206, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16821, name: '強襲', legendMarkerType: 'square'},
{  y: 743, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分157760)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33055,
				            interval: 3305,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 176},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 315},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1632},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10951},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 25226},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3781},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 446},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 804},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8555},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 776},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 949},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 153},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 281},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2942},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 454},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 33055},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13738},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 15504},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8880},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8506},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 14396},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 850},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1256},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1471},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2617},
]},
],
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

                   text: '寇內爾緹的PT構成(總分157760)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 151566, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3577, name: '強襲', legendMarkerType: 'square'},
{  y: 2617, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分139286)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 15422,
				            interval: 1542,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 288},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 100},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6259},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 827},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 135},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 5239},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11056},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15422},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10750},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 11868},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11290},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6860},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 455},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 10688},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3374},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5214},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2978},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3691},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3620},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3937},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5259},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6346},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8530},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 683},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 555},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3838},
]},
],
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

                   text: '赤雲天的PT構成(總分139286)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 94635, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39575, name: '強襲', legendMarkerType: 'square'},
{  y: 5076, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分137858)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19502,
				            interval: 1950,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 266},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 3312},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 11074},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19502},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 12741},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 814},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 313},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1712},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1746},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1263},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2013},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2124},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 723},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 669},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 398},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2033},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11659},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7685},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7953},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15213},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1194},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 611},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1822},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1163},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1298},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1708},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10097},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8036},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6508},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2134},
]},
],
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

                   text: '冰紅茶的PT構成(總分137858)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 103287, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 32437, name: '強襲', legendMarkerType: 'square'},
{  y: 2134, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分136361)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 14255,
				            interval: 1425,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 639},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 573},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 119},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4979},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1554},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7111},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 10502},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 9911},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12647},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7852},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13172},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13921},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6581},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 76},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 158},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 240},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4043},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 14255},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5079},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3672},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 53},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 243},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3056},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3790},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 328},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1842},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2476},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3821},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 272},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 451},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1156},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1745},
]},
],
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

                   text: '藏月的PT構成(總分136361)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 117181, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 15828, name: '強襲', legendMarkerType: 'square'},
{  y: 3352, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分124810)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 26718,
				            interval: 2671,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 198},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 177},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 899},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 503},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 494},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 84},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 64},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 307},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20757},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 11792},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5846},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1107},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 454},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2249},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19311},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7522},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 26718},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5695},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11713},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6737},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1063},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 992},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分124810)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 116018, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7800, name: '強襲', legendMarkerType: 'square'},
{  y: 992, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分96207)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20443,
				            interval: 2044,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8915},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1895},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7745},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3606},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 20443},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 6136},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 11503},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5297},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4704},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2923},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1600},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5381},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5481},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5820},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4758},
]},
],
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

                   text: '冰的PT構成(總分96207)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 70244, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 21205, name: '強襲', legendMarkerType: 'square'},
{  y: 4758, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '蒼鷹一葉小釵的PT統計(總分415140)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 74791,
				            interval: 7479,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蒼鷹一葉小釵殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1901},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 792},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3907},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4411},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 254},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3893},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 439},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1234},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蒼鷹一葉小釵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 74791},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 13400},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 37821},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 44289},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 49671},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 36409},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 49433},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 61663},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30832},
]},
],
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

                   text: '蒼鷹一葉小釵的PT構成(總分415140)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 16831, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 398309, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '煤炭精靈的PT統計(總分390785)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 52462,
				            interval: 5246,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煤炭精靈強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8174},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 47605},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煤炭精靈殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 333},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 228},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1172},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7849},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 418},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7923},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17662},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14776},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 30883},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11607},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "煤炭精靈CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1379},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 27550},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 14684},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10367},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 27798},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 27926},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 29674},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 38121},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 52462},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12194},
]},
],
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

                   text: '煤炭精靈的PT構成(總分390785)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 92851, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 55779, name: '強襲', legendMarkerType: 'square'},
{  y: 242155, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '彼得的PT統計(總分339014)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 42705,
				            interval: 4270,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "彼得殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 205},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 141},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4424},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 916},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2682},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 30983},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 39190},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 16473},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 965},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 322},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 48},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3024},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18785},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 42705},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 34212},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 11331},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 243},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 76},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 402},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13448},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14533},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 17150},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 33555},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 23355},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "彼得強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3064},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1218},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1641},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7146},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "彼得CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 765},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1636},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14354},
]},
],
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

                   text: '彼得的PT構成(總分339014)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 309190, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13069, name: '強襲', legendMarkerType: 'square'},
{  y: 16755, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '森奈天銘的PT統計(總分328706)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 75279,
				            interval: 7527,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "森奈天銘強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2387},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 11773},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2205},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "森奈天銘殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 196},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 149},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 328},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1984},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 685},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 400},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 687},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1857},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14896},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6499},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "森奈天銘CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 26605},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 35137},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 34003},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 65751},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 28147},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 19736},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 75279},
]},
],
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

                   text: '森奈天銘的PT構成(總分328706)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 27683, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 16365, name: '強襲', legendMarkerType: 'square'},
{  y: 284658, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '托洛斯泰的PT統計(總分321204)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 46436,
				            interval: 4643,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "托洛斯泰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2333},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 19678},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 15463},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13643},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 24921},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 25224},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4201},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25313},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 43089},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 30125},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "托洛斯泰殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 649},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 55},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5384},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1475},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 46436},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 29519},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15531},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "托洛斯泰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 18165},
]},
],
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

                   text: '托洛斯泰的PT構成(總分321204)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 99049, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 18165, name: '強襲', legendMarkerType: 'square'},
{  y: 203990, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '尖史駱滴估詩的PT統計(總分305123)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 53226,
				            interval: 5322,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "尖史駱滴估詩殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 441},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1613},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 405},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1873},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 72},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 885},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 338},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1148},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5534},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "尖史駱滴估詩CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 23700},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 14662},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 40786},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 20578},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 13576},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 25855},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 27021},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 53226},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1676},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 44686},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 27023},
]},
],
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

                   text: '尖史駱滴估詩的PT構成(總分305123)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 12334, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 292789, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '鯛鯛的PT統計(總分280346)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35229,
				            interval: 3522,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鯛鯛殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8841},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 832},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 9607},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 21107},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5976},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 27769},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5134},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 27645},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6945},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2082},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12129},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 24503},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 35229},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8126},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9500},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3343},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9166},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7570},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11705},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鯛鯛強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3344},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3719},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4190},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6971},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6392},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2825},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2728},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鯛鯛CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4697},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8250},
]},
],
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

                   text: '鯛鯛的PT構成(總分280346)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 237230, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 30169, name: '強襲', legendMarkerType: 'square'},
{  y: 12947, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '艾紫培的PT統計(總分269409)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35348,
				            interval: 3534,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾紫培殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1960},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 5670},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 5088},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6522},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 289},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 35348},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7378},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5302},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2158},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4265},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 18576},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 10497},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 13363},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23446},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 31418},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4142},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25694},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2411},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4160},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾紫培強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3049},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10753},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9086},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9224},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5591},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2352},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4641},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5260},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7317},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "艾紫培CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4432},
]},
],
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

                   text: '艾紫培的PT構成(總分269409)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 207704, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 57273, name: '強襲', legendMarkerType: 'square'},
{  y: 4432, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Lee的PT統計(總分268591)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40352,
				            interval: 4035,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Lee強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6618},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3161},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8857},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4958},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Lee殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 9482},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 21},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1679},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 6221},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4048},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 2768},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 9889},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5872},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4734},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4845},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2911},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 567},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6304},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4824},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5027},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23015},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 37418},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 14455},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1265},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5209},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15062},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 40352},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 19349},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1054},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6141},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5258},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "LeeCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7227},
]},
],
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

                   text: 'Lee的PT構成(總分268591)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 237770, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 23594, name: '強襲', legendMarkerType: 'square'},
{  y: 7227, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '萊勒斯的PT統計(總分213658)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29132,
				            interval: 2913,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊勒斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6129},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6568},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8294},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5057},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2821},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 7260},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 19713},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 19017},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 14244},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3631},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 28448},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25515},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29132},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4627},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7669},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5154},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1164},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊勒斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5052},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5095},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3373},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "萊勒斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5670},
]},
],
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

                   text: '萊勒斯的PT構成(總分213658)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 194468, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 13520, name: '強襲', legendMarkerType: 'square'},
{  y: 5670, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Exia的PT統計(總分213308)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 30014,
				            interval: 3001,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Exia殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6102},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3829},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 38},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3677},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 14135},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13523},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 30014},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6302},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 155},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9013},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2642},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 444},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 6888},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5426},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 25348},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13723},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 20501},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 488},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10174},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Exia強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3625},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3479},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4716},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 13115},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 14856},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "ExiaCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1076},
]},
],
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

                   text: 'Exia的PT構成(總分213308)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 172441, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39791, name: '強襲', legendMarkerType: 'square'},
{  y: 1076, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Colin!!!的PT統計(總分191079)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20430,
				            interval: 2043,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Colin!!!殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2987},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7544},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 194},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 549},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1768},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5829},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20430},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 16052},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4785},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5744},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 9861},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4744},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 12684},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 6969},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8116},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 724},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 13094},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 54},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4926},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7333},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17406},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Colin!!!強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9841},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4309},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5394},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3296},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3379},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6813},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6254},
]},
],
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

                   text: 'Colin!!!的PT構成(總分191079)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 151793, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39286, name: '強襲', legendMarkerType: 'square'},
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
				            text: '猪狗轮鹰熊的PT統計(總分168476)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17617,
				            interval: 1761,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "猪狗轮鹰熊殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 3671},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 93},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1382},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 354},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 7983},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2589},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 270},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 7505},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8946},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5628},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5010},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 337},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6130},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6051},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 622},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17617},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 12704},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 15804},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8051},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4718},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1065},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 26},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1393},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 221},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 967},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 348},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4233},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3687},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1804},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "猪狗轮鹰熊強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4957},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4811},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1101},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1503},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1028},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1998},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 974},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14834},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1416},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4663},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1957},
]},
],
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

                   text: '猪狗轮鹰熊的PT構成(總分168476)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 129234, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39242, name: '強襲', legendMarkerType: 'square'},
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
				            text: '夜歌的PT統計(總分150091)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20785,
				            interval: 2078,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5329},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1289},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 745},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2559},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 7166},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8763},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 9812},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 97},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5356},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 10751},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5817},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 4896},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5762},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5456},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7817},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 20173},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 20785},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9787},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1660},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3244},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4205},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3703},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "夜歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 867},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4032},
]},
],
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

                   text: '夜歌的PT構成(總分150091)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 132380, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12812, name: '強襲', legendMarkerType: 'square'},
{  y: 4899, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '修羅魔的PT統計(總分120792)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11405,
				            interval: 1140,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "修羅魔殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5507},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4266},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2396},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1893},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 262},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 533},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4438},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 2875},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4716},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9363},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5222},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10999},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 560},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2161},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8689},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2632},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 6521},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5428},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2708},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "修羅魔強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4886},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5067},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9149},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 11405},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9116},
]},
],
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

                   text: '修羅魔的PT構成(總分120792)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 81169, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39623, name: '強襲', legendMarkerType: 'square'},
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
				            text: 'アルフレッド的PT統計(總分114460)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 11586,
				            interval: 1158,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "アルフレッド殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3163},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4860},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2467},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7806},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 5955},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 10931},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11586},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 1467},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 436},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4687},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 311},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9820},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5737},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 510},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 183},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3901},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5692},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4182},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3717},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4637},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6290},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "アルフレッド強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2613},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1412},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3450},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2899},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "アルフレッドCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2423},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1923},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1378},
]},
],
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

                   text: 'アルフレッド的PT構成(總分114460)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 98362, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 10374, name: '強襲', legendMarkerType: 'square'},
{  y: 5724, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '賽西亞的PT統計(總分95773)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 27788,
				            interval: 2778,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1252},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1045},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1352},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6900},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 3},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 27788},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5960},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5069},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4031},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 17431},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 22994},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "賽西亞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1948},
]},
],
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

                   text: '賽西亞的PT構成(總分95773)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 93825, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1948, name: '強襲', legendMarkerType: 'square'},
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
				            text: '吉利的PT統計(總分88663)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17735,
				            interval: 1773,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吉利殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 32},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1578},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2835},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1034},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 211},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 145},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 17735},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 12149},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1969},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 336},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 676},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 132},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 309},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 323},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 665},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 422},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2704},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1298},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 995},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 319},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1202},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1108},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2290},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7193},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吉利強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 556},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1950},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 988},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 998},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5625},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3200},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2525},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 2471},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2580},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "吉利CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1524},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 544},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 794},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 841},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 998},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1821},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1006},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2483},
]},
],
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

                   text: '吉利的PT構成(總分88663)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 57759, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20893, name: '強襲', legendMarkerType: 'square'},
{  y: 10011, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart34.render();
}
