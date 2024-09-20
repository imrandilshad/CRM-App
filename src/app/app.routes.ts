import { Routes } from "@angular/router";
import { CustomersComponent } from "@pages/customers/customers.component";
import { DashboardComponent } from "@pages/dashboard/dashboard.component";
import { LeadsComponent } from "@pages/leads/leads.component";
import { LoginComponent } from "@pages/login/login.component";
import { RegistrationComponent } from "@pages/registration/registration.component";
import { AuthGuard } from "@guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "registration",
    component: RegistrationComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "leads",
    component: LeadsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "customers",
    component: CustomersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "login",
  },
];
