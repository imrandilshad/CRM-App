import { LoginService } from "./../../shared/services/login.service";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { catchError, throwError } from "rxjs";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  loginform: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginform = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }
  login() {
    if (this.loginform.invalid) {
      alert("Please enter valid email and password.");
      return;
    }
    const { email, password } = this.loginform.value;

    this.loginService
      .loginUser(email, password)
      .pipe(
        catchError((error: any) => {
          console.error("An error occurred:", error);
          return throwError(() => new Error(error));
        }),
      )
      .subscribe((result) => {
        if (result.result === true) {
          let data = JSON.stringify(result.data);
          localStorage.setItem("userInfo", data);
          const parseData = JSON.parse(data);
          if (parseData.token) {
            this.router.navigate(["/dashboard"]);
          }
        } else {
          alert("email or password incorrect");
        }
      });
  }
}
