import { Routes } from '@angular/router';
import { CustomersComponent } from '@pages/customers/customers.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { LeadsComponent } from '@pages/leads/leads.component';
import { LoginComponent } from '@pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'leads',
    component: LeadsComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  }

];
