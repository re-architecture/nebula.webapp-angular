import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { MainRoutingModule } from './main-routing.module';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { MaterialModule, FontAwesomeModule } from 'src/app/shared';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  declarations: [
    HeaderComponent, 
    DefaultPageComponent,
    DefaultLayoutComponent,
    TopMenuComponent
  ]
})
export class MainModule { }
