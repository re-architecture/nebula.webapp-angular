import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ComponentPageComponent } from './pages/component-page/component-page.component';
import { DemoRoutingModule } from './demo-routing.module';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { NebulaCoreModule } from '../nebula-core';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MaterialModule } from 'src/app/shared';
import { AuthComponent } from './components/auth/auth.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ThemePageComponent } from './pages/theme-page/theme-page.component';
import { TypographyComponent } from './components/typography/typography.component';
import { StylePageComponent } from './pages/style-page/style-page.component';
import { SpacingComponent } from './components/spacing/spacing.component';
import { ColorComponent } from './components/color/color.component';
import { IconComponent } from './components/icon/icon.component';
import { IconPageComponent } from './pages/icon-page/icon-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    NebulaCoreModule,
    MaterialModule,
    FontAwesomeModule
   ],
  declarations: [
    ProgressBarComponent, 
    ComponentPageComponent, 
    ProgressSpinnerComponent, 
    AuthPageComponent, 
    AuthComponent, 
    ThemeComponent, 
    ThemePageComponent, 
    TypographyComponent, 
    StylePageComponent, SpacingComponent, ColorComponent, IconComponent, IconPageComponent
  ]
})
export class DemoModule { }
