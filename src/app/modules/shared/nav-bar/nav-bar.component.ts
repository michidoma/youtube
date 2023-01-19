import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  signedIn: string = '';
  pop: boolean = false;
  username: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.signedIn = localStorage.getItem('loggedIn') || '-1';
    this.username = localStorage.getItem('username') || 'username';
  }

  getValue(val: string) {
    this.router.navigate(['/results'], {
      queryParams: { search_query: val },
    });
  }

  setLogAndReload(val: string): void {
    localStorage.setItem('loggedIn', val);
    window.location.reload();
  }
}
