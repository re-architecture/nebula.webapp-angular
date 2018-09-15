
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './http-interceptors/noop-interceptor';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { AuthExpiredInterceptor } from './http-interceptors/auth-expired-interceptor';
import { ErrorHandlerInterceptor } from './http-interceptors/error-handler-interceptor';

/* "Barrel" of Http Interceptors */
// import { CachingInterceptor } from './caching-interceptor';
// import { EnsureHttpsInterceptor } from './ensure-https-interceptor';
// import { LoggingInterceptor } from './logging-interceptor';

// import { TrimNameInterceptor } from './trim-name-interceptor';
// import { UploadInterceptor } from './upload-interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },

    //   { provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: TrimNameInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthExpiredInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
    //   { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },

];

export * from './services/auth/state-storage.service';
export * from './services/auth/account.model';
export * from './services/auth/principal.service';

export * from './services/login/login.service';
export * from './services/config/config.service';
export * from './services/config/config';
export * from './services/config/json-config.service';

export * from './services/theme/theme.service';
export * from './services/local-storage/local-storage.service';
export * from './services/session-storage/session-storage.service';
export * from './services/http-error-handler/http-error-handler.service';


export * from './services/toast-notification/toast-notification.service';
export * from './services/event-manager/event-manager.service';

export * from './services/test/test.service';
export * from './core.module';
