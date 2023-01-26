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
  show: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginForm.status === 'VALID') {
      this.setLocalStorage();
      this.navigateToHome();
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
