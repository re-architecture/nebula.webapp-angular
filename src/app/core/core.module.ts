import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { Config } from './services/config/Config';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  exports: [],
  providers: []
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
