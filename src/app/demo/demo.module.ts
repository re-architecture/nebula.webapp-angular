import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ComponentPageComponent } from './pages/component-page/component-page.component';
import { DemoRoutingModule } from './demo-routing.module';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { NebulaCoreModule } from '../nebula-core';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { FontAwesomeModule, MaterialModule } from 'src/app/shared';
import { AuthComponent } from './components/auth/auth.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ThemePageComponent } from './pages/theme-page/theme-page.component';


@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    NebulaCoreModule,
    FontAwesomeModule,
    MaterialModule
   ],
  declarations: [
    ProgressBarComponent, 
    ComponentPageComponent, ProgressSpinnerComponent, AuthPageComponent, AuthComponent, ThemeComponent, ThemePageComponent
  ]
})
export class DemoModule { }
