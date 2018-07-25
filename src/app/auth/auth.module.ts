import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ForgotPageComponent } from './pages/forgot-page/forgot-page.component';
import { LockScreenPageComponent } from './pages/lock-screen-page/lock-screen-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginService } from './services/login.service';
import { Principal } from './services/principal.service';
import { AccountService } from './services/account.service';
import { AuthServerProvider } from './services/auth-jwt.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './services/test.service';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthLayoutComponent, 
    SigninPageComponent, 
    SignupPageComponent, 
    ForgotPageComponent, 
    LockScreenPageComponent, 
    HeaderComponent, 
    FooterComponent, 
    SidenavComponent
  ],
  providers:[
    LoginService,
    Principal,
    AccountService,
    AuthServerProvider,
    TestService
    //LocalStorageService,
    //SessionStorageService
  ]
})
export class AuthModule { }
