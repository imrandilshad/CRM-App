import { NgFor } from '@angular/common';
import { Component, effect } from '@angular/core';
import { Lead } from '@shared/models/lead.model';
import { LeadsService } from '@shared/services/leads.service';

@Component({
  selector: 'app-lead-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lead-list.component.html',
  styleUrl: './lead-list.component.scss'
})
export class LeadListComponent {
  leads: Lead[] = [];

  constructor(private leadsService: LeadsService) {

    effect(() => {
      this.leads = this.leadsService.leads().filter(lead => lead.userId === this.leadsService.getloginUserData().userId);
    });
  }

  confirmLead(leadId: number) {
    this.leadsService.confirmLead(leadId);
  }
}
