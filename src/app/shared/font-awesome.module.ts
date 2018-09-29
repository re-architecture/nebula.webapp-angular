import { NgModule } from '@angular/core';

//https://github.com/FortAwesome/angular-fontawesome
import { FontAwesomeModule as FontAwesome } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// Add an icon to the library for convenient access in other components
//library.add(faCoffee);

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

//Using the Icon Library
library.add(fas, far);

@NgModule({
  exports: [
    FontAwesome
  ]
})
export class FontAwesomeModule { }
