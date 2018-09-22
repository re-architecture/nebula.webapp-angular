import { CollectionViewer, DataSource } from "@angular/cdk/collections";

import { catchError, finalize } from "rxjs/operators";
import { BehaviorSubject, Observable, of } from "rxjs";
import { ScrapForm } from "../../model/scrap-form";
import { MTKService } from "../../services/mtk.service";
import { HttpResponse } from "@angular/common/http";

export class ScrapFormDataSource implements DataSource<ScrapForm> {

    public totalCount: number;

    private dataSubject = new BehaviorSubject<ScrapForm[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private mtkService: MTKService) {

    }

    loadData(formStatus: string,
        product: string,
        shift: string,
        costCenter: string,
        sort: string,
        sortDirection: string,
        pageIndex: number,
        pageSize: number) {

        this.loadingSubject.next(true);

        this.mtkService.findScrapForm(formStatus,product,shift,costCenter, sort, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((data: HttpResponse<ScrapForm[]>) => {
                this.totalCount = parseInt(data.headers.get('X-Total-Count'));
                return this.dataSubject.next(data.body)

            });
        //this.totalCount = 200;
    }

    connect(collectionViewer: CollectionViewer): Observable<ScrapForm[]> {
        //console.log("Connecting data source");
        return this.dataSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.dataSubject.complete();
        this.loadingSubject.complete();
    }



}