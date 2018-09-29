import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentPageComponent } from './pages/component-page/component-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { ThemePageComponent } from './pages/theme-page/theme-page.component';


const routes: Routes = [

  { path: '', redirectTo: 'component', pathMatch: 'full' },
  {
    path: 'component',
    component: ComponentPageComponent
  },
  {
    path: 'auth',
    component: AuthPageComponent
  },
  {
    path: 'theme',
    component: ThemePageComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
