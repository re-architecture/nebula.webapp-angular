//area chart
export var areaChartData: Array<any> = [

  { data: [76.7, 83.7, 91.8, 88.1, 93.4, 97.1, 96.9, 91.2, 88.2, 96.2, 97.5, 89.9]}

];
export var areaChartLabels: Array<any> = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
export var areaChartOptions: any = {
  animation: {
    duration: 1000, // general animation time
    easing: 'linear'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true,
      ticks: {
        fontColor:"#9E9E9E",
        fontStyle:"bold"
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        fontColor:"#9E9E9E",
        fontStyle:"bold",
        min: 70,
        max: 100,
        stepSize: 10
      },
      gridLines: {
        color: "#424242",  //424242
        drawTicks: false,
        
      },
      scaleLabel: {
        display: true,
        labelString: 'Productivity 生产率 %',
        fontColor:'#9E9E9E',
        fontStyle:"bold"
      }
    }]
  },
};


export var areaChartColors: Array<any> = [

  {
  
    //backgroundColor:'#ff0000',
    //stroke: '#ff0000',
    //background: 'linearGradient(right,red,blue)',
    //backgroundColor: 'linear-gradient(red,blue)',
    //backgroundColor: 'rgba(255, 141, 96, 0.1)',
    borderColor: 'transparent',
    pointBackgroundColor: '#FFF',
    pointBorderColor: 'rgba(255, 141, 96,1)',
    pointHoverBackgroundColor: 'rgba(255, 141, 96,1)',
    pointRadius: '5',
    pointHoverBorderColor: '#FFF',
    pointHoverRadius: '5',
    pointBorderWidth: '2'
  },
  {

    backgroundColor: 'rgba(0, 157, 160, 0.7)',
    borderColor: 'transparent',
    pointBackgroundColor: '#FFF',
    pointBorderColor: 'rgba(0, 157, 160,1)',
    pointHoverBackgroundColor: 'rgba(0, 157, 160,1)',
    pointRadius: '5',
    pointHoverBorderColor: '#FFF',
    pointHoverRadius: '5',
    pointBorderWidth: '2'
  },

];
export var areaChartLegend = false;
export var areaChartType = 'line';

