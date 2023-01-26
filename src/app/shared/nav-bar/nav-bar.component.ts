import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  signedIn?: string;
  pop: boolean = false;
  // username: string = '';
  fullName: string = '';
  email: string = '';
  srcLogo: string = '/assets/img/logo.png';
  theme: string = 'Light';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.signedIn = localStorage.getItem('loggedIn') || '-1';
    this.fullName = localStorage.getItem('fullName') || 'username';
    this.email = localStorage.getItem('email') || '@email';
    if (localStorage.getItem('darkMode') === '1') {
      this.srcLogo = '/assets/img/logo-dark-mode.png';
      document.body.classList.add('dark-theme');
      this.theme = 'Dark';
    } else {
      this.srcLogo = '/assets/img/logo.png';
      this.theme = 'Light';
    }
  }

  getSearchKey(val: string) {
    this.router.navigate(['/results'], {
      queryParams: { search_query: val },
    });
  }

  signOut(): void {
    localStorage.setItem('loggedIn', '0');
    localStorage.setItem('darkMode', '0');
    window.location.reload();
  }

  toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
    window.location.reload();
    localStorage.setItem(
      'darkMode',
      localStorage.getItem('darkMode') === '1' ? '0' : '1'
    );
  }
}
