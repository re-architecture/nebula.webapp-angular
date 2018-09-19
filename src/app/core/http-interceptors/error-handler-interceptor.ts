import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EventManagerService } from '../services/event-manager/event-manager.service';
import { Injectable } from '@angular/core';
import { ToastNotificationService, MessageType } from '../services/toast-notification/toast-notification.service';
import { MessageService, Message } from 'src/app/nebula-core';


@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(
        private eventManager: EventManagerService,
        private toastNotification: ToastNotificationService,
        private msg : MessageService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => { },
                (err: any) => {

                    const errObject = {
                        name: err.name,
                        status: err.status,
                        statusText: err.statusText,
                        url: err.url,
                        message: err.message,
                        error: err.error
                    };

                    const errorTitle = `${err.status} - ${err.statusText}`

                    if (err instanceof HttpErrorResponse) {

                        //    {"name":"HttpErrorResponse","status":504,"statusText":"Gateway Timeout","url":"http://localhost:4200/api/authenticate","message":"Http failure response for http://localhost:4200/api/authenticate: 504 Gateway Timeout","error":"Error occured while trying to proxy to: localhost:4200/api/authenticate"}
                        //      {"name":"HttpErrorResponse","status":504,"statusText":"Gateway Timeout","url":"http://localhost:4200/api/account","message":"Http failure response for http://localhost:4200/api/account: 504 Gateway Timeout","error":"Error occured while trying to proxy to: localhost:4200/api/account"}
                        //    {"name":"HttpErrorResponse","status":400,"statusText":"Bad Request","url":"http://localhost:4200/api/authenticate","message":"Http failure response for http://localhost:4200/api/authenticate: 400 Bad Request","error":{"type":"https://www.jhipster.tech/problem/constraint-violation","title":"Method argument not valid","status":400,"path":"/api/authenticate","message":"error.validation","fieldErrors":[{"objectName":"loginVM","field":"password","message":"Size"}]}}


                        //   {"name":"HttpErrorResponse","status":401,"statusText":"Unauthorized","url":"http://localhost:4200/api/authenticate","message":"Http failure response for http://localhost:4200/api/authenticate: 401 Unauthorized","error":{"type":"https://www.jhipster.tech/problem/problem-with-message","title":"Unauthorized","status":401,"detail":"Bad credentials","path":"/api/authenticate","message":"error.http.401"}}

                        //此处应处理非正常的网络异常。
                        //验证账号是否已登录得到的401错误，不在此处处理
                        //登录时的用户名或密码401认证错误，不在此处处理
                        if (!(err.status === 401 && (err.message === '' || (err.url && err.url.includes('/api/account'))))
                            && !(err.status === 401 && err.url.includes('/authenticate'))
                        ) {

                            // this.toastNotification.openDialog(JSON.stringify(errObject), errorTitle, MessageType.Error);
                            this.msg.toast(new Message(errorTitle,JSON.stringify(errObject),'Error'));
                            //if (this.eventManager !== undefined) {
                            //    this.eventManager.broadcast({ name: 'Application.httpError', content: err });
                            //}
                        }
                    }
                }
            )
        );
    }
}
