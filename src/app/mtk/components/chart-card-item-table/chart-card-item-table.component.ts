import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';


@Component({
  selector: 'app-mtk-chart-card-item-table',
  templateUrl: './chart-card-item-table.component.html',
  styleUrls: ['./chart-card-item-table.component.scss']
})
export class ChartCardItemTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['col1', 'col2'];

  ngOnInit() {
    this.dataSource = new TableDataSource(this.paginator, this.sort);
  }

  constructor() { }

}
