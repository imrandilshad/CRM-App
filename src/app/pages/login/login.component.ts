import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './../../shared/services/login.service';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { catchError, throwError } from 'rxjs';
import { NavbarService } from '@app/shared/services/navabar.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent {
  loginform: FormGroup;

constructor(private LoginService:LoginService, private router:Router,private navbarService: NavbarService) {
  this.loginform= new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [
      Validators.required,



    ]),
  });
}
login() {

  const{email, password}= this.loginform.value;

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

       let data =  JSON.stringify(result.data) ;
     localStorage.setItem("userInfo",data);
     this.navbarService.triggerNavbarReload();
     this.router.navigate(["dashboard"])


    }
    else{
      alert("email or password incorrect");
    }
   }
   )
  }

}


