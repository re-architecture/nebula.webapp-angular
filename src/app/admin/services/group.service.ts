import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from 'src/app/model';
import { ConfigService } from 'src/app/core';
import {  RequestParams } from 'src/app/nebula-core';



@Injectable()
export class GroupService {
    constructor(
        private http: HttpClient,
        private config: ConfigService
    ) { }

    getGroups(requestParams : RequestParams): Observable<HttpResponse<Group[]>> {

        const options = requestParams.getHttpParams();
       
        return this.http.get<Group[]>(
            this.config.appConfig.serverApiUrl + 'api/groups',
            { params: options,observe: 'response' }
        );
    }
}
