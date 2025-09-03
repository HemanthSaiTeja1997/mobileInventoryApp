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
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
    {
    path: 'good-recipt',
    loadComponent: () => import('./pages/good-recipt/good-recipt.page').then( m => m.GoodReciptPage)
  },
    {
    path: 'order',
    loadComponent: () => import('./pages/order/order.page').then( m => m.OrderPage)
  },
    {
    path: 'purchaseorder',
    loadComponent: () => import('./pages/purchaseorder/purchaseorder.page').then( m => m.PurchaseorderPage)
  },
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },





];
