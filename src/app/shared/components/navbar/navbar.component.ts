
import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, effect } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { NavbarService } from "@app/shared/services/navabar.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {

public islogin:boolean= false
  private navbarReloadSubscription!: Subscription;

  constructor(private navbarService: NavbarService,private router: Router) { }

  ngOnInit(): void {

    this.navbarReloadSubscription = this.navbarService.reloadNavbar$.subscribe(() => {
      this.reloadNavbar();
    });
  }

  reloadNavbar() {

    this.islogin = localStorage.getItem("userInfo") ? true : false;
  }

  ngOnDestroy(): void {

    if (this.navbarReloadSubscription) {
      this.navbarReloadSubscription.unsubscribe();
    }
  }

  logOut() {
    localStorage.removeItem("userInfo");
   this.islogin=false;
    this.router.navigate(["login"]);
  }

}
