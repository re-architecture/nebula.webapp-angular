import { Component, OnInit } from '@angular/core';
import {  EventManagerService, TestService } from 'src/app/nebula-core';
import { Subscription } from 'rxjs';
import { JsonConfigService } from 'src/app/core';




@Component({
  selector: 'app-home-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  httpErrorListener: Subscription;

  constructor(
    //private toastNotificationService: ToastNotificationService,
    private eventManager: EventManagerService,
    private testService : TestService,
    private jsonConfig : JsonConfigService
  ) {


    this.httpErrorListener = eventManager.subscribe('Application.httpError', response => {
      let i;
      const httpErrorResponse = response.content;
      switch (httpErrorResponse.status) {
        // connection refused, server not reachable
        case 0:
          //this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
         // this.toastNotificationService.error("Server not reachable");
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
            //const entityName = translateService.instant('global.menu.entities.' + entityKey);
            //this.addErrorAlert(errorHeader, errorHeader, { entityName });
            //this.toastNotificationService.error("xxxxxxxxxxx");

          } else if (httpErrorResponse.error !== '' && httpErrorResponse.error.fieldErrors) {
            const fieldErrors = httpErrorResponse.error.fieldErrors;
            for (i = 0; i < fieldErrors.length; i++) {
              const fieldError = fieldErrors[i];
              if (['Min', 'Max', 'DecimalMin', 'DecimalMax'].includes(fieldError.message)) {
                fieldError.message = 'Size';
              }
              // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
              const convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
              //const fieldName = translateService.instant(
               // 'jhipsterSampleApplicationApp.' + fieldError.objectName + '.' + convertedField
              //);
              //this.addErrorAlert('Error on field "' + fieldName + '"', 'error.' + fieldError.message, { fieldName });
             // this.toastNotificationService.error("yyyyyyyyyy");
            }
          } else if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
           /*  this.addErrorAlert(
              httpErrorResponse.error.message,
              httpErrorResponse.error.message,
              httpErrorResponse.error.params
            ); */
            //this.toastNotificationService.error("zzzzzzzzzzz");
          } else {
            //this.addErrorAlert(httpErrorResponse.error);
           // this.toastNotificationService.error(httpErrorResponse.error);
          }
          break;

        case 404:
         //this.addErrorAlert('Not found', 'error.url.not.found');
         //this.toastNotificationService.error('Not found');
          break;

        default:
          if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
            //this.addErrorAlert(httpErrorResponse.error.message);
            //this.toastNotificationService.error(httpErrorResponse.error.message);
          } else {
            //this.addErrorAlert(httpErrorResponse.error);
            //this.toastNotificationService.error(httpErrorResponse.error);
          }
      }
    });
  }

  ngOnInit() {
  /*   this.jsonConfig.getConfig()
    .subscribe(
      (data: Config) => this.config = { ...data }, // success path
      error => this.error = error // error path
    ); */

    //this.jsonConfig.makeIntentionalError().subscribe();
  }

  ngOnDestroy() {
    
    if (this.httpErrorListener !== undefined && this.httpErrorListener !== null) {
        this.eventManager.destroy(this.httpErrorListener);
      
    }
}

  //config : Config;
  error: any;

  xxx() {
   //this.toastNotificationService.error("xxxxxxxxxxx1111111111");
  
    //this.testService.doTest()
    //      .subscribe(
            //heroes => this.heroes = heroes
    //        ); 
 
    //this.toastNotificationService.openDialog("chunk {home-home-module} home-home-module.js, home-home-module.js.map (home-home-module) 54.2 kB  [rendered]","网络错误",MessageType.Success);
  
  
  
   // this.toastNotificationService.info(this.config.appName);
  }


}
