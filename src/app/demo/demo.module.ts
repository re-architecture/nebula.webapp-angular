import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ComponentPageComponent } from './pages/component-page/component-page.component';
import { DemoRoutingModule } from './demo-routing.module';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { NebulaCoreModule } from '../nebula-core';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    NebulaCoreModule
   ],
  declarations: [
    ProgressBarComponent, 
    ComponentPageComponent, ProgressSpinnerComponent
  ]
})
export class DemoModule { }
