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
				
				            maximum: 694596,
				            interval: 69459,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 30842},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 41815},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 75173},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 76118},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 97907},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 70067},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 14382},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1572},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 306710},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 265939},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 243244},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 259394},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 258229},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 201646},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 356788},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 237159},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 203421},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5004},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 307886},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 359879},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 280507},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 442918},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 443828},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 356014},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 694596},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 441123},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 519731},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6753},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 18641},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 7189},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 32473},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 17424},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 25699},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1657},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 4328},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3490},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5640},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 36664},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 98936},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 94837},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 100898},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 35831},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13074},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 73539},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6608},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 98507},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 349415},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 224750},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 102733},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22997},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 94918},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 222108},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 155749},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 138123},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 144301},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 158408},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 109160},
]},
],
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
				
				            maximum: 8996744,
				            interval: 899674,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 30842},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 72657},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 147830},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 223948},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 321855},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 391922},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 406304},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 407876},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 714586},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 980525},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1223769},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1483163},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1741392},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1943038},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2299826},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2536985},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2740406},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 2745410},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2745410},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2745412},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2745412},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3053298},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3413177},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3693684},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4136602},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4580430},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4936444},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5631040},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6072163},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6591894},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6753},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 25394},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 32583},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 65056},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 82480},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 108179},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 109836},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 114164},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 117654},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 123294},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 159958},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 258894},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 353731},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 454629},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 490460},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 503534},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 577073},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 583681},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 682188},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1031603},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1256353},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1359086},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1382083},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1477001},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1699109},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 1854858},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1992981},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2137282},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2295690},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2404850},
]},
],
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
				
				            maximum: 349025,
				            interval: 34902,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 5907},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 24396},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 29792},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 31369},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 47285},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 37348},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 7462},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1572},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 127160},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 157887},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 124649},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 129813},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 104304},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 116052},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 160052},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 96149},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 99446},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 68819},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 114175},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 170237},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 210875},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 258054},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 234881},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 268383},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 218249},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 284194},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 24935},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 13796},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 43901},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 43103},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 48326},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 23718},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6920},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 156803},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 89162},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 77625},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 117532},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 122661},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 70722},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 170993},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 118972},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 87011},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 210891},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 206206},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 92223},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 213072},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 152018},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 75041},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 349025},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 205096},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 172827},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 718},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5901},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 6250},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 23144},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5787},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 20512},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 1657},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 3870},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 488},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2683},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 31288},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 68175},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 79749},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 46402},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 28130},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 13074},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 32172},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 6608},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 25044},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 134230},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 111713},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 36517},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 20448},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 12476},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 59580},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 94387},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 99430},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 73286},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 59512},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 92448},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3623},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1480},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1646},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2296},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 9001},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 22747},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 18890},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 40970},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 12049},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 31264},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 14872},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 25743},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 22038},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16964},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4981},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 28176},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 39498},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18047},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 18971},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 33756},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 46092},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 77188},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17778},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 62710},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6035},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 6951},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 939},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 9292},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6930},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3690},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 458},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3002},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2957},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1615},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30761},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4204},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 48427},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7701},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40867},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 50026},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 194090},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 104646},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 66216},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1138},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 81189},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 148437},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 58243},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28883},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14055},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 73418},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 16712},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 5789},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4707},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1497},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3761},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 10884},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6069},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 500},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 23437},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21095},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 8391},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1411},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1253},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14091},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3119},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9810},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 56960},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 25478},
]},
],
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
				            text: '雪歌的PT統計(總分314244)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 147921,
				            interval: 14792,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7336},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4503},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 4598},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16525},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12398},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2982},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 7249},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5670},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 57375},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 147921},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23175},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24494},
]},
],
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

                   text: '雪歌的PT構成(總分314244)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 16455, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 28923, name: '強襲', legendMarkerType: 'square'},
{  y: 268866, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分310976)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 137617,
				            interval: 13761,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 6035},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2335},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2497},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3002},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 137617},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 99999},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 19093},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9532},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 17479},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 599},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 35},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5250},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 509},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 47},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6183},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 727},
]},
],
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

                   text: '土土昕的PT構成(總分310976)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 12660, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 727, name: '強襲', legendMarkerType: 'square'},
{  y: 297589, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '喵鼠的PT統計(總分211581)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 55939,
				            interval: 5593,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1634},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1260},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 30550},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 54047},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 46945},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 55939},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12737},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1515},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5145},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1809},
]},
],
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

                   text: '喵鼠的PT構成(總分211581)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 6660, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1809, name: '強襲', legendMarkerType: 'square'},
{  y: 203112, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分195067)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28452,
				            interval: 2845,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 601},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 383},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 597},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 663},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 471},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 14061},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 28452},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 27508},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1256},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 111},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 16978},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28287},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 13862},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 19864},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 15316},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8466},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2283},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4823},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 6277},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 3888},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 498},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 422},
]},
],
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

                   text: '阿拉的PT構成(總分195067)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 179159, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14988, name: '強襲', legendMarkerType: 'square'},
{  y: 920, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分193630)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 33582,
				            interval: 3358,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 49},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 198},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1093},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2045},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 351},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2924},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6570},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 8327},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 159},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 8760},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 33582},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 225},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 373},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5873},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23943},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 27581},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 16811},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5181},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6115},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 771},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2653},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5197},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 4647},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3975},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 770},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2187},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10136},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5169},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4128},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 3772},
]},
],
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

                   text: '嘎喵的PT構成(總分193630)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 150225, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26162, name: '強襲', legendMarkerType: 'square'},
{  y: 17243, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分157729)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 44829,
				            interval: 4482,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 164},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1514},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 151},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 827},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5084},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 40460},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 40867},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 44829},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 23814},
]},
],
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

                   text: '葬月的PT構成(總分157729)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 7759, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 149970, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '魔法的PT統計(總分148524)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28836,
				            interval: 2883,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 79},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 150},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 39},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 553},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 767},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 197},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2780},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 9797},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19330},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2175},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 3104},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21200},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 28836},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9779},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8636},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 339},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 202},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 307},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 24217},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 50},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7652},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7796},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 516},
]},
],
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

                   text: '魔法的PT構成(總分148524)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 140212, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7796, name: '強襲', legendMarkerType: 'square'},
{  y: 516, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分108239)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 38611,
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
                                    name: "阿榮殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 20},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2060},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4122},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 575},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12509},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1760},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5811},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 38611},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 7701},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 35068},
]},
],
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

                   text: '阿榮的PT構成(總分108239)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 21048, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 44422, name: '強襲', legendMarkerType: 'square'},
{  y: 42769, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分107337)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20279,
				            interval: 2027,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 320},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 155},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 10925},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3025},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 8425},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9386},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5450},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 20279},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3265},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2292},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3505},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 229},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3176},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 271},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2240},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5050},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6665},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4985},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5504},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2830},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2472},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 441},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 733},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5023},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 652},
]},
],
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

                   text: '寇內爾緹的PT構成(總分107337)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 100488, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 5675, name: '強襲', legendMarkerType: 'square'},
{  y: 1174, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分98736)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23999,
				            interval: 2399,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 164},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 586},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 4447},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 418},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3163},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3556},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 6218},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 2909},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 10124},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 23999},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 777},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 185},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 835},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12518},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 16761},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4375},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 22},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2491},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2934},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2043},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 211},
]},
],
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

                   text: '赤雲天的PT構成(總分98736)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 93548, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 2934, name: '強襲', legendMarkerType: 'square'},
{  y: 2254, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分94986)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12974,
				            interval: 1297,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4391},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 633},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7812},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1663},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 11626},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5014},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 4476},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 12974},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5779},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 5218},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5309},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4780},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5153},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5705},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1615},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4523},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 2399},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1574},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4342},
]},
],
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

                   text: '冰的PT構成(總分94986)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 80533, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8315, name: '強襲', legendMarkerType: 'square'},
{  y: 6138, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分89074)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 21719,
				            interval: 2171,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 08, 0), y: 291},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 274},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 322},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 154},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11085},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8268},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 358},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 21719},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 5799},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 109},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9786},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1896},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 785},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8396},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 1218},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2957},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6834},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1138},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4366},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3319},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分89074)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 70460, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 7685, name: '強襲', legendMarkerType: 'square'},
{  y: 10929, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分83884)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 12465,
				            interval: 1246,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 246},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 778},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1990},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 10953},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 1169},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6162},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 7180},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1136},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6067},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12465},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7227},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8437},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2136},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 79},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 2422},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3656},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 4707},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1545},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1253},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1155},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3119},
]},
],
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

                   text: '亞歷的PT構成(總分83884)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 68449, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11779, name: '強襲', legendMarkerType: 'square'},
{  y: 3656, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分81986)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20572,
				            interval: 2057,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 02, 0), y: 564},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1837},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 463},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 148},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1413},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5119},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3222},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1299},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12473},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 20572},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5656},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1943},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9194},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3039},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1513},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 968},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 4110},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 3527},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 1411},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 3038},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 07, 0), y: 458},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分81986)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 69442, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12086, name: '強襲', legendMarkerType: 'square'},
{  y: 458, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分78163)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 29606,
				            interval: 2960,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 30},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 295},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 841},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 16},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 257},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 357},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1385},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 18},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 287},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 678},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3865},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 960},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 1501},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 44},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 41},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 19},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 22572},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 29606},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1581},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1024},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 258},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 2001},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9308},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1133},
]},
],
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

                   text: '冰紅茶的PT構成(總分78163)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 62858, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14172, name: '強襲', legendMarkerType: 'square'},
{  y: 1133, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分69451)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 20313,
				            interval: 2031,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 332},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4738},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 5439},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 5568},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 1718},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4721},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 854},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9234},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7874},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1291},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 20313},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5770},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 48},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1551},
]},
],
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

                   text: '依司瑪耳的PT構成(總分69451)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 62082, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 5818, name: '強襲', legendMarkerType: 'square'},
{  y: 1551, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分61243)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 17831,
				            interval: 1783,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 01, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 35},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 641},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 873},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1951},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 4468},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 258},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1223},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 58},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6917},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 6715},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 2575},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 46},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 1928},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 17831},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 91},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 60},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 7971},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 37},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 671},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 500},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1966},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1824},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2426},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 178},
]},
],
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

                   text: '藏月的PT構成(總分61243)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 53641, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 4998, name: '強襲', legendMarkerType: 'square'},
{  y: 2604, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '荷荷的PT統計(總分697464)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 124231,
				            interval: 12423,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "荷荷殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2794},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 785},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 1570},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3839},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 29671},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 44715},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 74210},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 48346},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 35603},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "荷荷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1373},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 9891},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "荷荷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6920},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 88522},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 47572},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 36370},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 124231},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 109404},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 31623},
]},
],
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

                   text: '荷荷的PT構成(總分697464)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 241558, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 11264, name: '強襲', legendMarkerType: 'square'},
{  y: 444642, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '保羅的PT統計(總分667116)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 159535,
				            interval: 15953,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "保羅CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 24490},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 28508},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 11824},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 65956},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 64309},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 56227},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 146496},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 159535},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 105676},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "保羅殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 845},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 425},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2825},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
]},
],
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

                   text: '保羅的PT構成(總分667116)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 4095, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 663021, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '雪音的PT統計(總分544613)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 202529,
				            interval: 20252,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪音CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 03, 0), y: 18613},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 19818},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 10315},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 105037},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 52799},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 24607},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 202529},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 41422},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 67151},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪音殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 767},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 322},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 342},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪音強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 891},
]},
],
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

                   text: '雪音的PT構成(總分544613)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1431, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 891, name: '強襲', legendMarkerType: 'square'},
{  y: 542291, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '人生無極限的PT統計(總分524876)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 96802,
				            interval: 9680,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 142},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 563},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1858},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2971},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 272},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16215},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 25435},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9287},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1341},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5562},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 40169},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人生無極限強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8795},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17055},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "人生無極限CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 68281},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 41590},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 41255},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 86660},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 96802},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 60600},
]},
],
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

                   text: '人生無極限的PT構成(總分524876)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 103838, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 25850, name: '強襲', legendMarkerType: 'square'},
{  y: 395188, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿道弗斯的PT統計(總分484421)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 111357,
				            interval: 11135,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 180},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2549},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 158},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 42},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 9765},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 24},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1464},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 624},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 23},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 3879},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 1851},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 9246},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿道弗斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8671},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 26993},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿道弗斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 16261},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 8586},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 20729},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 25102},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 69708},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 26571},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 111357},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 106425},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 34213},
]},
],
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

                   text: '阿道弗斯的PT構成(總分484421)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 29805, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35664, name: '強襲', legendMarkerType: 'square'},
{  y: 418952, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '星韻的PT統計(總分445751)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 101715,
				            interval: 10171,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星韻殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 414},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1444},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2840},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 4396},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9277},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8313},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10794},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星韻強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2635},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 18298},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "星韻CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 8674},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 3822},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 19072},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 86292},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 52953},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 44151},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 101715},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 42454},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 28207},
]},
],
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

                   text: '星韻的PT構成(總分445751)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 37478, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20933, name: '強襲', legendMarkerType: 'square'},
{  y: 387340, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '布萊迪的PT統計(總分364500)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 47704,
				            interval: 4770,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 350},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4868},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 9464},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 16063},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 13175},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7818},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 6001},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 14131},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 298},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 10921},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3577},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 32614},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 31433},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7858},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16082},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 11697},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2691},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 7440},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 30050},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 47704},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 21689},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15484},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 3534},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "布萊迪強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5393},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5302},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2113},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5660},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 4981},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5831},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 5739},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 7800},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 6739},
]},
],
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

                   text: '布萊迪的PT構成(總分364500)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 314942, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 49558, name: '強襲', legendMarkerType: 'square'},
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
				            text: '面白小猫的PT統計(總分354143)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 45358,
				            interval: 4535,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1137},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 3117},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 921},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2739},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 921},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9715},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 32278},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7317},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 499},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1105},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7261},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1524},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 30433},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 41812},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 34873},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16727},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 31076},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 23877},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 45358},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11557},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "面白小猫強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 989},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6706},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8435},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10602},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 8983},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "面白小猫CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6138},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1864},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 6177},
]},
],
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

                   text: '面白小猫的PT構成(總分354143)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 304249, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35715, name: '強襲', legendMarkerType: 'square'},
{  y: 14179, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '★桐人★的PT統計(總分273707)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 36488,
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
                                    name: "★桐人★殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 283},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 991},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1977},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 232},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1490},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 13413},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3926},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9771},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 476},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 25100},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 19418},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 36488},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8812},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2091},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9345},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 9130},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18570},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 31540},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 16824},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 13697},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 13280},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6884},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17914},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "★桐人★強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2039},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4412},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1818},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3786},
]},
],
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

                   text: '★桐人★的PT構成(總分273707)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 261652, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12055, name: '強襲', legendMarkerType: 'square'},
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
				            text: '冰淇淋的PT統計(總分254733)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 35397,
				            interval: 3539,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 837},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 978},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 336},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 943},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2548},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12073},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 35397},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 19526},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 26226},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 447},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 1310},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1464},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5770},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 2683},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 2},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 11287},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 18806},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15304},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9600},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 22339},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4245},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8659},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17262},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰淇淋強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5549},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 5210},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1521},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1727},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1649},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 1739},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7867},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7315},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2724},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰淇淋CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1388},
]},
],
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

                   text: '冰淇淋的PT構成(總分254733)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 218044, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35301, name: '強襲', legendMarkerType: 'square'},
{  y: 1388, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '望月.鳴上嵐的PT統計(總分233753)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25455,
				            interval: 2545,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "望月.鳴上嵐殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 231},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 4040},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2280},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2347},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1816},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 7268},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 6635},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7201},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 10082},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6134},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 14061},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 9262},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3473},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8601},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8023},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 8683},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 6973},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 15412},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 21081},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 942},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 25455},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 596},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 17660},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "望月.鳴上嵐強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2296},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 3833},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 3925},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4168},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 5695},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 3824},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4790},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 7746},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 4345},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4875},
]},
],
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

                   text: '望月.鳴上嵐的PT構成(總分233753)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 188256, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 45497, name: '強襲', legendMarkerType: 'square'},
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
				            text: 'Ezio的PT統計(總分232720)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22004,
				            interval: 2200,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 259},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 421},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1012},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 488},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 3643},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 11932},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4571},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5501},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13422},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 22004},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5153},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12602},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 8798},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 13308},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 3185},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6090},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8580},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 12895},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8043},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 5484},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 5834},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 8092},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 15044},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ezio強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 689},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 9372},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3808},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 10336},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6961},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 4347},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7887},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 12959},
]},
],
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

                   text: 'Ezio的PT構成(總分232720)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 176361, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 56359, name: '強襲', legendMarkerType: 'square'},
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
				            text: '葛格不累的PT統計(總分232632)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 40943,
				            interval: 4094,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葛格不累殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 9017},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2259},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 7319},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 1277},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2062},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 11796},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 22192},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 17822},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 18030},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 755},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2707},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5871},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 6334},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28308},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 817},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 40943},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 5917},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19219},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葛格不累CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 26, 0), y: 8748},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葛格不累強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4454},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3095},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1596},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1977},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 7368},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2749},
]},
],
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

                   text: '葛格不累的PT構成(總分232632)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 202645, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 21239, name: '強襲', legendMarkerType: 'square'},
{  y: 8748, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Din★丁的PT統計(總分222968)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 28380,
				            interval: 2838,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Din★丁殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 310},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 761},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2307},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 305},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 821},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1193},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 496},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2174},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 24932},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 23364},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 4758},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 3685},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 2409},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2707},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1533},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 1772},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3532},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 3747},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 16998},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 28380},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 17065},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 10110},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 15238},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 10518},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Din★丁強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 791},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1568},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1288},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5221},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5741},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1519},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1553},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 3511},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5127},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7380},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 8575},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Din★丁CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1579},
]},
],
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

                   text: 'Din★丁的PT構成(總分222968)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 179115, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 42274, name: '強襲', legendMarkerType: 'square'},
{  y: 1579, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '豬肉火腿起司蛋餅的PT統計(總分210348)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22027,
				            interval: 2202,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 03, 0), y: 722},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 1161},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 2876},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 1767},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 2168},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5917},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 13473},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 12824},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 13723},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 12923},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 3273},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1334},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7337},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 8020},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 22027},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 14085},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 8965},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 7001},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 9566},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 12057},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11875},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "豬肉火腿起司蛋餅強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 10, 0), y: 1454},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 13914},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1580},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 18503},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 1803},
]},
],
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

                   text: '豬肉火腿起司蛋餅的PT構成(總分210348)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 173094, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 37254, name: '強襲', legendMarkerType: 'square'},
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
				            text: 'sturtle的PT統計(總分199488)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 25723,
				            interval: 2572,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "sturtle殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 489},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 920},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1143},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 5363},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 6503},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 8346},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 8661},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 6973},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 922},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 286},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 8078},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 3913},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 296},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 7942},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 2325},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25723},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 15371},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8795},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 12906},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 10552},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1505},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 14972},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13271},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "sturtle強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 08, 0), y: 3205},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 6085},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1308},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4345},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11317},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "sturtleCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 02, 0), y: 4100},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 3873},
]},
],
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

                   text: 'sturtle的PT構成(總分199488)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 165255, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 26260, name: '強襲', legendMarkerType: 'square'},
{  y: 7973, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Jason的PT統計(總分167912)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 22712,
				            interval: 2271,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jason強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1036},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 909},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 2180},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1363},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 2777},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 8285},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 22712},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Jason殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 86},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 760},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 1430},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1332},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 923},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 406},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 20431},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 22215},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 11939},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 8494},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 1985},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 154},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 1554},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1054},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1261},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 501},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 5780},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8042},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3720},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 11832},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 14254},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4676},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 5796},
]},
],
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

                   text: 'Jason的PT構成(總分167912)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 128650, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39262, name: '強襲', legendMarkerType: 'square'},
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
				            text: '大李飛刀的PT統計(總分162934)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 13026,
				            interval: 1302,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大李飛刀殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 7701},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 2075},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 986},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 6281},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 3462},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 4822},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 4942},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 2057},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2985},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 7575},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 5556},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 8035},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 10020},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 5779},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 9823},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5288},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 10641},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 8211},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 9491},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 2672},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2770},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 7897},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 13026},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "大李飛刀強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 05, 0), y: 4162},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 12705},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 3955},
]},
],
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

                   text: '大李飛刀的PT構成(總分162934)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 142112, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20822, name: '強襲', legendMarkerType: 'square'},
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
				            text: '惡系的PT統計(總分162608)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 19919,
				            interval: 1991,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 23, 00, 0), y: 527},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 17},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 507},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 895},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 300},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 728},
{ x: new Date(0, 0, 0, 23, 06, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 5247},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 7201},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 4893},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 2777},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 5811},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 15308},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 7029},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 16360},
{ x: new Date(0, 0, 0, 23, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 7811},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 6004},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 25},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 5347},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 6260},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 53},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 1412},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 2154},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 19919},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "惡系CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 28, 0), y: 4139},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "惡系強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1696},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 1646},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 5865},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 6359},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 6226},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 6466},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 8534},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 2896},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 2196},
]},
],
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

                   text: '惡系的PT構成(總分162608)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 116585, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 41884, name: '強襲', legendMarkerType: 'square'},
{  y: 4139, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '風夏的PT統計(總分155207)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23900,
				            interval: 2390,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風夏殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 00, 0), y: 1534},
{ x: new Date(0, 0, 0, 23, 01, 0), y: 1631},
{ x: new Date(0, 0, 0, 23, 02, 0), y: 328},
{ x: new Date(0, 0, 0, 23, 03, 0), y: 2630},
{ x: new Date(0, 0, 0, 23, 04, 0), y: 2763},
{ x: new Date(0, 0, 0, 23, 05, 0), y: 1731},
{ x: new Date(0, 0, 0, 23, 07, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 08, 0), y: 23900},
{ x: new Date(0, 0, 0, 23, 09, 0), y: 10763},
{ x: new Date(0, 0, 0, 23, 10, 0), y: 8124},
{ x: new Date(0, 0, 0, 23, 11, 0), y: 5466},
{ x: new Date(0, 0, 0, 23, 12, 0), y: 3789},
{ x: new Date(0, 0, 0, 23, 13, 0), y: 4804},
{ x: new Date(0, 0, 0, 23, 14, 0), y: 5685},
{ x: new Date(0, 0, 0, 23, 15, 0), y: 2544},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 4061},
{ x: new Date(0, 0, 0, 23, 22, 0), y: 5936},
{ x: new Date(0, 0, 0, 23, 23, 0), y: 9343},
{ x: new Date(0, 0, 0, 23, 24, 0), y: 9384},
{ x: new Date(0, 0, 0, 23, 25, 0), y: 2593},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 9645},
{ x: new Date(0, 0, 0, 23, 27, 0), y: 4736},
{ x: new Date(0, 0, 0, 23, 28, 0), y: 6193},
{ x: new Date(0, 0, 0, 23, 29, 0), y: 11787},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風夏強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 15, 0), y: 1084},
{ x: new Date(0, 0, 0, 23, 16, 0), y: 1061},
{ x: new Date(0, 0, 0, 23, 21, 0), y: 5638},
{ x: new Date(0, 0, 0, 23, 26, 0), y: 4915},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "風夏CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 23, 25, 0), y: 3139},
]},
],
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

                   text: '風夏的PT構成(總分155207)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 139370, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 12698, name: '強襲', legendMarkerType: 'square'},
{  y: 3139, name: 'CBC', legendMarkerType: 'circle'},
			]
		}
		]
	});
	PlayerPieChart37.render();
}
