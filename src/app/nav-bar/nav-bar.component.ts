import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  constructor(private _router: Router) {}

  navigateToHome() {
    this._router.navigate(['home']);
  }
  navigateToWatch() {
    this._router.navigateByUrl('/watch');
  }
}
