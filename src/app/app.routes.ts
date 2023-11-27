import { Routes } from '@angular/router';
import { MainPageComponent } from '@pages';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => MainPageComponent,
    children: [
      {
        path: 'who-am-i',
        loadComponent: () => import('@features').then(c => c.WhoAmIComponent)
      }
    ]
  }
];
