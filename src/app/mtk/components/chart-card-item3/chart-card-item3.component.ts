import { Component, OnInit} from '@angular/core';
import { ChartCardData3Service } from '../../services/chart-card-data3.service';

@Component({
  selector: 'app-mtk-chart-card-item3',
  templateUrl: './chart-card-item3.component.html',
  styleUrls: ['./chart-card-item3.component.scss']
})
export class ChartCardItem3Component implements OnInit {

  constructor(public chartData1: ChartCardData3Service) { }

  ngOnInit() {
   
  }

}
