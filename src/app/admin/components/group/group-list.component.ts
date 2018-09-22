import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { GroupDataSource } from '../../services/group.datasource';
import { RequestParams, Pageable, Sort, Order,  MessageService, Message } from 'src/app/nebula-core';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { GroupUpdateComponent } from './group-update.component';
import { Group } from 'src/app/model';

@Component({
  selector: 'app-admin-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  groupName: string;
  groupType: string;

  dataSource: GroupDataSource;

  displayedColumns = [
    'id',
    'name',
    'description',
    'isSystem',
    'actions'
  ];

  @ViewChild('btnSearch', { read: ElementRef }) btnSearch: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private groupService: GroupService,
    private dialog: MatDialog,
    private msg: MessageService

  ) { }

  ngOnInit() {

    this.groupName = '';
    this.groupType = '';

    const pageable = new Pageable(0, 10);

    const requestParams: RequestParams = new RequestParams(null, pageable);


    this.dataSource = new GroupDataSource(this.groupService);


    this.dataSource.loadData(requestParams);

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

  loadData() {

    //this.selection.clear();

    let params: HttpParams = new HttpParams();
    if (this.groupName) {
      params = params.set('name', this.groupName);
    }

    if (this.groupType) {
      params = params.set('isSystem', this.groupType);
    }

    const pageable = new Pageable(
      this.paginator.pageIndex,
      this.paginator.pageSize,
      new Sort([new Order(this.sort.active, this.sort.direction)])
    );

    const requestParams: RequestParams = new RequestParams(params, pageable);

    this.dataSource.loadData(requestParams);

  }


  onCreate() {

    const dialogRef = this.dialog.open(GroupUpdateComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'success') {
        this.loadData();
        this.msg.notification(new Message('创建组成功'));

      }
    });
  }


  onEdit(id: number) {

    let group: Group;

    this.groupService.find(id).subscribe(
      (httpResponse: HttpResponse<Group>) => {
        group = httpResponse.body;

        const dialogRef = this.dialog.open(GroupUpdateComponent, {

          data: { group }

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
          if (result == 'success') {
            this.loadData();

            this.msg.notification(new Message('修改成功'));
          }

        });


      }
    );


  }

}
