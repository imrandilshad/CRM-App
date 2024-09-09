import { Component } from '@angular/core';
import { LeadListComponent } from "./lead-list/lead-list.component";
import { LeadCreateComponent } from "./lead-create/lead-create.component";

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
