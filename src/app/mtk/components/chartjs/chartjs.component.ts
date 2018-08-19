import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-mtk-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  @Input("chartData") chartService;

  chartColors;
  chartData;
  chartLabels;
  chartOptions;
  chartLegend;
  chartType;
  
  @ViewChild("myCanvas")
  canvas: ElementRef;

  constructor() { }

  ngOnInit() {

    this.chartColors = this.chartService.getChartColors(this.canvas);

    this.chartData = this.chartService.chartData;

    this.chartLabels = this.chartService.chartLabels;
    this.chartOptions = this.chartService.chartOptions;
    
    this.chartLegend = this.chartService.chartLegend;
    this.chartType = this.chartService.chartType;

  }
 
  // events
  chartClicked(e: any): void {
    //your code here
  }

  chartHovered(e: any): void {
    //your code here
  }

}
