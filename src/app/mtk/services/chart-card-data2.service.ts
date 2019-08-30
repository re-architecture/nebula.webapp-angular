import { Injectable, ElementRef } from "@angular/core";

@Injectable()
export class ChartCardData2Service {

  chartLegend = false;
  chartType = 'line';

  constructor() {

    let currentDate: Date = new Date(); 

    currentDate.setDate(currentDate.getDate() - 10)

    let a1 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
    let a2 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

    currentDate.setDate(currentDate.getDate() + 1)
    let a3 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
    let a4 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

    currentDate.setDate(currentDate.getDate() + 1)
    let a5 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
    let a6 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

    currentDate.setDate(currentDate.getDate() + 1)
    let a7 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
    let a8 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

    currentDate.setDate(currentDate.getDate() + 1)
    let a9 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
    let a10 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

    currentDate.setDate(currentDate.getDate() + 1)
    let a11 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
    let a12 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

    currentDate.setDate(currentDate.getDate() + 1)
    let a13 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
    let a14 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

    this.chartLabels = [
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14
  
    ];
  }

  //area chart
  chartData: Array<any> = [

    {
      data: [
        5222,
        26786,
        6696,
        25930,
        11640,
        20900,
        4900,
        12300,
        8650,
        24900,
        11050,
        27350,
        11500,
        29200
        


      ]
    }


  ];

  chartLabels: Array<any>;
  // chartLabels: Array<any> = [
  //   '6.13D',
  //   '6.13N',
  //   '6.14D',
  //   '6.14N',
  //   '6.15D',
  //   '6.15N',
  //   '6.16D',
  //   '6.16N',
  //   '6.17D',
  //   '6.17N',
  //   '6.18D',
  //   '6.18N',
  //   '6.19D',
  //   '6.19N'

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
          min: 3000,
          max: 35000,
          stepSize: 5000
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

    gradient.addColorStop(0, 'rgba(24,206,15, 1)');
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
        borderColor: "#18CE0F",

        //点大小
        pointRadius: 4,
        pointHoverRadius: 5,

        //点边框大小
        pointBorderWidth: 2,
        pointHoverBorderWidth: 1,

        //点背景颜色
        pointBackgroundColor: '#18CE0F',
        pointHoverBackgroundColor: '#18CE0F',


        //点边框背景色
        pointBorderColor: '#FFFFFF',
        pointHoverBorderColor: '#FFFFFF',


      }

    ];

    return chartColors;
  }


}