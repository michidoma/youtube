import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { card } from '../../shared/card.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [],
})
export class DetailsComponent {
  @Input() content?: card;

  showMore: boolean = false;
  sub: boolean = false;
  signedIn?: string;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.signedIn = localStorage.getItem('loggedIn') || '-1';
  }

  myClickHandler(): void {
    if (this.signedIn === '0') {
      this._router.navigate(['/profile']);
    } else {
      this.sub = !this.sub;
    }
  }
}
