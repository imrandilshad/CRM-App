import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registrationData:Registration={
    username: '',
    email: '',
    password: ''
  }

  data = {
    username: 'cbz123',
    email: 'cbz@gmail.com',
    password: '12345'
  };

  constructor(private http: HttpClient) { }

  // Register user method
  registerUser(username:string,email:string,password:string ): Observable<any> {
    this.registrationData.username=username;
    this.registrationData.email=email;
    this.registrationData.password=password;
    return this.http.post('https://petstore.swagger.io/v2/user', this.registrationData);
  }
}
