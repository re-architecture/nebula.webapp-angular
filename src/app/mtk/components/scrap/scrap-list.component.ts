import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
//import { TableDataSource } from './table-datasource';

import { MatPaginator, MatSort, MatDialog } from '@angular/material';

import { MTKService } from '../../services/mtk.service';
import { ScrapFormDataSource } from './scrap-form.datasource';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

import { SelectionModel } from '@angular/cdk/collections';
import { ScrapForm } from '../../model/scrap-form';
import { FormControl } from '@angular/forms';
import { ScrapEditComponent } from './scrap-edit.component';
import { MessageService, Message } from 'src/app/nebula-core';

@Component({
    selector: 'app-mtk-scrap-list',
    templateUrl: './scrap-list.component.html',
    styleUrls: ['./scrap-list.component.scss'],
    // Encapsulation has to be disabled in order for the
    // component style to apply to the select panel.
    //encapsulation: ViewEncapsulation.None,
})
export class ScrapListComponent implements OnInit {

    highlightedRows : any;

    formStatus = 'All';
    product = 'All';
    shift = 'All';
    costCenter = 'All';

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    //@ViewChild('btnSearch') btnSearch: any;
    @ViewChild('btnSearch', { read: ElementRef }) btnSearch: ElementRef;
    @ViewChild('input') input: ElementRef;

    dataSource: ScrapFormDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = [

        'select',
        'formID',
        'formStatus',
        'nextApproverName',
        'formNo',
        'creatorName',
        'costCenter',
        'family',
        'product',
        'line',
        'shift',
        'accountAlias',
        'actions'

    ];




    constructor(private mtkService: MTKService,
        public dialog: MatDialog,private msg: MessageService) { }

    ngOnInit() {


        this.dataSource = new ScrapFormDataSource(this.mtkService);

        //this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
        this.dataSource.loadData('All', 'All', 'All', 'All', '', '', 0, 8);
    }

    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        //fromEvent(this.input.nativeElement,'keyup')
        //https://stackoverflow.com/questions/49947026/button-input-does-not-work-with-rxjs-fromevent
        fromEvent(this.btnSearch.nativeElement, 'click')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;
                    this.loadData();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadData())
            )
            .subscribe();

    }

    openError() {
        this.msg.toast(new Message("Application.ServerError - Connection to server is offline",null, 'Error'))
      }

    loadData() {
        this.selection.clear();
        this.dataSource.loadData(
            this.formStatus,
            this.product,
            this.shift,
            this.costCenter,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }


    selection = new SelectionModel<ScrapForm>(true, []);

    isButtonDisabled() {
        const numSelected = this.selection.selected.length;
        if (numSelected > 0) {
            return false;
        } else {
            return true;
        }
    }


    /** Whether the number of selected elements matches the total number of rows. */
    /*   isAllSelected() {
        const numSelected = this.selection.selected.length;
        //const numRows = this.dataSource.data.length;
        const numRows = this.dataSource.totalCount;
        return numSelected === numRows;
      } */

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /*   masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
      } */


    onEdit(id: number) {
        //this.id = id;
        // index row is used just for debugging proposes and can be removed
        //this.index = i;
       // console.log(id);
        const dialogRef = this.dialog.open(ScrapEditComponent, {
            //height: '500px',
            //width: '700px',
            data: { id: id }
        });

        dialogRef.afterClosed().subscribe(result => {
            //if (result == 'doUpdate') {
            // When using an edit things are little different, firstly we find record inside DataService by id
            //const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
            // Then you update that record using data from dialogData (values you enetered)
            //this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
            // And lastly refresh table
            //this.refreshTable();
            //this.refreshTable.emit(null);
            // }
        });
    }


}
