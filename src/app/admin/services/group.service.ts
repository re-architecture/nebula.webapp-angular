import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from 'src/app/model';

import {  RequestParams, ConfigService } from 'src/app/nebula-core';

import { environment } from 'src/environments/environment';

type EntityResponseType = HttpResponse<Group>;
type EntityArrayResponseType = HttpResponse<Group[]>;

@Injectable()
export class GroupService {

    //private resourceUrl = this.config.appConfig.serverApiUrl + 'api/groups';
    private resourceUrl = environment.serverApiUrl + 'api/groups';

    constructor(
        private http: HttpClient,
        private config: ConfigService
    ) { }

    query(requestParams : RequestParams): Observable<EntityArrayResponseType> {

        //console.log(this.resourceUrl);

        const options = requestParams.getHttpParams();
       
        return this.http.get<Group[]>(
            this.resourceUrl,
            { params: options,observe: 'response' }
        );
    }

    create(group: Group): Observable<EntityResponseType> {
        return this.http.post<Group>(this.resourceUrl, group, { observe: 'response' });
    }

    update(group: Group): Observable<EntityResponseType> {
        return this.http.put<Group>(this.resourceUrl, group, { observe: 'response' });
    }

    find(id: number | string): Observable<EntityResponseType> {
        return this.http.get<Group>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

}
