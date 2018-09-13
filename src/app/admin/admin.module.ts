import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { GroupListComponent } from './components/group/group-list.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    GroupPageComponent,
    GroupListComponent
    
  ]
})
export class AdminModule { }
