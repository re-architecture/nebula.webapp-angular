export interface Chart {
    results:any[];
    options?: ChartOptions;
    scheme?:any;
    view?: number[];  
  }
  
export interface ChartOptions {

    showXAxis? : boolean;
    showYAxis? : boolean;
    gradient? : boolean;
    showLegend? : boolean;
    showXAxisLabel? : boolean;
    xAxisLabel? : string;
    showYAxisLabel? : boolean;
    yAxisLabel? : string;

 } 