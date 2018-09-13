import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { Config } from './services/config/config';
import { HttpClientModule } from '@angular/common/http';
import { ToastNotifierComponent } from './services/toast-notification/toast-notifier.component';
import { DialogComponent } from './services/toast-notification/dialog.component';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [ToastNotifierComponent,DialogComponent],
  exports: [],
  providers: [],
  entryComponents:[ToastNotifierComponent,DialogComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: Config, useValue: config }
      ]
    };
  }
}
