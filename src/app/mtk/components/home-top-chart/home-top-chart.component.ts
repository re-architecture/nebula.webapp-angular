import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

import * as chartsData from '../../services/data/chartjs';
import { MTKService } from '../../services/mtk.service';

@Component({
  selector: 'app-mtk-home-top-chart',
  templateUrl: './home-top-chart.component.html',
  styleUrls: ['./home-top-chart.component.scss']
})
export class HomeTopChartComponent implements OnInit {

  constructor(private mtkService:MTKService){}

  @ViewChild("myCanvas")
  canvas: ElementRef;

  areaChartColors;

  ngOnInit() {

    //0, 0, 0, 200
    //let gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    //gradient.addColorStop(0, 'green');

    //gradient.addColorStop(1, 'white');
    let gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, '#616161');
    gradient.addColorStop(1, 'rgba(31, 31,31, 0.5)');  //'#1f1f1f'

    this.areaChartColors = [
      {
        //fill: false,
        //lineTension: 0,
        //borderDash: [5, 5],

        backgroundColor: gradient,
        //backgroundColor: 'rgba(0, 157, 160, 0.7)',
        borderColor: "#FFFFFF",
        borderWidth:2,
        //borderColor: 'transparent',

        pointBackgroundColor: '#212121',
        pointBorderColor: '#FFFFFF',
        //pointHoverBackgroundColor: 'rgba(255, 141, 96,1)',
        
        pointHoverBorderColor: '#FFF',
        pointBorderWidth: 1,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 6,
       
      }
    ];


    //console.log(this.mtkService.getMonthArrayByCurrentDate());


   
  }

  

  // areaChart
  areaChartData = chartsData.areaChartData;
  //areaChartLabels = chartsData.areaChartLabels;

  areaChartLabels = this.mtkService.getMonthArrayByCurrentDate()
  areaChartOptions = chartsData.areaChartOptions;
  //areaChartColors = chartsData.areaChartColors;
  areaChartLegend = chartsData.areaChartLegend;
  areaChartType = chartsData.areaChartType;

  // events
  chartClicked(e: any): void {
    //your code here
  }

  chartHovered(e: any): void {
    //your code here
  }

}
