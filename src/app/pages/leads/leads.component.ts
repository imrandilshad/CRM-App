import { Component } from '@angular/core';
import { LeadCreateComponent } from '@pages/leads/lead-create/lead-create.component';
import { LeadListComponent } from '@pages/leads/lead-list/lead-list.component';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [LeadListComponent, LeadCreateComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export class LeadsComponent {
  isLead: boolean = true;

  addLead() {
    this.isLead = false;
  }

  viewLeads() {
    this.isLead = true;
  }
}
