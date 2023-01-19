import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  signedIn: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.signedIn = localStorage.getItem('loggedIn') || '-1';
  }

  getValue(val: string) {
    this.router.navigate(['/results'], {
      queryParams: { search_query: val },
    });
  }
}
