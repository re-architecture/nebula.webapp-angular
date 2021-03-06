import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { MainRoutingModule } from './main-routing.module';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { MaterialModule } from 'src/app/shared';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent, 
    DefaultPageComponent,
    DefaultLayoutComponent,
    TopMenuComponent,
    SettingsMenuComponent,
    ItemComponent
  ]
})
export class MainModule { }
