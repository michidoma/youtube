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
  darkMode: string = '0';
  srcLogo: string = '/src/assets/img/logo.png';

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.signedIn = localStorage.getItem('loggedIn') || '-1';
    this.username = localStorage.getItem('username') || 'username';
    if (localStorage.getItem('darkMode') === '1') {
      // this.srcLogo = '/src/assets/img/logo-dark-mode.png';
      document.body.classList.add('dark-theme');
    }
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

  toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
    this.darkMode = localStorage.getItem('darkMode') === '1' ? '0' : '1';
    localStorage.setItem('darkMode', this.darkMode);
  }
}
