import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { CommonModule } from '@angular/common';
import { NebulaCoreModule } from 'src/app/nebula-core';
import { MessageComponent } from './components/demo/message/message.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    NebulaCoreModule
  ],
  declarations: [
    HomeLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    DefaultPageComponent,
    MessageComponent
  ]

})
export class HomeModule { }
