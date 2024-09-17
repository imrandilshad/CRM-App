

import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration.model';
import { login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {
  loginData:login={
    username: '',
    password: ''
  }



  constructor(private http: HttpClient) { }


  loginUser(username:string,password:string ): Observable<any> {
    return this.http.get(`https://petstore.swagger.io/v2/user/login??username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,{ observe: 'response' });
  }
}
