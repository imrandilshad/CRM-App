import { Routes } from '@angular/router';
import { CustomersComponent } from '@pages/customers/customers.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { LeadsComponent } from '@pages/leads/leads.component';
import { LoginComponent } from '@pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'registration',
    component: RegistrationComponent,

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
