import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { login } from "../models/login.model";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  loginData: login = {
    EmailId: "",
    Password: "",
  };

  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string): Observable<any> {
    this.loginData.EmailId = email;
    this.loginData.Password = password;
    return this.http.post(
      "https://freeapi.miniprojectideas.com/api/JWT/login",
      this.loginData,
    );
  }
}
