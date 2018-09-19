import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { NebulaCoreModule } from 'src/app/nebula-core';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    NebulaCoreModule
  ],
  declarations: [LoginModalComponent, 
    ErrorComponent
  ],
  exports:[
    
  ],
  entryComponents:[LoginModalComponent]
})
export class SharedModule { }
