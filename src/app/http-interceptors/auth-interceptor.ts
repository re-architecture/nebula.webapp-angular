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

//下面代码是空代码
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}