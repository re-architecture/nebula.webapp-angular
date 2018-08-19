import { Injectable } from '@angular/core';
import { Chart, ChartOptions } from '../model/chart.model';

@Injectable()
export class ChartService {

  constructor() { }

  getVerticalBarChart(): Chart {


    var data = [
      {
        "name": "Germany",
        "value": 18940000
      },
      {
        "name": "USA",
        "value": 25000000
      },
      {
        "name": "France",
        "value": 37200000
      }
    ];

    // options
    const chartOptions: ChartOptions = {

      showXAxis: true,
      showYAxis: true,
      gradient: false,
      showLegend: true,
      showXAxisLabel: true,
      xAxisLabel: 'uuuuuuuCountry',
      showYAxisLabel: true,
      yAxisLabel: 'xxxxxxxxxxxxxPopulation'

    };

    const colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };


    const myChart: Chart = {
      results:data,
      options: chartOptions,
      scheme: colorScheme,
      view : [700, 400]
    };

    return myChart;
  }

}
