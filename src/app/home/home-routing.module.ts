import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { errorRoutes } from 'src/app/shared';




const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      //{ path: '', redirectTo: 'default', pathMatch: 'full' },
      { path: '', redirectTo: 'mtk', pathMatch: 'full' },
      {
        path: 'default',
        component: DefaultPageComponent,
        data: {
          authorities: ['ROLE_ADMIN']
        },
       //canActivate: [UserRouteAccessService]
        
      },
      {
        path: 'admin',
        loadChildren: '../admin/admin.module#AdminModule',
       
      },
      {
        path: 'mtk',
        loadChildren: '../mtk/mtk.module#MTKModule',
       
      },
      {
        path:'demo',
        loadChildren: '../demo/demo.module#DemoModule',
      },
      ...errorRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
