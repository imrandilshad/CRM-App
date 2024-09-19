import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  constructor(private router: Router) {}
  islogin: boolean = localStorage.getItem("userInfo") ? true : false;
  logOut() {
    localStorage.removeItem("userInfo");
    window.location.reload();
    this.router.navigate(["login"]);
  }
}
