import { Injectable, ElementRef } from "@angular/core";

@Injectable()
export class ChartCardData1Service {

  chartLegend = false;
  chartType = 'line';

  //area chart
  chartData: Array<any> = [

    {
      data: [
        86.0,
        100.3,
        89.8,
        101.6,
        97.7,
        108.6,
        109.1,
        89.2,
        94.6,
        102.1,
        93.2,
        99.8,
        89.8,
        104.2


      ]
    }


  ];

  chartLabels: Array<any> = [
    '6.13D',
    '6.13N',
    '6.14D',
    '6.14N',
    '6.15D',
    '6.15N',
    '6.16D',
    '6.16N',
    '6.17D',
    '6.17N',
    '6.18D',
    '6.18N',
    '6.19D',
    '6.19N'

  ];

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
          min: 70,
          max: 120,
          stepSize: 20
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

    gradient.addColorStop(0, 'rgba(255,141,96, 1)');
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
        borderColor: "#F96332",

        //点大小
        pointRadius: 4,
        pointHoverRadius: 5,

        //点边框大小
        pointBorderWidth: 2,
        pointHoverBorderWidth: 1,

        //点背景颜色
        pointBackgroundColor: '#F96332',
        pointHoverBackgroundColor: '#F96332',


        //点边框背景色
        pointBorderColor: '#FFFFFF',
        pointHoverBorderColor: '#FFFFFF',


      }

    ];

    return chartColors;
  }



}