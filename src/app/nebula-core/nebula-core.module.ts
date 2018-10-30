import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//https://github.com/FortAwesome/angular-fontawesome
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DialogComponent } from './components/message/dialog.component';
import { NotificationComponent } from './components/message/notification.component';
import { ToastComponent } from './components/message/toast.component';
import { AlertComponent } from './components/message/alert.component';
import { PageLoadingProgressBarComponent } from './components/page-loading-progress-bar/page-loading-progress-bar.component';

import { FocusDirective } from './directives/focus.directive';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MaterialModule } from './vendor/material.module';

@NgModule({
  imports: [
    CommonModule,
    //FontAwesomeModule,
    MaterialModule,
  ],
  declarations: [
    DialogComponent,
    NotificationComponent,
    ToastComponent,
    AlertComponent,
    PageLoadingProgressBarComponent,
    FocusDirective,
    ProgressBarComponent
    
  ],
  exports: [
    AlertComponent,
    PageLoadingProgressBarComponent,
    FocusDirective,
    ProgressBarComponent,
  ],
  entryComponents: [
    DialogComponent,
    NotificationComponent,
    ToastComponent
  ]
})
export class NebulaCoreModule { }
