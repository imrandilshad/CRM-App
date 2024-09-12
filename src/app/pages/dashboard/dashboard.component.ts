import { Component, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from '@shared/models/customer.model';
import { Lead } from '@shared/models/lead.model';
import { LeadsService } from '@shared/services/leads.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  leads: Lead[] = [];
  customers: Customer[] = [];

  constructor(private leadsService: LeadsService) {
    effect(() => {
      this.leads = this.leadsService.leads();
      this.customers = this.leadsService.customers();
    });
  }
}
