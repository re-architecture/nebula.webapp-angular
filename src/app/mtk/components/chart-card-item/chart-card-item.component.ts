import { Component, OnInit} from '@angular/core';
import { ChartCardData1Service } from '../../services/chart-card-data1.service';

@Component({
  selector: 'app-mtk-chart-card-item',
  templateUrl: './chart-card-item.component.html',
  styleUrls: ['./chart-card-item.component.scss']
})
export class ChartCardItemComponent implements OnInit {

  constructor(public chartData1: ChartCardData1Service) { }

  ngOnInit() {
   
  }

}
