import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  loggedIn: number = 0;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loggedIn = +params['log'];
    });
  }
  navigateToHome() {
    this.router.navigate(['home']);
  }
  getValue(val: string) {
    this.router.navigate(['/results'], {
      queryParams: { search_query: val },
    });
  }
}
