import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupPageComponent } from './pages/group-page/group-page.component';

const routes: Routes = [

  { path: '', redirectTo: 'group', pathMatch: 'full' },
  {
    path: 'group',
    component: GroupPageComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
