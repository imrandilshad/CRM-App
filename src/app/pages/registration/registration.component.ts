import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  Registrationform: FormGroup;
consfirmPassword: any;
Password: any;

  constructor() {
    this.Registrationform = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required

      ]),
      confirmpassword: new FormControl("", [
        Validators.required

      ]),
    });
  }

register() {
if(this.Registrationform.valid)
{
  const {name,email,password}= this.Registrationform.value;
  alert(name);
}
}

}
