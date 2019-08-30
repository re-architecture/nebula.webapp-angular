import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  col1: string;
  col2: string;
}

let currentDate: Date = new Date(); 

currentDate.setDate(currentDate.getDate() - 10)

let a1 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
let a2 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

currentDate.setDate(currentDate.getDate() + 1)
let a3 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
let a4 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

currentDate.setDate(currentDate.getDate() + 1)
let a5 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
let a6 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

currentDate.setDate(currentDate.getDate() + 1)
let a7 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
let a8 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

currentDate.setDate(currentDate.getDate() + 1)
let a9 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
let a10 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

currentDate.setDate(currentDate.getDate() + 1)
let a11 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
let a12 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';

currentDate.setDate(currentDate.getDate() + 1)
let a13 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'D';
let a14 : string = (currentDate.getMonth() + 1).toString() + '.' + currentDate.getDate().toString() + 'N';


// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  { col1: a1, col2: '5222' },
  { col1: a2, col2: '26786' },
  { col1: a3, col2: '6696  ' },
  { col1: a4, col2: '25930' },
  { col1: a5, col2: '11640' },
  { col1: a6, col2: '20900' },
  { col1: a7, col2: '4900' },
  { col1: a8, col2: '12300' },
  { col1: a9, col2: '8650' },
  { col1: a10, col2: '24900' },
  { col1: a11, col2: '11050' },
  { col1: a12, col2: '27350' },
  { col1: a13, col2: '11500' },
  { col1: a14, col2: '29200' }

];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'col2': return compare(a.col2, b.col2, isAsc);
        //case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
