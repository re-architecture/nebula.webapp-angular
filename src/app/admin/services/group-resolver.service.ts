import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Group } from 'src/app/model';
import { GroupService } from './group.service';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class GroupResolver implements Resolve<Group> {
    constructor(private groupService: GroupService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Group> {
        let id = route.paramMap.get('id');

        if (id) {
            return this.groupService.find(id).pipe(
                map((httpResponse: HttpResponse<Group>) => httpResponse.body)
            );
        } else {
            return of(new Group());
        }
    }
}