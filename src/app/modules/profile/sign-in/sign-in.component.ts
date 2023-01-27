import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { userInfo } from 'src/app/shared/user-info.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm | any;

  enteredEmail: string = '';
  enteredPassword: string = '';
  showPassword: boolean = false;
  emailMatch: boolean = true;
  passwordMatch: boolean = true;
  newUser: any;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.enteredEmail = this.dataService.getChosenEmail()!;
  }

  onSubmit() {
    if (this.loginForm.status === 'VALID') {
      this.apiService.getUsers().subscribe(
        (res) => {
          const found = res.find(
            (user: any) => user.email === this.enteredEmail
          );
          if (found === undefined) {
            this.emailMatch = false;
          } else {
            this.emailMatch = true;
            if (found.password === this.enteredPassword) {
              this.passwordMatch = true;
              this.setLocalStorage_(found);
              this.navigateToHome();
            } else {
              this.passwordMatch = false;
            }
          }
        },
        (err) => alert('Something went wrong')
      );
    }
  }

  setLocalStorage_(user: userInfo): void {
    localStorage.setItem('loggedIn', '1');
    localStorage.setItem('fullName', user.firstName + ' ' + user.lastName);
    localStorage.setItem('email', user.email);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
