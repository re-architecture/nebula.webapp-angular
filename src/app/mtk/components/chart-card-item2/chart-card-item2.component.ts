import { Component, OnInit} from '@angular/core';
import { ChartCardData2Service } from '../../services/chart-card-data2.service';

@Component({
  selector: 'app-mtk-chart-card-item2',
  templateUrl: './chart-card-item2.component.html',
  styleUrls: ['./chart-card-item2.component.scss']
})
export class ChartCardItem2Component implements OnInit {

  constructor(private chartData1: ChartCardData2Service) { }

  ngOnInit() {
   
  }

}
