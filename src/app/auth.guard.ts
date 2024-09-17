import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
islogin:boolean=localStorage.getItem('username')?true:false;
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.islogin) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
