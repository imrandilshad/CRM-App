
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Registration } from './../../shared/models/registration.model';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistrationService } from '@app/shared/services/registration.service';
import { catchError, throwError } from 'rxjs';
import { ErrorInterceptor } from '@app/shared/services/error-interceptor.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class RegistrationComponent {

  Registrationform: FormGroup;
consfirmPassword: any;
Password: any;

  constructor(public RegistrationService: RegistrationService) {
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
  this.RegistrationService.registerUser(name,email,password)
  .pipe(
    catchError((error: any) => {
      console.error('An error occurred:', error);
      return throwError(() => new Error(error));
    })
  )
  .subscribe(
   (result)=>console.log(result),
  );

}
}

}


