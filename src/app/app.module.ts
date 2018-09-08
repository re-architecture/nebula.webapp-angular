import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule, httpInterceptorProviders } from './core';
import { appConfig } from './config/app.config';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //CoreModule,
    CoreModule.forRoot(appConfig),
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders] 
  
})
export class AppModule { }
