import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService {
  user: string = localStorage.getItem("username") || "";
  status: boolean = this.user ? true : false;
  isLogin = signal<boolean>(this.status);
}
