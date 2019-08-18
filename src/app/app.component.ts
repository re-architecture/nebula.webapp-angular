import { Component, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

import { Subscription } from 'rxjs';

import { Title, DomSanitizer } from '@angular/platform-browser';

import { ThemeService, Principal, Account, EventManagerService, MessageService, Message, ConfigService, Config, AppReadyEventService } from 'src/app/nebula-core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { NgProgressComponent } from './nebula-core/components/ng-progress/ng-progress.component';
import { MatIconRegistry } from '@angular/material';


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
  appConfig: Config

  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;

  constructor(
    private titleService: Title,
    private themeService: ThemeService,
    private overlay: OverlayContainer,
    private configService: ConfigService,
    private principal: Principal,
    private eventManager: EventManagerService,
    private msg: MessageService,
    private router: Router,
    private appReadyEvent: AppReadyEventService,
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {

    this.iconRegistry
      .addSvgIconSetInNamespace('core',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icon/icon-svg-sprite.svg'))
  }

  ngOnInit() {

   
    /*   var a : HTMLCollectionOf<Element>;
      a = document.getElementsByClassName('loading-container');
      
      
  
      console.log(a); */
      //console.log('ngOninit');
     
      
    this.initTheme();
    this.initAppTitle();
    this.initAppLoading();
    this.initHttpError();
    //for MTK 注释掉
    //this.initPrincipal();
    
  }
 
  
  @HostListener('window:load', ['$event'])
  onWindowDomLoad(event: Event) {
    //console.log('onWindowDomLoad');
    this.appReadyEvent.trigger();
  }

  ngAfterViewInit(){
    //this.appReadyEvent.trigger();
    //console.log('ngAfterViewInit');
    //this.appReadyEvent.trigger();
    //this.initAppLoading();
    
  }
    
  initAppLoading() {

       // FOR THE SAKE OF THE DEMO, let's add a small delay here so that the app can be
    // in a "loading" state for a "visible" amount of time.
   /*  setTimeout(
      () => {

        this.appReadyEvent.trigger();

      },
      1000
    ); */
    //页面加载进度条显示
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          //console.log('init App Loading - NavigationStart');
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          //console.log('init App Loading - NavigationEnd');
          //this.appReadyEvent.trigger();
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  initAppTitle() {

    this.configService.initConfig('assets/app.config.json').subscribe(
      (data: Config) => {
        this.appConfig = { ...data }
        //console.log('init app title');
        this.titleService.setTitle(this.appConfig.appName);

      }
    );

  }

  initTheme() {
    this.themeSubscription = this.themeService.theme$.subscribe(
      theme => {
        //console.log('init theme');
        this.installTheme(theme);
      });

    const currentTheme = this.themeService.getCurrentTheme();

    if (currentTheme) {
      this.themeService.setTheme(currentTheme);
    }
    else {
      this.themeService.setTheme("default-theme");
    }

  }

  initPrincipal() {

    this.principal.identity().then(account => {
      //console.log('init principal');
      this.account = account;
    });

    this.registerAuthenticationSuccess();
  }


  initHttpError() {
    this.httpErrorListener = this.eventManager.subscribe('Application.HttpError', response => {

      //console.log('init Http Error');
      //let i;
      const error = response.content;
      //switch (httpErrorResponse.status) {
      // case '504'
      this.msg.toast(new Message(`Application.HttpError - ${error.status} ${error.statusText}`, error, 'Error'));
      //console.log('55555555555555555555555555');
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

  registerAuthenticationSuccess() {
    this.eventManager.subscribe('authenticationSuccess', message => {
      //console.log('subscribe authentication Success event');
      this.principal.identity().then(account => {
       // console.log('Authentication Success');
        this.account = account;
      });
    });
  }

  //ref: https://material.angular.io/guide/theming
  installTheme(theme: string) {

    document.body.className = "";
    this.overlay.getContainerElement().className = "";

    //document.body.classList.add(theme, "mat-app-background", "mat-typography");
    //这里使用自定义的 typography
    document.body.classList.add(theme, "mat-app-background",'ne-typography');
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
