import { Component, OnDestroy, OnInit } from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

import { Subscription } from 'rxjs';

import { Title } from '@angular/platform-browser';

import { ThemeService, Principal, Account, EventManagerService, MessageService, Message } from 'src/app/nebula-core';
import { ConfigService } from 'src/app/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OverlayContainer]
})
export class AppComponent implements OnInit, OnDestroy {

  themeSubscription: Subscription;

  account: Account;

  loading = false;

  httpErrorListener: Subscription;

  constructor(
    private titleService: Title,
    private themeService: ThemeService,
    private overlay: OverlayContainer,
    private configService: ConfigService,
    private principal: Principal,
    private eventManager: EventManagerService,
    private msg: MessageService
  ) {

    this.httpErrorListener = eventManager.subscribe('Application.ServerError', response => {

      //let i;
      const error = response.content;
      //switch (httpErrorResponse.status) {
      // case '504'
      this.msg.toast(new Message(`Application.ServerError - ${error.status} ${error.statusText}` , error, 'Error'));

      // connection refused, server not reachable
      /*  case 0:
           this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
           break;

       case 400:
           const arr = httpErrorResponse.headers.keys();
           let errorHeader = null;
           let entityKey = null;
           arr.forEach(entry => {
               if (entry.endsWith('app-error')) {
                   errorHeader = httpErrorResponse.headers.get(entry);
               } else if (entry.endsWith('app-params')) {
                   entityKey = httpErrorResponse.headers.get(entry);
               }
           });
           if (errorHeader) {
               const entityName = translateService.instant('global.menu.entities.' + entityKey);
               this.addErrorAlert(errorHeader, errorHeader, { entityName });
           } else if (httpErrorResponse.error !== '' && httpErrorResponse.error.fieldErrors) {
               const fieldErrors = httpErrorResponse.error.fieldErrors;
               for (i = 0; i < fieldErrors.length; i++) {
                   const fieldError = fieldErrors[i];
                   if (['Min', 'Max', 'DecimalMin', 'DecimalMax'].includes(fieldError.message)) {
                       fieldError.message = 'Size';
                   }
                   // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                   const convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                   const fieldName = translateService.instant(
                       'jhipsterSampleApplicationApp.' + fieldError.objectName + '.' + convertedField
                   );
                   this.addErrorAlert('Error on field "' + fieldName + '"', 'error.' + fieldError.message, { fieldName });
               }
           } else if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
               this.addErrorAlert(
                   httpErrorResponse.error.message,
                   httpErrorResponse.error.message,
                   httpErrorResponse.error.params
               );
           } else {
               this.addErrorAlert(httpErrorResponse.error);
           }
           break;

       case 404:
           this.addErrorAlert('Not found', 'error.url.not.found');
           break;

       default:

           if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
               this.addErrorAlert(httpErrorResponse.error.message);
           } else {
               this.addErrorAlert(httpErrorResponse.error);
           } */

    })
    //});
      
  }



  ngOnInit() {

    this.titleService.setTitle(this.configService.appConfig.appName);

    this.themeSubscription = this.themeService.theme$.subscribe(
      theme => {
        this.installTheme(theme);
      });

    const currentTheme = this.themeService.getCurrentTheme();

    if (currentTheme) {
      this.themeService.setTheme(currentTheme);
    }
    else {
      this.themeService.setTheme("default-theme");
    }

    this.principal.identity().then(account => {
      this.account = account;
    });

    this.registerAuthenticationSuccess();

  }

  registerAuthenticationSuccess() {
    this.eventManager.subscribe('authenticationSuccess', message => {
      this.principal.identity().then(account => {
        this.account = account;
      });
    });
  }

  //ref: https://material.angular.io/guide/theming
  installTheme(theme: string) {

    document.body.className = "";
    this.overlay.getContainerElement().className = "";

    document.body.classList.add(theme, "mat-app-background", "mat-typography");
    this.overlay.getContainerElement().classList.add(theme);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.themeSubscription.unsubscribe();

    if (this.httpErrorListener !== undefined && this.httpErrorListener !== null) {
      this.eventManager.destroy(this.httpErrorListener);
      //this.alerts = [];
    }
  }

}
