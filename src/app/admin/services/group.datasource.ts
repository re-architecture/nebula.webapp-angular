import { CollectionViewer, DataSource } from "@angular/cdk/collections";

import { catchError, finalize } from "rxjs/operators";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { GroupService } from "./group.service";
import { Group } from "src/app/model";
import { RequestParams } from "src/app/nebula-core";

export class GroupDataSource implements DataSource<Group> {

    public totalCount: number;

    private dataSubject = new BehaviorSubject<Group[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public isLoading$ = this.loadingSubject.asObservable();

    constructor(private groupService: GroupService) {

    }

    loadData(requestParams: RequestParams) {

        this.loadingSubject.next(true);

        this.groupService.getGroups(requestParams).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe((data: HttpResponse<Group[]>) => {
                this.totalCount = parseInt(data.headers.get('X-Total-Count'));
                return this.dataSubject.next(data.body)

            });
        //this.totalCount = 200;
    }

    connect(collectionViewer: CollectionViewer): Observable<Group[]> {
        //console.log("Connecting data source");
        return this.dataSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        //console.log("disconnect data source");
        this.dataSubject.complete();
        this.loadingSubject.complete();
    }



}