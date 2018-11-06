// import { Injectable } from '@angular/core';
// import {
//   HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
// } from '@angular/common/http';

// import { AuthService } from '../auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//     constructor(private auth: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     // Get the auth token from the service.
//     const authToken = this.auth.getAuthorizationToken();

//     /*
//     * The verbose way:
//     // Clone the request and replace the original headers with
//     // cloned headers, updated with the authorization.
//     const authReq = req.clone({
//       headers: req.headers.set('Authorization', authToken)
//     });
//     */
//     // Clone the request and set the new header in one step.
//     const authReq = req.clone({ setHeaders: { Authorization: authToken } });

//     // send cloned request with header to the next handler.
//     return next.handle(authReq);
//   }
// }

import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SessionStorageService } from '../session-storage/session-storage.service';
//import { SERVER_API_URL } from '../auth/app.constants';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        if (!req || !req.url || (/^http/.test(req.url) && !(environment.serverApiUrl && req.url.startsWith(environment.serverApiUrl)))) {
            
            return next.handle(req);
        }

        //const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        const token = this.localStorage.getItem('authenticationToken') || this.sessionStorage.getItem('authenticationToken');
       
        if (!!token) {
          
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }

        return next.handle(req);
    }


}