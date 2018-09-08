import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

import { MaterialModule } from 'src/app/material/material.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ForgotPageComponent } from './pages/forgot-page/forgot-page.component';
import { LockScreenPageComponent } from './pages/lock-screen-page/lock-screen-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './services/test.service';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
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
    SidenavComponent, SigninComponent
  ],
  providers:[
    AuthService,
    TestService
  ]
})
export class AuthModule { }
