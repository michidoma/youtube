import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userInfo } from 'src/app/shared/user-info.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  @ViewChild('loginForm') loginForm: NgForm | any;

  userInfo: userInfo = {
    email: '',
    password: '',
  };
  passwordType: string = 'password';
  eye: string = 'fa-eye-slash';

  constructor(private router: Router) {}

  passwordToggle() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.eye = 'fa-eye';
    } else {
      this.passwordType = 'password';
      this.eye = 'fa-eye-slash';
    }
  }

  setLocalStorage(): void {
    localStorage.setItem('loggedIn', '1');
    localStorage.setItem('username', this.userInfo.email);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
