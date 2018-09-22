import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { GroupListComponent } from './components/group/group-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { GroupService } from './services/group.service';
import { NebulaCoreModule } from 'src/app/nebula-core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupUpdateComponent } from './components/group/group-update.component';
import { GroupResolver } from './services/group-resolver.service';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    NebulaCoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GroupPageComponent,
    GroupListComponent,
    GroupUpdateComponent
 ],
 entryComponents:[GroupUpdateComponent],
 providers:[
   GroupService,
   GroupResolver
]

})
export class AdminModule { }
