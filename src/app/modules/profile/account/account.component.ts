import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: [],
})
export class AccountComponent {
  setLog(val: string): void {
    localStorage.setItem('loggedIn', val);
  }

  setUsername(name: string) {
    localStorage.setItem('username', name);
  }
}
