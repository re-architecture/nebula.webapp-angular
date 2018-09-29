import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MTKRoutingModule } from './mtk-routing.module';

//import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeTopChartComponent } from './components/home-top-chart/home-top-chart.component';

import { ChartsModule } from 'ng2-charts';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
//import { SharedModule } from '@app/shared';
import { StatsCardItemComponent } from './components/stats-card-item/stats-card-item.component';


import { ChartjsComponent } from './components/chartjs/chartjs.component';
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { ChartCardItemTableComponent } from './components/chart-card-item-table/chart-card-item-table.component';
import { ChartCardItemComponent } from './components/chart-card-item/chart-card-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ScrapPageComponent } from './pages/scrap-page/scrap-page.component';
import { ScrapListComponent } from './components/scrap/scrap-list.component';
import { MTKService } from './services/mtk.service';
import { ScrapEditComponent } from './components/scrap/scrap-edit.component';
import { MaterialListComponent } from './components/scrap/material-list.component';
import { ChartComponent } from './components/chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartService } from './services/chart.service';
import { ChartCardItem2Component } from './components/chart-card-item2/chart-card-item2.component';
import { ChartCardItemTable2Component } from './components/chart-chard-item-table2/chart-card-item-table2.component';
import { ChartCardData2Service } from './services/chart-card-data2.service';
import { ChartCardData1Service } from './services/chart-card-data1.service';
import { ChartCardData3Service } from './services/chart-card-data3.service';
import { ChartCardItemTable3Component } from './components/chart-chard-item-table3/chart-card-item-table3.component';
import { ChartCardItem3Component } from './components/chart-card-item3/chart-card-item3.component';
import { MaterialModule, FontAwesomeModule } from 'src/app/shared';

@NgModule({
  imports: [
    MTKRoutingModule,
    //NgxChartsModule,
    ChartsModule,
    MaterialModule,
    NgxChartsModule,
    FontAwesomeModule
  ],
  declarations: [
    HomePageComponent,
    HomeTopChartComponent,
    StatsCardComponent,
    StatsCardItemComponent,
    ChartjsComponent,
    ChartCardComponent,
    ChartCardItemTableComponent,
    ChartCardItemComponent,
    ScrapPageComponent,
    ScrapListComponent,
    ScrapEditComponent,
    MaterialListComponent,
    ChartComponent,
    ChartCardItemTable2Component,
    ChartCardItem2Component,
    ChartCardItemTable3Component,
    ChartCardItem3Component,
  ],

  entryComponents: [ScrapEditComponent],
  providers: [
    MTKService,
    ChartService,
    ChartCardData1Service,
    ChartCardData2Service,
    ChartCardData3Service
  ]
})
export class MTKModule { }
