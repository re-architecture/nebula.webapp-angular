import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { ErrorComponent } from 'src/app/shared';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      //{ path: '', redirectTo: 'default', pathMatch: 'full' },
      { path: '', redirectTo: 'mtk', pathMatch: 'full' },
      {
        path: 'default',
        component: DefaultPageComponent
      },
      {
        path: 'mtk',
        loadChildren: '../mtk/mtk.module#MTKModule',
      },
      {
        path: 'accessdenied', component: ErrorComponent, data: {
          title: 'xxxxxx page!',
          errorMessage: 'accessdenied'
        }
      },
      {
        path: 'error', component: ErrorComponent, data: {
          title: 'xxxxxx page!',
          errorMessage: 'error'
        }
      },
      {
        path: '**', component: ErrorComponent, data: {
          title: 'xxxxxx page!',
          errorMessage: 'xxxxxxxx Page Not Found'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
