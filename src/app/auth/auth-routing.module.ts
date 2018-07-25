import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ForgotPageComponent } from './pages/forgot-page/forgot-page.component';
import { LockScreenPageComponent } from './pages/lock-screen-page/lock-screen-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      {
      path: 'signin',
      component: SigninPageComponent
    }, {
      path: 'signup',
      component: SignupPageComponent
    }, {
      path: 'forgot',
      component: ForgotPageComponent
    }, {
      path: 'lockscreen',
      component: LockScreenPageComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
