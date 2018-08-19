import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ScrapPageComponent } from './pages/scrap-page/scrap-page.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'scrap',
    component: ScrapPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MTKRoutingModule { }
