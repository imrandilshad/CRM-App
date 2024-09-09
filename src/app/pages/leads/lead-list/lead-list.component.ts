import { Component, effect } from '@angular/core';
import { LeadsService } from '../../../shared/services/leads.service';
import { NgFor } from '@angular/common';
import { Lead } from '../../../shared/models/lead.model';

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
      this.leads = this.leadsService.leads();
    });
  }

  confirmLead(leadId: number) {
    this.leadsService.confirmLead(leadId);
  }
}
