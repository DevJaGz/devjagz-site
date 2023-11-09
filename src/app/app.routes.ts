import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => MainPageComponent,
    children: [
      {
        path: 'who-am-i',
        loadComponent: () => import('./pages/who-am-i-page.component').then(c => c.WhoAmIPageComponent)
      }
    ]
  }
];
