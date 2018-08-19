import { Component, OnInit } from '@angular/core';
import { Chart } from '../../model/chart.model';
import { ChartService } from '../../services/chart.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 
  constructor(private chartService: ChartService) { }

  myChart : Chart;

  ngOnInit() {

    this.myChart = this.chartService.getVerticalBarChart();

  }

}
