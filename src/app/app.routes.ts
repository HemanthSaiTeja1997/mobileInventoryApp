import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
    {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },

  {
    path: 'organization/:id',
    loadComponent: () => import('./pages/organization/organization.page').then( m => m.OrganizationPage)
  },
    {
    path: 'activity',
    loadComponent: () => import('./pages/activity/activity.page').then( m => m.ActivityPage)
  },
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

];
