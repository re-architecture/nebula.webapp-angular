import { Component, OnInit, Input } from '@angular/core';
import { single } from './data';
import {Chart} from '../../model/chart.model';

@Component({
  selector: 'app-mtk-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() chart: Chart;

  // options
  showXAxis : boolean;
  showYAxis : boolean;
  gradient : boolean;
  showLegend : boolean;
  showXAxisLabel : boolean;
  xAxisLabel : string;
  showYAxisLabel : boolean;
  yAxisLabel : string;

  colorScheme : any;
  view: any[]; 
  results : any[];

  constructor() {
    //Object.assign(this, { single })
  }

  ngOnInit() {
    
    this.showXAxis = this.chart.options.showXAxis;
    this.showYAxis = this.chart.options.showYAxis;
    this.gradient = this.chart.options.gradient;
    this.showLegend = this.chart.options.showLegend;
    this.showXAxisLabel = this.chart.options.showXAxisLabel;
    this.xAxisLabel = this.chart.options.xAxisLabel;
    this.showYAxisLabel = this.chart.options.showYAxisLabel;
    this.yAxisLabel = this.chart.options.yAxisLabel;

    this.colorScheme = this.chart.scheme;
    this.view = this.chart.view;
    this.results = this.chart.results;

  }

 

  onSelect(event) {
    console.log(event);
  }

}
