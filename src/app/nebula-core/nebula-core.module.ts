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

//Using the Icon Library
library.add(fas, far);


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    DialogComponent,
    NotificationComponent,
    ToastComponent,
    AlertComponent
    
  ],
  exports: [
    AlertComponent
  ],
  entryComponents: [
    DialogComponent,
    NotificationComponent,
    ToastComponent
  ]
})
export class NebulaCoreModule { }
