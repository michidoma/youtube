import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { card } from '../models/card';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [],
})
export class DetailsComponent {
  @Input() content: card | any;
  showMore: boolean = false;
  loggedIn: number | undefined;
  sub: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loggedIn = +params['log'];
    });
  }

  navigateToProfile() {
    this._router.navigate(['/profile']);
  }

  myClickHandler(event: any): void {
    if (this.loggedIn != 1) {
      this.navigateToProfile();
    } else {
      this.sub = true;
    }
  }
}
