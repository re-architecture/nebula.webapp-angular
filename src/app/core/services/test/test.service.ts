//for test
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandlerService } from '../http-error-handler/http-error-handler.service';



@Injectable({
    providedIn: 'root'
})
export class TestService {

    private handleError: HandleError;

    constructor(
        private http: HttpClient,
        private httpErrorHandler: HttpErrorHandlerService
    ) {
        this.handleError = this.httpErrorHandler.createHandleError('TestService');
    }

    doTest(): Observable<HttpResponse<any>> {
        return this.http.get<any>('api/groups')
            .pipe(
                catchError(this.handleError('doTest', null))
            );
    }

}
