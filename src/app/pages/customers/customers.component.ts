import { Component, effect } from "@angular/core";
import { NgFor } from "@angular/common";
import { Customer } from "@shared/models/customer.model";
import { LeadsService } from "@shared/services/leads.service";

@Component({
  selector: "app-customers",
  standalone: true,
  imports: [NgFor],
  templateUrl: "./customers.component.html",
  styleUrl: "./customers.component.scss",
})
export class CustomersComponent {
  customers: Customer[] = [];

  constructor(private leadsService: LeadsService) {
    effect(() => {
      this.customers = this.leadsService.CustomersOfLoginUser();
    });
  }
}
