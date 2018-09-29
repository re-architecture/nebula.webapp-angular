import { NgModule } from '@angular/core';

import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { NebulaCoreModule } from 'src/app/nebula-core';
import { MaterialModule } from './material.module';


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
