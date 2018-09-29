import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import { CoreModule } from './core';
//import { appConfig } from './config/app.config';
import { SharedModule, MaterialModule } from './shared';
import { NebulaCoreModule, httpInterceptorProviders } from 'src/app/nebula-core';

import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from './nebula-core/components/ng-progress/ng-progress.module';
import { NgProgressHttpModule } from './nebula-core/components/ng-progress/http/ng-progress-http.module';
import { NgProgressRouterModule } from './nebula-core/components/ng-progress/router/ng-progress-router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //CoreModule,
    //CoreModule.forRoot(appConfig),
    AppRoutingModule,
    SharedModule,
    NebulaCoreModule,
    MaterialModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule.forRoot(),
    NgProgressRouterModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders] 
  
})
export class AppModule { }
