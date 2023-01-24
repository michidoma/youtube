import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userInfo } from 'src/app/shared/user-info.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: [],
})
export class AccountComponent {
  @ViewChild('loginForm') loginForm: NgForm | any;

  userInfo: userInfo = {
    email: '',
    password: '',
  };
  passwordType: string = 'password';

  constructor(private router: Router) {}

  passwordToggle() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  setLocalStorage(): void {
    localStorage.setItem('loggedIn', '1');
    localStorage.setItem('username', this.userInfo.email);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  // OnSubmit() {
  //   console.log('Submitted :>> ', this.loginForm);
  // }
}
