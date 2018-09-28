import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//https://github.com/FortAwesome/angular-fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// Add an icon to the library for convenient access in other components
//library.add(faCoffee);

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { DialogComponent } from './components/message/dialog.component';
import { NotificationComponent } from './components/message/notification.component';
import { ToastComponent } from './components/message/toast.component';
import { AlertComponent } from './components/message/alert.component';
import { PageLoadingProgressBarComponent } from './components/page-loading-progress-bar/page-loading-progress-bar.component';
import { MaterialModule } from '../material/material.module';
import { FocusDirective } from './directives/focus.directive';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

//Using the Icon Library
library.add(fas, far);

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
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
