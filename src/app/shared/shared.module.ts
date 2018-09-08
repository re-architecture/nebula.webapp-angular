import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [LoginModalComponent, ErrorComponent],
  exports:[
    
  ],
  entryComponents:[LoginModalComponent]
})
export class SharedModule { }
