import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { MainRoutingModule } from './main-routing.module';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { MaterialModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent, 
    DefaultPageComponent,
    DefaultLayoutComponent
  ]
})
export class MainModule { }
