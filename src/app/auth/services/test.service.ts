import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorHandlerService, HandleError } from 'src/app/services';
import { catchError } from 'rxjs/operators';


@Injectable()

export class TestService {

    private handleError: HandleError;

    constructor(
        private http: HttpClient,
        private httpErrorHandler: HttpErrorHandlerService
    ) {
        this.handleError = this.httpErrorHandler.createHandleError('TestService');
    }

    getAccount(): Observable<HttpResponse<Account>> {
        return this.http.get<Account>('apix/account')
            .pipe(
                catchError(this.handleError('getAccount', null))
            );
    }

}
