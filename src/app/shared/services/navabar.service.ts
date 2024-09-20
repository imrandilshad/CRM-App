import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private reloadNavbarSource = new Subject<void>();

  reloadNavbar$ = this.reloadNavbarSource.asObservable();

  triggerNavbarReload() {
    this.reloadNavbarSource.next();
  }
}
