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
				
				            maximum: 1469695,
				            interval: 146969,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 260872},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 294188},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 379244},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 461616},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 485042},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 597791},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 837212},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 781641},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 536036},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 592778},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 666187},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 568734},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 808451},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 604775},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 796846},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 852873},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 880998},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1083059},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1196410},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 1322002},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 1145377},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 810940},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 1182850},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 1069955},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1072477},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1069601},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 1429984},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 1469695},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 1336765},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1118892},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 205683},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 150863},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 335922},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 240607},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 389832},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 276399},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 342221},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 228141},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 485240},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 481727},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 405191},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 389794},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 515592},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 605496},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 524796},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 520017},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 430771},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 425710},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 415054},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 377781},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 458603},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 509998},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 397725},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 421837},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 449637},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 380153},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 442534},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 477925},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 415883},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 463065},
]},
],
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
				
				            maximum: 37877488,
				            interval: 3787748,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 260872},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 555060},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 934304},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1395920},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1880962},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2478753},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3315965},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 4097606},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4633642},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5226420},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5892607},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6461341},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7269792},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7874567},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 8671413},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 9524286},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10405284},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11488343},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12684753},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14006755},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 15152132},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15963072},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 17145922},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 18215877},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19288354},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20357955},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21787939},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23257634},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 24594399},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 25713291},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 205683},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 356546},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 692468},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 933075},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1322907},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1599306},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1941527},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2169668},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2654908},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 3136635},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3541826},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3931620},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 4447212},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5052708},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5577504},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 6097521},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6528292},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 6954002},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 7369056},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 7746837},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8205440},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8715438},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9113163},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9535000},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 9984637},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 10364790},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 10807324},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 11285249},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 11701132},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 12164197},
]},
],
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
				
				            maximum: 740191,
				            interval: 74019,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 179482},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 207183},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 201955},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 331134},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 271627},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 389391},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 533246},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 608396},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 309472},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 400642},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 415062},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 331188},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 498531},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 316292},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 440405},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 537313},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 426327},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 609018},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 521677},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 587721},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 500936},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 392648},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 532447},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 488434},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 733860},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 528310},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 595595},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 622360},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 531344},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 691387},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 29488},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 31988},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 98774},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 73668},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 127389},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 95795},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 78940},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 36062},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 222260},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 222422},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 106272},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 162345},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 268819},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 218650},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 151084},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 119897},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 142284},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 111518},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 245245},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 168993},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 220801},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 273523},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 184366},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 193528},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 107468},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 113645},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 138863},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 284745},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 197312},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 175790},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 57662},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 53750},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 127275},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 93815},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 163395},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 123417},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 232813},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 111160},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 202567},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 145698},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 174130},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 187737},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 241745},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 222683},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 273458},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 237957},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 337425},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 355834},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 576786},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 652683},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 529339},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 346062},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 445853},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 498051},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 249641},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 431392},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 711750},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 740191},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 652412},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 330767},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 165854},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 102054},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 186157},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 152318},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 205564},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 152078},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 224646},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 158728},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 208925},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 218651},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 258557},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 191002},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 182776},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 319290},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 273076},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 335138},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 210065},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 271792},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 114129},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 153993},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 167313},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 192641},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 185137},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 168517},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 247282},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 230932},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 260312},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 147498},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 170966},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 183118},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "我方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 23728},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 33255},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 50014},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 36667},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 50020},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 84983},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 71153},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 62085},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 23997},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 46438},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 76995},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 49809},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 68175},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 65800},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 82983},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 77603},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 117246},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 118207},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 97947},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 81598},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 115102},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 72230},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 204550},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 83470},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 88976},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 109899},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 122639},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 107144},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 153009},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 96738},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "敵方CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10341},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 16821},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 50991},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14621},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 56879},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 28526},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 38635},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 33351},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 54055},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 40654},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 40362},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 36447},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 63997},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 67556},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 100636},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 64982},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 78422},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 42400},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 55680},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 54795},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 70489},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 43834},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 28222},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 59792},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 94887},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 35576},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 43359},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 45682},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 47605},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 104157},
]},
],
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
				            text: '喵鼠的PT統計(總分2262225)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 226308,
				            interval: 22630,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11761},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 24889},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 31242},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15031},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12640},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17814},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5057},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10964},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 21780},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 30958},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 64310},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3171},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 41787},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 64497},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 84457},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 104217},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 139744},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 91183},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 36773},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 97764},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 115106},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 83838},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 58858},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 226308},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 161040},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 136136},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 30015},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6367},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 23663},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 16662},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2483},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 12611},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 39984},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 34220},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 45417},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 30613},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 58086},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 48836},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 41928},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 78729},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "喵鼠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8664},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 883},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8378},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 487},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6147},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 451},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7057},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7806},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 1625},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8005},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 8220},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 24163},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 8130},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 8563},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2707},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
]},
],
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

                   text: '喵鼠的PT構成(總分2262225)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 101286, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1721340, name: '強襲', legendMarkerType: 'square'},
{  y: 439599, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雪歌的PT統計(總分1919337)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 228795,
				            interval: 22879,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8660},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 9611},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16860},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 19430},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 10592},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 38096},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 12279},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11491},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 23095},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5927},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14793},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 26470},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13938},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 54651},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 49558},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19500},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 39191},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 48121},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10894},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21797},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 113496},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 228795},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 104456},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 39050},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 45512},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 220607},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 84249},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 53541},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 97052},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 193845},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 79924},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 59066},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雪歌殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4791},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5245},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 727},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5624},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3306},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6442},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6288},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 8215},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11048},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3371},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 26602},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3590},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7638},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7625},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7481},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5131},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15810},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 8439},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7417},
]},
],
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

                   text: '雪歌的PT構成(總分1919337)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 144790, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1647528, name: '強襲', legendMarkerType: 'square'},
{  y: 127019, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '葬月的PT統計(總分1912691)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 204799,
				            interval: 20479,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6926},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 18697},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13386},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 33261},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 10380},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17916},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 21997},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 21540},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 29561},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14005},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 18016},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 29245},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 19319},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 41113},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 97241},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 41155},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 80035},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 42659},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 80766},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 61273},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 90861},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 71512},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 29675},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 87969},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 186064},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 204799},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 118399},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 67195},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4589},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 3229},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 3694},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4964},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 576},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6742},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 2919},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6628},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6871},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6289},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10691},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2746},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 27926},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8065},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 8235},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 4438},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3906},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 9013},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "葬月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8701},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8320},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 11248},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 31820},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 32265},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 13403},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 14359},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 23210},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19270},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 73609},
]},
],
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

                   text: '葬月的PT構成(總分1912691)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 121521, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1554965, name: '強襲', legendMarkerType: 'square'},
{  y: 236205, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '土土昕的PT統計(總分1787261)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 179428,
				            interval: 17942,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 24480},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 14291},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 19781},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 43194},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 15609},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 40996},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 19302},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 19057},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11179},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13213},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 33793},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 38778},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 38734},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 26876},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 76615},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 95219},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 179428},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 105015},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 94392},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 52462},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 148245},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 93652},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 40828},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 137691},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 91549},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6995},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 1749},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6629},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 1138},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 4664},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1833},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7415},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 4252},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8426},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7592},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7944},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 12006},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3769},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 4978},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 31},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 3821},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "土土昕CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 11818},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 15819},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22011},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 91721},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 19210},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 64808},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4253},
]},
],
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

                   text: '土土昕的PT構成(總分1787261)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 83242, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1474379, name: '強襲', legendMarkerType: 'square'},
{  y: 229640, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿拉的PT統計(總分1701325)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 113212,
				            interval: 11321,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 33123},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 25967},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 48981},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 27880},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 91770},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 73464},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 70649},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 86635},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 17470},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4999},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 80184},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 50038},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 51},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 21040},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 55156},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8937},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 46156},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 92451},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 1760},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 46872},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3839},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 46099},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 30039},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 55086},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 78390},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 23077},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 20071},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 99955},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 105558},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 113212},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12182},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12476},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13277},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15721},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31064},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 48334},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 7201},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿拉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 7592},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15394},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 10633},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 14269},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 17835},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 20243},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 16195},
]},
],
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

                   text: '阿拉的PT構成(總分1701325)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1458909, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 140255, name: '強襲', legendMarkerType: 'square'},
{  y: 102161, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '雷克斯的PT統計(總分1537071)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 110000,
				            interval: 11000,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 11698},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 18283},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 12592},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 32192},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 16988},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 33124},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 64181},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 34283},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 37193},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17404},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 31752},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 52577},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 79820},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 12478},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 55327},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 88827},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 33748},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 70420},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 68979},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 53835},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 24396},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16489},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 55195},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 53065},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 110000},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 62109},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 59937},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 77056},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 72949},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 106794},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 8402},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9879},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16059},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 5465},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "雷克斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 35, 0), y: 33575},
]},
],
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

                   text: '雷克斯的PT構成(總分1537071)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1463691, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 33575, name: '強襲', legendMarkerType: 'square'},
{  y: 39805, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '鬼魅魍魎的PT統計(總分1468442)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 173104,
				            interval: 17310,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 31904},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 25290},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 27925},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 29201},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 36344},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 21721},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 41010},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 15514},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 4144},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19780},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7165},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 24922},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 39461},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 86255},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 97104},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 77573},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 173104},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 60801},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 44574},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 110228},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 26780},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 30928},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32167},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 72474},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 75052},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 52734},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26200},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 47721},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 17511},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8270},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14236},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 17097},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "鬼魅魍魎CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5218},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8302},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7735},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8163},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 14633},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 14351},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 14850},
]},
],
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

                   text: '鬼魅魍魎的PT構成(總分1468442)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1355587, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 39603, name: '強襲', legendMarkerType: 'square'},
{  y: 73252, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '嘎喵的PT統計(總分1433025)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 94624,
				            interval: 9462,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 25590},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 34152},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9003},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 62525},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 24815},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 44998},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 81740},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 85602},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6526},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 94624},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 43394},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 62522},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 90374},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 80678},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 47936},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 21234},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 49939},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 64473},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 69238},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 33015},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 911},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 40645},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 66870},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 4616},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 92747},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 27766},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 70136},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 23940},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4154},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 6131},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6068},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6270},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15996},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 16917},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 14419},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "嘎喵強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 3061},
]},
],
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

                   text: '嘎喵的PT構成(總分1433025)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1364163, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 3061, name: '強襲', legendMarkerType: 'square'},
{  y: 65801, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '羽龍的PT統計(總分1398993)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 93219,
				            interval: 9321,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 17914},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 15720},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5904},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8304},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 24649},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 33805},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 16704},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 31195},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 32645},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 32083},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 40084},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 38296},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 33074},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22718},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 33178},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 59567},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 11890},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 55075},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 30668},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 32538},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 35070},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25953},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 27318},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 45105},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 75578},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 39033},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 93219},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 44694},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13008},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4745},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2000},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5190},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 1751},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 1761},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2698},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7631},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 1670},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11012},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16129},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 6192},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 35588},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 13067},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "羽龍CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 6565},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15808},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12354},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 16379},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 20850},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 16397},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22836},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 28903},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 31857},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 31983},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 59324},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 20216},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 31073},
]},
],
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

                   text: '羽龍的PT構成(總分1398993)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 109459, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 974989, name: '強襲', legendMarkerType: 'square'},
{  y: 314545, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰的PT統計(總分1312858)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 107407,
				            interval: 10740,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 29532},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 28263},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14174},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 22324},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 24071},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 4981},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 107407},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7036},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 23572},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 27779},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 47085},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 27668},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 90639},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30286},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 29292},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 24013},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 28460},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 50777},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 31369},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 91261},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 61059},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 46148},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25099},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 2184},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 74264},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 64460},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 103621},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 85752},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 46260},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 11514},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2060},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 14625},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7541},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 15389},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12893},
]},
],
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

                   text: '冰的PT構成(總分1312858)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1260350, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35823, name: '強襲', legendMarkerType: 'square'},
{  y: 16685, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '赤雲天的PT統計(總分1272339)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 90388,
				            interval: 9038,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 15581},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 16665},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 28170},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 24281},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 1790},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 50643},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 53118},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 63750},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 66159},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 79052},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 84705},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 26900},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 47905},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20130},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 61034},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11096},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 87475},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3055},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3747},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 26001},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 8733},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15838},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 62008},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 90388},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 73928},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 56473},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 64942},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15470},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18172},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 194},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5560},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9293},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 8753},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8007},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 13504},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6518},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "赤雲天強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8603},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6202},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 12639},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 15857},
]},
],
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

                   text: '赤雲天的PT構成(總分1272339)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1177403, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 43301, name: '強襲', legendMarkerType: 'square'},
{  y: 51635, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冰紅茶的PT統計(總分1255060)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 105152,
				            interval: 10515,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 2780},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4580},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1954},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3755},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7716},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 52},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 5969},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7271},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11910},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6042},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 3840},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1889},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 8753},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 6763},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 8342},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 20273},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10914},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 14920},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 28892},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17699},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 21982},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 41415},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 28104},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18518},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 66828},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 52025},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 15351},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 29330},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 34094},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 20667},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 90872},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 31317},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 28486},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 105152},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 18513},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 55282},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 42314},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 71058},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 69641},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 98840},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 48561},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冰紅茶CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15148},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 23225},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 25498},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 28525},
]},
],
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

                   text: '冰紅茶的PT構成(總分1255060)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 73274, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1089390, name: '強襲', legendMarkerType: 'square'},
{  y: 92396, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '藏月的PT統計(總分1248035)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 161697,
				            interval: 16169,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 15, 0), y: 16025},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 16641},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 18652},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 40991},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 21087},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9536},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 32118},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 65692},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 45698},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 27556},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 10129},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6763},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14274},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 30743},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23564},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 65030},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 9439},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 7842},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 66625},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 35925},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19305},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 78339},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 35901},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 123253},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 70524},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 5073},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 53365},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 27243},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 58553},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 161697},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8321},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16713},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16309},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "藏月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9109},
]},
],
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

                   text: '藏月的PT構成(總分1248035)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1197583, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 9109, name: '強襲', legendMarkerType: 'square'},
{  y: 41343, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '依司瑪耳的PT統計(總分1205283)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 94372,
				            interval: 9437,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 19454},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 15519},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 34131},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 15399},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 31333},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 22365},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 681},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 23138},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 13848},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 71395},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 25630},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 47050},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22173},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 27680},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 84355},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 63468},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 94372},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 11184},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 57410},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 6975},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 11801},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 43531},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 3596},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 35075},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 23663},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 94258},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 32, 0), y: 18446},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 30603},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 21373},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "依司瑪耳CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7946},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 9015},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 14196},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 10338},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 17157},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 36321},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 35001},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 24376},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 17699},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 54381},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 8947},
]},
],
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

                   text: '依司瑪耳的PT構成(總分1205283)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 899484, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 70422, name: '強襲', legendMarkerType: 'square'},
{  y: 235377, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '魔法的PT統計(總分1201518)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 148236,
				            interval: 14823,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 16686},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 24454},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 18534},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 8961},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 18746},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 20193},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 64925},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14768},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 2104},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 23115},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 21266},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2130},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17399},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 17509},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 4692},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 32527},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 61188},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 109347},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 47209},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22222},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 34160},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 23859},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24610},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20291},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 88957},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 75053},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 84281},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 148236},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9231},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7801},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 8808},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3860},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 12890},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 14933},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 19581},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 22335},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "魔法強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5394},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 8346},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9447},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11916},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 19554},
]},
],
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

                   text: '魔法的PT構成(總分1201518)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1047422, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 54657, name: '強襲', legendMarkerType: 'square'},
{  y: 99439, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '有生之蓮解鋒鏑的PT統計(總分875049)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 100392,
				            interval: 10039,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 18, 0), y: 13903},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6127},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 35948},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 35578},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 24301},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 22521},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 100392},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20361},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 35229},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 21847},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 5359},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 55197},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 59477},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 58776},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 19256},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18004},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11863},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7144},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 1222},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 36671},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 31026},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 62047},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 9908},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 40873},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20489},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 25067},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 30},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 34, 0), y: 15981},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 19631},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "有生之蓮解鋒鏑CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 20, 0), y: 6820},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 18962},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 15819},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19220},
]},
],
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

                   text: '有生之蓮解鋒鏑的PT構成(總分875049)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 778616, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 35612, name: '強襲', legendMarkerType: 'square'},
{  y: 60821, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞歷的PT統計(總分812135)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 138681,
				            interval: 13868,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 27, 0), y: 1566},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3260},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 22221},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 73079},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1927},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 42417},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 35230},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18360},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 76439},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 74316},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 61844},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 29117},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 40414},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 138681},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 26193},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 127343},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 6115},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 34, 0), y: 11905},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 13590},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞歷強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 8118},
]},
],
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

                   text: '亞歷的PT構成(總分812135)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 778522, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 8118, name: '強襲', legendMarkerType: 'square'},
{  y: 25495, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿榮的PT統計(總分522942)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 73449,
				            interval: 7344,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5872},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 9902},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9600},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 1597},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7086},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2289},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 683},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 24},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 8471},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 1123},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9183},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 9119},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 9112},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 9701},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 7529},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19681},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 15518},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 28354},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 73449},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 47494},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 21494},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19762},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 64805},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿榮CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13058},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 14509},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6186},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 7645},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5891},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 8155},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19603},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25246},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18743},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 22058},
]},
],
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

                   text: '阿榮的PT構成(總分522942)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 46647, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 335201, name: '強襲', legendMarkerType: 'square'},
{  y: 141094, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '秋風冷月的PT統計(總分357047)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 43644,
				            interval: 4364,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13104},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6360},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 25318},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 17177},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18189},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 4603},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 9744},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 15651},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14918},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 43221},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 43644},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6676},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 21569},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 17954},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "秋風冷月殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13336},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2532},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 10637},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 6091},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2274},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 6419},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 28926},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6268},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5697},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 4488},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 2645},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 9606},
]},
],
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

                   text: '秋風冷月的PT構成(總分357047)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 98919, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 177980, name: '強襲', legendMarkerType: 'square'},
{  y: 80148, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '寇內爾緹的PT統計(總分230655)'
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
                                    name: "寇內爾緹殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9028},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2685},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 10236},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8303},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 13523},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 21658},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5865},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 50684},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 22074},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 12477},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 871},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 15111},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "寇內爾緹強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3310},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9096},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 11642},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19759},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 7131},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 7202},
]},
],
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

                   text: '寇內爾緹的PT構成(總分230655)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 172515, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 58140, name: '強襲', legendMarkerType: 'square'},
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
				            text: '歐古奇斯的PT統計(總分1488659)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 90941,
				            interval: 9094,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐古奇斯殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 26735},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 28385},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 80791},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 68176},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 31967},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 52192},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 87937},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 58232},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 34787},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 32573},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 40663},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 3849},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 33749},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 90941},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 47040},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8323},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 32206},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 52948},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12945},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 19957},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 43919},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 39503},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 25625},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 58381},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 44654},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 37814},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 81956},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 40495},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 69397},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 80891},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐古奇斯強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 26, 0), y: 16223},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 5894},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 13396},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 9959},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 16187},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 16070},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 12739},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "歐古奇斯CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 7544},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 12437},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 11179},
]},
],
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

                   text: '歐古奇斯的PT構成(總分1488659)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1367031, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 90468, name: '強襲', legendMarkerType: 'square'},
{  y: 31160, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '蔡小冠的PT統計(總分1317289)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 70933,
				            interval: 7093,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蔡小冠強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 23880},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 25079},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 28728},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 21086},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 16489},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 70933},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 36135},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 19086},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 57138},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 21510},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 18819},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 21856},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 22656},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 59007},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 22882},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 41924},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 45799},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 63182},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 57233},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 58636},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 20999},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 40266},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 63716},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 20883},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 43872},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蔡小冠殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4543},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 5421},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5830},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 5938},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6405},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 23},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 412},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6053},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13154},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3594},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3086},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 28659},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 2453},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 7760},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "蔡小冠CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10341},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 37671},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 14677},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 18431},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20415},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6124},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 9855},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19594},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 25155},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 22227},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 43030},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 55671},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 18973},
]},
],
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

                   text: '蔡小冠的PT構成(總分1317289)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 93331, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 921794, name: '強襲', legendMarkerType: 'square'},
{  y: 302164, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '冷傲狼的PT統計(總分1310406)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 140351,
				            interval: 14035,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冷傲狼強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 13100},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 8108},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 27956},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 25009},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 30209},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 29428},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12228},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 35003},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 37586},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 25892},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 55259},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 54917},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 73099},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 54515},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 30932},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 39656},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 10589},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 23511},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 29055},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 140351},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 32152},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 47523},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 54843},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 23403},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 78058},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 45725},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 71316},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冷傲狼殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4399},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5014},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 4358},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3097},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 473},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7725},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6244},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 7034},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7076},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6369},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 4301},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 23965},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 3641},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 7263},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 14882},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 1322},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 52},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 5984},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 4031},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "冷傲狼CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 17577},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 24600},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 19729},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21847},
]},
],
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

                   text: '冷傲狼的PT構成(總分1310406)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 117230, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 1109423, name: '強襲', legendMarkerType: 'square'},
{  y: 83753, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '法諾米的PT統計(總分1243370)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 111155,
				            interval: 11115,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法諾米殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 17970},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 35851},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 35076},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 17657},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 17824},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 68917},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 18303},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 22385},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 48231},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 26378},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 66211},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 72934},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 27518},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 60385},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 25215},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 49029},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1641},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 105612},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 3115},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 29364},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 26810},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 33933},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 24913},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 23454},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 111155},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 30191},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 36122},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 44004},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 44633},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 70798},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法諾米CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 6623},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 8129},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 12964},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "法諾米強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 22, 0), y: 9009},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 11016},
]},
],
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

                   text: '法諾米的PT構成(總分1243370)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1195629, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 20025, name: '強襲', legendMarkerType: 'square'},
{  y: 27716, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '晴空曉的PT統計(總分1088565)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 104157,
				            interval: 10415,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "晴空曉CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 27, 0), y: 37845},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 37822},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 28144},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 30649},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 15194},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 26679},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 104157},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "晴空曉殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 1875},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10617},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 11266},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 2300},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 3857},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5829},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 6410},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6467},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 5160},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 28048},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2325},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 3086},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 7217},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 7604},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 10823},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 5588},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 6661},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "晴空曉強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 18, 0), y: 14714},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 32407},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 27131},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 22019},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 46469},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 3743},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 32241},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 43429},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 43789},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 41435},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 27068},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 72595},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 31721},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 31354},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 37803},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 28461},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 61493},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 85070},
]},
],
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

                   text: '晴空曉的PT構成(總分1088565)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 125133, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 682942, name: '強襲', legendMarkerType: 'square'},
{  y: 280490, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '龍騰宗的PT統計(總分1059148)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 85344,
				            interval: 8534,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍騰宗殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 36347},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 14911},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 34821},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 36684},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 71761},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3193},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 17655},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15693},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 32779},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 28740},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 53693},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 14911},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 6667},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 37332},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 56106},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 47004},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 61881},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 33781},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 36233},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 16157},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 52813},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 40254},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 85344},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9313},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 62884},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 43147},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 35295},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 31747},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 27242},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 661},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "龍騰宗CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 6589},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7510},
]},
],
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

                   text: '龍騰宗的PT構成(總分1059148)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1045049, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 14099, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '克勞德的PT統計(總分936260)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 76396,
				            interval: 7639,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克勞德殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 29090},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 14445},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 884},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 30046},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 17399},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 21573},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 13331},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 22303},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 61314},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 20251},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 24204},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 29941},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 18458},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 46507},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 76396},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 51571},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3742},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 2537},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 13895},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 20269},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 4626},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 29244},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 32149},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 5289},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 48982},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 19442},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 934},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 15950},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 21369},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克勞德強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 14530},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 8285},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14825},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7918},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 19222},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 10932},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 11908},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 18493},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 13025},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 15545},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 18201},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "克勞德CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22735},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 21475},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 24022},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 19003},
]},
],
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

                   text: '克勞德的PT構成(總分936260)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 696141, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 152884, name: '強襲', legendMarkerType: 'square'},
{  y: 87235, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Ablaze真澄的PT統計(總分829005)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 79404,
				            interval: 7940,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ablaze真澄殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 26294},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 51},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 21403},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 12050},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 34117},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 2072},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 25279},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 14208},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 54787},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 34949},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 34849},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 32433},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 52806},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 65956},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 39647},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 45749},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 1731},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 36417},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 48468},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 12365},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 12644},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 30329},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 104},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 25085},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 2122},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 40218},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 79404},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 20622},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ablaze真澄CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 10548},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 12298},
]},
],
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

                   text: 'Ablaze真澄的PT構成(總分829005)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 806159, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 22846, name: 'CBC', legendMarkerType: 'square'},
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
				            text: '芬里爾的PT統計(總分676968)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 59081,
				            interval: 5908,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "芬里爾殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6681},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 2271},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 2269},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 3900},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6171},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 11629},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 2444},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6630},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 13584},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 408},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 22684},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3163},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 9312},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 4137},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 3035},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "芬里爾強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 19, 0), y: 12594},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 21778},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 23015},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23428},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 8525},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24365},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 59081},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4739},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 12210},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 29677},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 27433},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "芬里爾CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 13320},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7998},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 13849},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 12075},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 15774},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 22149},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 36447},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 20028},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 21710},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 30532},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 20925},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 18782},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 24146},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 20538},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 15258},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 16762},
{ x: new Date(0, 0, 0, 12, 41, 0), y: 21512},
]},
],
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

                   text: '芬里爾的PT構成(總分676968)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 98318, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 246845, name: '強襲', legendMarkerType: 'square'},
{  y: 331805, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '海爾南特的PT統計(總分506921)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60041,
				            interval: 6004,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海爾南特殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 9616},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 1047},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2436},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 438},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 12785},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 5537},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 9854},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 7438},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11929},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22995},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 7553},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 7806},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 5012},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海爾南特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 10091},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 36822},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2436},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 31984},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 3182},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 22543},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 30999},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 60041},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 22803},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 34065},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 26327},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "海爾南特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 11394},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 49335},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 19879},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 40574},
]},
],
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

                   text: '海爾南特的PT構成(總分506921)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 104446, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 281293, name: '強襲', legendMarkerType: 'square'},
{  y: 121182, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '阿葵亞的PT統計(總分433562)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 103898,
				            interval: 10389,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿葵亞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 14831},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 34065},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 31918},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12499},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿葵亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 21, 0), y: 3808},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 5909},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6414},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 6476},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 942},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "阿葵亞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 24, 0), y: 17774},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15503},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 33725},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 103898},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 96811},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 36228},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12761},
]},
],
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

                   text: '阿葵亞的PT構成(總分433562)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 23549, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 316700, name: '強襲', legendMarkerType: 'square'},
{  y: 93313, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '傑特的PT統計(總分418511)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 64239,
				            interval: 6423,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
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
{ x: new Date(0, 0, 0, 12, 16, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 4893},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 5332},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 5208},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 27539},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 7717},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5430},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 6413},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 28, 0), y: 20463},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 23959},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 22053},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 1567},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 17, 0), y: 19466},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 15397},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 18895},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 32947},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 19250},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 35036},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 64239},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 44235},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 3412},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "傑特CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 6527},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 28533},
]},
],
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

                   text: '傑特的PT構成(總分418511)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 130574, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 252877, name: '強襲', legendMarkerType: 'square'},
{  y: 35060, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '諾雅·挪亞的PT統計(總分391337)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 71994,
				            interval: 7199,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅·挪亞CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 36, 0), y: 23296},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 16603},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅·挪亞殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 28, 0), y: 6038},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 2222},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 12822},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 6438},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 3349},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 34, 0), y: 6545},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 36, 0), y: 13708},
{ x: new Date(0, 0, 0, 12, 37, 0), y: 9481},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 39, 0), y: 4729},
{ x: new Date(0, 0, 0, 12, 40, 0), y: 25121},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "諾雅·挪亞強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 13414},
{ x: new Date(0, 0, 0, 12, 32, 0), y: 56352},
{ x: new Date(0, 0, 0, 12, 33, 0), y: 71994},
{ x: new Date(0, 0, 0, 12, 35, 0), y: 62174},
{ x: new Date(0, 0, 0, 12, 38, 0), y: 57051},
]},
],
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

                   text: '諾雅·挪亞的PT構成(總分391337)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 90453, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 260985, name: '強襲', legendMarkerType: 'square'},
{  y: 39899, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Brandeis的PT統計(總分184354)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 60602,
				            interval: 6060,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Brandeis殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 41, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 43, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 5368},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Brandeis強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 41, 0), y: 18978},
{ x: new Date(0, 0, 0, 12, 42, 0), y: 51801},
{ x: new Date(0, 0, 0, 12, 44, 0), y: 60602},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "BrandeisCBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 43, 0), y: 47605},
]},
],
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

                   text: 'Brandeis的PT構成(總分184354)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 5368, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 131381, name: '強襲', legendMarkerType: 'square'},
{  y: 47605, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: '亞緹娜的PT統計(總分159564)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 23499,
				            interval: 2349,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞緹娜殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 4179},
{ x: new Date(0, 0, 0, 12, 16, 0), y: 1126},
{ x: new Date(0, 0, 0, 12, 17, 0), y: 5857},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 2777},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 5018},
{ x: new Date(0, 0, 0, 12, 22, 0), y: 6139},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 5867},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 3756},
{ x: new Date(0, 0, 0, 12, 26, 0), y: 11448},
{ x: new Date(0, 0, 0, 12, 27, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 8144},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞緹娜強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 15, 0), y: 6297},
{ x: new Date(0, 0, 0, 12, 18, 0), y: 7757},
{ x: new Date(0, 0, 0, 12, 19, 0), y: 10179},
{ x: new Date(0, 0, 0, 12, 20, 0), y: 8911},
{ x: new Date(0, 0, 0, 12, 21, 0), y: 10480},
{ x: new Date(0, 0, 0, 12, 23, 0), y: 11963},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 20740},
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23499},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "亞緹娜CBC",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 16, 0), y: 5427},
]},
],
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

                   text: '亞緹娜的PT構成(總分159564)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 54311, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 99826, name: '強襲', legendMarkerType: 'square'},
{  y: 5427, name: 'CBC', legendMarkerType: 'circle'},
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
				            text: 'Ablaze羽晴的PT統計(總分84475)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 34304,
				            interval: 3430,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "Ablaze羽晴殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 29, 0), y: 23996},
{ x: new Date(0, 0, 0, 12, 30, 0), y: 34304},
{ x: new Date(0, 0, 0, 12, 31, 0), y: 26175},
]},
],
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

                   text: 'Ablaze羽晴的PT構成(總分84475)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 84475, name: '殲滅', legendMarkerType: 'triangle'},
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
				            text: 'TMD好心情的PT統計(總分35803)'
			            },
			            axisY2:{
				            valueFormatString:'0 pt',
				
				            maximum: 18637,
				            interval: 1863,
				            interlacedColor: '#F5F5F5',
				            gridColor: '#D7D7D7',      
	 			            tickColor: '#D7D7D7'								
			            },
                                    theme: 'theme2',
                                    toolTip:{
                                            shared: true
                                    },
			            legend:{
				            verticalAlign: 'bottom',
				            horizontalAlign: 'center',
				            fontSize: 15,
				            fontFamily: 'Lucida Sans Unicode'

			            },
			            data: [
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "TMD好心情殲滅",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 0},
{ x: new Date(0, 0, 0, 12, 24, 0), y: 1312},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 0},
]},
{type: "line",
                                    lineThickness: 1,
                                    axisYType: "secondary",
                                    markerSize: 5,
                                    showInLegend: true,
                                    name: "TMD好心情強襲",
                                    dataPoints: [
{ x: new Date(0, 0, 0, 12, 23, 0), y: 18637},
{ x: new Date(0, 0, 0, 12, 25, 0), y: 15854},
]},
],
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

                   text: 'TMD好心情的PT構成(總分35803)',
            fontFamily: 'arial black'

        },
                animationEnabled: true,
		legend:
            {
                verticalAlign: 'bottom',
			horizontalAlign: 'center'

        },
		theme: 'theme1',
		data: [

        {
            type: 'pie',
            indexLabelFontFamily: 'Garamond',
            indexLabelFontSize: 20,
            indexLabelFontWeight: 'bold',
            startAngle: 0,
            indexLabelFontColor: 'MistyRose',
            indexLabelLineColor: 'darkgrey',
            indexLabelPlacement: 'inside',
            toolTipContent: '{name}: {y}Pt',
            showInLegend: true,
            indexLabel: '#percent%',
            dataPoints: [


        
{  y: 1312, name: '殲滅', legendMarkerType: 'triangle'},
{  y: 34491, name: '強襲', legendMarkerType: 'square'},
			]
		}
		]
	});
	PlayerPieChart37.render();
}
