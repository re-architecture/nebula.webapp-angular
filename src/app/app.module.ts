import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import { CoreModule } from './core';
//import { appConfig } from './config/app.config';
import { SharedModule } from './shared';
import { NebulaCoreModule, httpInterceptorProviders } from 'src/app/nebula-core';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders] 
  
})
export class AppModule { }
