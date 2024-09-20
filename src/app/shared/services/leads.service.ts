import { effect, Injectable, signal } from '@angular/core';
import { Customer } from '@shared/models/customer.model';
import { Lead } from '@shared/models/lead.model';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  private leadIdCounter = 1;
  leads = signal<Lead[]>(this.getLeadsFromLocalStorage());
  customers = signal<Customer[]>(this.getCustomersFromLocalStorage());




  constructor() {
    this.leadIdCounter = this.leads().length + 1;

  }

  public getloginUserData()
  {
    const userData = localStorage.getItem("userInfo");
    const data = userData ? JSON.parse(userData) : null;
    return data;
  }


  public getLeadsOfLoginUser():Lead[]{
return this.getLeadsFromLocalStorage().filter(lead => lead.userId === this.getloginUserData().userId);
  }

  public getCustomersOfLoginUser():Customer[]{
    return this.getCustomersFromLocalStorage().filter(customer => customer.userId === this.getloginUserData().userId)
  }

  private getLeadsFromLocalStorage(): Lead[] {

    const leads = localStorage.getItem('leads');
    return leads ? JSON.parse(leads) : [];

  }

  private getCustomersFromLocalStorage(): Customer[] {
    const customers = localStorage.getItem('customers');
    return customers ? JSON.parse(customers) : [];

  }

  private saveLeadsToLocalStorage(leads: Lead[]): void {
    localStorage.setItem('leads', JSON.stringify(leads));
  }

  private saveCustomersToLocalStorage(customers: Customer[]): void {
    localStorage.setItem('customers', JSON.stringify(customers));
  }

  addLead(name: string, email: string, phone: string) {

    const newLead: Lead = {
      id: this.leadIdCounter++,
      userId: this.getloginUserData().userId,
      name,
      email,
      phone,
      status: 'New'
    };
    const updatedLeads = [...this.leads(), newLead];
    this.leads.set(updatedLeads);
    this.saveLeadsToLocalStorage(updatedLeads);
  }

  confirmLead(leadId: number) {
    const lead = this.leads().find(l => l.id === leadId);
    if (lead) {
      const updatedLeads = this.leads().filter(l => l.id !== leadId);
      this.leads.set(updatedLeads);
      this.saveLeadsToLocalStorage(updatedLeads);

      const newCustomer: Customer = {
        id: lead.id,
        userId: this.getloginUserData().userId,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
      };
      const updatedCustomers = [...this.customers(), newCustomer];
      this.customers.set(updatedCustomers);
      this.saveCustomersToLocalStorage(updatedCustomers);
    }
  }
}
