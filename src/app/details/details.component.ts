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
  signedIn: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signedIn = localStorage.getItem('loggedIn') || '-1';
  }

  myClickHandler(event: any): void {
    if (this.signedIn === '0') {
      this._router.navigate(['/profile']);
    } else {
      this.sub = true;
    }
  }
}
