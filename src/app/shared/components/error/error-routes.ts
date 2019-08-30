import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoutes: Routes = [
    {
        path: 'accessdenied', 
        component: ErrorComponent, 
        data: {
          title: 'Access Denied',
          errorMessage: 'Access Denied!'
        }
      },
      {
        path: 'error', component: ErrorComponent, data: {
          title: 'error',
          errorMessage: 'error!'
        }
      },
      {
        path: '**', component: ErrorComponent, data: {
          title: 'Application ServerError',
          errorMessage: 'Application ServerError - Connection to server is offline!'
        }
      }
];



