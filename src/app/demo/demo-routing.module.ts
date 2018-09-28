import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentPageComponent } from './pages/component-page/component-page.component';


const routes: Routes = [

  { path: '', redirectTo: 'component', pathMatch: 'full' },
  {
    path: 'component',
    component: ComponentPageComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
