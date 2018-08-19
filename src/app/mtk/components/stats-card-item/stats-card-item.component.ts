import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-mtk-stats-card-item',
  templateUrl: './stats-card-item.component.html',
  styleUrls: ['./stats-card-item.component.scss']
})
export class StatsCardItemComponent implements OnInit {

  @Input() icon: String;
  @Input() iconColor: String;
  @Input() value: Number;
  @Input() title: String;

  constructor() { }

  ngOnInit() {

  }



}
