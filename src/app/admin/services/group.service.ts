import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from 'src/app/model';
import { ConfigService } from 'src/app/core';
import {  RequestParams } from 'src/app/nebula-core';

type EntityResponseType = HttpResponse<Group>;
type EntityArrayResponseType = HttpResponse<Group[]>;

@Injectable()
export class GroupService {

    private resourceUrl = this.config.appConfig.serverApiUrl + 'api/groups';

    constructor(
        private http: HttpClient,
        private config: ConfigService
    ) { }

    query(requestParams : RequestParams): Observable<EntityArrayResponseType> {

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
