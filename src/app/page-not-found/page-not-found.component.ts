import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styles: [],
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}
  getValue(val: string) {
    this.router.navigate(['/results'], {
      queryParams: { search_query: val },
    });
  }
}
