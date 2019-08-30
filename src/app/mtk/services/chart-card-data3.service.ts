import { Injectable, ElementRef } from "@angular/core";

@Injectable()
export class ChartCardData3Service {

  chartLegend = false;
  chartType = 'line';

  constructor() {

    let currentDate: Date = new Date();

    currentDate.setDate(currentDate.getDate() - 10)

    let a1: string = currentDate.getFullYear().toString() + '-' + (currentDate.getMonth() + 1).toString() + '-' + currentDate.getDate().toString();

    currentDate.setDate(currentDate.getDate() + 1)
    let a2: string = currentDate.getFullYear().toString() + '-' + (currentDate.getMonth() + 1).toString() + '-' + currentDate.getDate().toString();

    currentDate.setDate(currentDate.getDate() + 1)
    let a3: string = currentDate.getFullYear().toString() + '-' + (currentDate.getMonth() + 1).toString() + '-' + currentDate.getDate().toString();

    currentDate.setDate(currentDate.getDate() + 1)
    let a4: string = currentDate.getFullYear().toString() + '-' + (currentDate.getMonth() + 1).toString() + '-' + currentDate.getDate().toString();

    currentDate.setDate(currentDate.getDate() + 1)
    let a5: string = currentDate.getFullYear().toString() + '-' + (currentDate.getMonth() + 1).toString() + '-' + currentDate.getDate().toString();

    currentDate.setDate(currentDate.getDate() + 1)
    let a6: string = currentDate.getFullYear().toString() + '-' + (currentDate.getMonth() + 1).toString() + '-' + currentDate.getDate().toString();

    currentDate.setDate(currentDate.getDate() + 1)
    let a7: string = currentDate.getFullYear().toString() + '-' + (currentDate.getMonth() + 1).toString() + '-' + currentDate.getDate().toString();

    this.chartLabels = [
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7

    ];

  }
  //area chart
  chartData: Array<any> = [

    {
      data: [
        95693,
        131349,
        127936,
        62671,
        78889,
        165814,
        142452,


      ]
    }


  ];
  chartLabels: Array<any>;
  // chartLabels: Array<any> = [
  //   '2013-06-13',
  //   '2013-06-14',
  //   '2013-06-15',
  //   '2013-06-16',
  //   '2013-06-17',
  //   '2013-06-18',
  //   '2013-06-19'


  // ];

  chartOptions: any = {
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
        display: false,
        ticks: {
          fontColor: "#9E9E9E",
          fontStyle: "bold"
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          fontColor: "#9E9E9E",
          fontStyle: "bold",
          min: 50000,
          max: 180000,
          stepSize: 50000
        },
        gridLines: {
          color: "#424242",  //424242
          drawTicks: false,

        },
        scaleLabel: {
          display: false,
          labelString: 'Value',
          fontColor: '#9E9E9E',
          fontStyle: "bold"
        }
      }]
    },
  };


  getChartColors(canvas: ElementRef): Array<any> {

    let gradient = canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 120);

    //0, 0, 0, 200
    //let gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    //gradient.addColorStop(0, 'green');

    //gradient.addColorStop(1, 'white');
    // let gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 100);
    // gradient.addColorStop(0, 'rgba(255,141,96, 1)');
    // gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    //gradient.addColorStop(1, 'rgba(31, 31,31, 0.5)');  //'#1f1f1f'

    gradient.addColorStop(0, 'rgba(44,168,255, 1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    let chartColors: Array<any> = [
      {

        //fill: false,
        //lineTension: 0,
        //borderDash: [5, 5],
        //borderColor: 'transparent',
        //pointHoverBackgroundColor: 'rgba(255, 141, 96,1)',
        //backgroundColor: 'rgba(0, 157, 160, 0.7)',

        //线下渐变色
        backgroundColor: gradient,

        //线粗细
        borderWidth: 2,
        //线颜色
        borderColor: "#2CA8FF",

        //点大小
        pointRadius: 4,
        pointHoverRadius: 5,

        //点边框大小
        pointBorderWidth: 2,
        pointHoverBorderWidth: 1,

        //点背景颜色
        pointBackgroundColor: '#2CA8FF',
        pointHoverBackgroundColor: '#2CA8FF',


        //点边框背景色
        pointBorderColor: '#FFFFFF',
        pointHoverBorderColor: '#FFFFFF',


      }

    ];

    return chartColors;
  }


}