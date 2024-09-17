import { CommonModule } from '@angular/common';
import { AuthGuard } from './../../../auth.guard';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {

  }
  islogin:boolean=localStorage.getItem('username')?true:false;
  logOut() {
    localStorage.removeItem('username')
     window.location.reload()
    this.router.navigate(["login"])
    }

}


