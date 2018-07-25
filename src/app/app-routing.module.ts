import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        //true value debugging purposes only
        enableTracing: false,
        //为所有惰性加载模块启用预加载功能
        preloadingStrategy: PreloadAllModules
      }

    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }