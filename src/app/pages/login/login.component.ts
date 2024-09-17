import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './../../shared/services/login.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ErrorInterceptor } from '@app/shared/services/error-interceptor.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class LoginComponent {
  loginform: FormGroup;

constructor(private LoginService:LoginService, private router:Router ) {
  this.loginform= new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [
      Validators.required,



    ]),
  });
}
login() {
  const res={};
  const{username, password}= this.loginform.value;

  this.LoginService.loginUser(username,password)
  .pipe(
    catchError((error: any) => {
      console.error('An error occurred:', error);
      return throwError(() => new Error(error));
    })
  )
  .subscribe(
   (result)=> {

  if(result.status==200)
    {
     localStorage.setItem("username",username);
     this.router.navigate(["dashboard"])


    }
   }
   )
  }

}


