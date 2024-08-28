import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeadsService } from '../../../shared/services/leads.service';
import { AlphabetsOnlyDirective } from '../../../shared/directives/alphabets-only.directive';

@Component({
  selector: 'app-lead-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AlphabetsOnlyDirective],
  templateUrl: './lead-create.component.html',
  styleUrl: './lead-create.component.scss'
})
export class LeadCreateComponent {
  leadForm: FormGroup;

  constructor(private leadsService: LeadsService) {
    this.leadForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(15)
      ])
    });
  }

  addLead() {
    if (this.leadForm.valid) {
      const { name, email, phone } = this.leadForm.value;
      this.leadsService.addLead(name, email, phone);
      this.leadForm.reset();
    }
  }
}
