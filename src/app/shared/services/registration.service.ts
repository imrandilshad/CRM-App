import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration, User } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  // registrationData:Registration={
  //   username: '',
  //   email: '',
  //   password: ''
  // }
    registrationData:User={
      userId: 0,
      firstName: "",
      middleName: "D",
      lastName: "xyz",
      mobileNo: "1234567890",
      emailId: "",
      altMobileNo: "0987654321",
      password: "",
      userAddress: {
        city: "",
        state: "",
        pincode: "000000",
        addressLine: ""
      },
      userSocialDetails: {
        facebookProfileUrl: "",
        linkdinProfileUrl: "",
        instagramHandle: "",
        twitterHandle: ""
      }
  }


  data = {
    username: 'cbz123',
    email: 'cbz@gmail.com',
    password: '12345'
  };

  constructor(private http: HttpClient) { }

  // Register user method
  registerUser(username:string,email:string,password:string ): Observable<any> {
   this.registrationData.firstName=username;
    this.registrationData.emailId=email;
    this.registrationData.password=password;
    return this.http.post('https://freeapi.miniprojectideas.com/api/JWT/CreateNewUser', this.registrationData);
  }
}
