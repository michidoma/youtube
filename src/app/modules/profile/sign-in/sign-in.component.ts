import {
  Component,
  OnInit,
  ViewChild,
  ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserInfoService } from 'src/app/services/user-info.service';
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
    private userService: UserInfoService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.newUser = JSON.parse(localStorage.getItem('user')!);
  }

  onSubmit() {
    // console.log(
    //   'this.apiService.findUser("michidmaap6@gmail.com") :>> ',
    //   this.apiService.findUser('michidmaap6@gmail.com')
    // );
    console.log('this.loginForm.status :>> ', this.loginForm.status);
    if (this.loginForm.status === 'VALID') {
      this.apiService.getUsers().subscribe(
        (res) => {
          const hariu = res.find(
            (user: any) => user.email === this.enteredEmail
          );
          // console.log('hariu :>> ', hariu);
          if (hariu === undefined) {
            this.emailMatch = false;
            // console.log('email oldsongui :>> ');
          } else {
            this.emailMatch = true;
            // console.log('email oldson :>> ', hariu);
            if (hariu.password === this.enteredPassword) {
              this.passwordMatch = true;
              console.log('Password zuv :>> ');
              this.setLocalStorage_(hariu);
              this.navigateToHome();
            } else {
              this.passwordMatch = false;
              // console.log('Pass buruu :>> ');
            }
          }
        },
        (err) => alert('Something went wrong')
      );
      // this.apiService.getUsers().subscribe(
      //   (res) => {
      //     console.log('res :>> ', res);
      //     const userMatch = res.find((user: any) => {
      //       user.email === this.enteredEmail;
      //     });
      //     if (userMatch === undefined) {
      //       this.emailMatch = false;
      //     } else {
      //       console.log('User Matched!!! :>> ', userMatch!!!);
      //       this.emailMatch = true;
      //       if (userMatch.password === this.enteredPassword) {
      //         this.passwordMatch = true;
      //         this.setLocalStorage_(userMatch);
      //         this.navigateToHome();
      //       } else {
      //         this.passwordMatch = false;
      //       }
      //     }
      //   },
      //   (err) => alert('Something went wrong')
      // );
    }

    // if (this.loginForm.status === 'VALID') {
    //   if (this.newUser.username + '@gmail.com' === this.enteredEmail) {
    //     this.emailMatch = true;
    //     this.passwordMatch = false;
    //     if (this.newUser.password.pass === this.enteredPassword) {
    //       this.passwordMatch = true;
    //       this.setLocalStorage(this.newUser);
    //       this.navigateToHome();
    //       return;
    //     }
    //     return;
    //   }
    //   const userMatch = this.userService.findUser(this.enteredEmail);
    //   if (userMatch === undefined) {
    //     this.emailMatch = false;
    //   } else {
    //     this.emailMatch = true;
    //     if (userMatch.password === this.enteredPassword) {
    //       this.passwordMatch = true;
    //       this.setLocalStorage_(userMatch);
    //       this.navigateToHome();
    //     } else {
    //       this.passwordMatch = false;
    //     }
    //   }
    // }

    // if (this.loginForm.status === 'VALID') {
    //   const passwordPattern = this.userService.retPass(this.enteredEmail);
    //   if (passwordPattern === undefined) {
    //     this.emailMatch = false;
    //   } else {
    //     this.emailMatch = true;
    //     if (passwordPattern === this.enteredPassword) {
    //       this.passwordMatch = true;
    //       this.setLocalStorage();
    //       this.navigateToHome();
    //     } else {
    //       this.passwordMatch = false;
    //     }
    //   }
    // }
  }

  setLocalStorage(user: any): void {
    localStorage.setItem('loggedIn', '1');
    localStorage.setItem(
      'fullName',
      user.fullName.firstName + ' ' + user.fullName.lastName
    );
    localStorage.setItem('email', user.username + '@gmail.com');
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
