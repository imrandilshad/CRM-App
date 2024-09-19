import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './../../shared/services/login.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent {
  loginform: FormGroup;

constructor(private LoginService:LoginService, private router:Router ) {
  this.loginform= new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [
      Validators.required,



    ]),
  });
}
login() {

  const{email, password}= this.loginform.value;
alert(email)
  this.LoginService.loginUser(email,password)
  .pipe(
    catchError((error: any) => {
      console.error('An error occurred:', error);
      return throwError(() => new Error(error));
    })
  )
  .subscribe(
   (result)=> {

  if(result.result===true)
    {
      // let userData = localStorage.getItem("userInfo");
       let data =  JSON.stringify(result.data) ;
     localStorage.setItem("userInfo",data);
 console.log(data)
     this.router.navigate(["dashboard"])
      // console.log(result);
    }
    else{
      alert("email or password incorrect");
    }
   }
   )
  }

}


