import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {
  closed: boolean = true;
  signedIn: string = '';

  constructor() {}
  ngOnInit(): void {
    this.signedIn = localStorage.getItem('loggedIn') || '-1';
  }
}
