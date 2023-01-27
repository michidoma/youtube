import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/custom-validators';
import { userInfo } from 'src/app/shared/user-info.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  checkbox: boolean = false;
  userModel: userInfo = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };

  profileForm = this.fb.group({
    fullName: this.fb.group({
      firstName: ['', [Validators.required, CustomValidators.noSpace]],
      lastName: ['', [Validators.required, CustomValidators.noSpace]],
    }),
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        CustomValidators.noSpace,
      ],
    ],
    password: this.fb.group(
      {
        pass: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,}'
            ),
          ],
        ],
        confirmPass: [''],
      },
      { validator: CustomValidators.passwordMatchValidator }
    ),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private dataService: DataService
  ) {}

  onSubmit() {
    if (this.profileForm.valid) {
      this.postUserDetails();
      this.router.navigate(['/profile/signin']);
      this.dataService.setPlaceholder('');
    }
  }

  postUserDetails() {
    this.userModel.firstName = this.profileForm.value.fullName?.firstName!;
    this.userModel.lastName = this.profileForm.value.fullName?.lastName!;
    this.userModel.username = this.profileForm.value.username!;
    this.userModel.email = this.profileForm.value.username + '@gmail.com';
    this.userModel.password = this.profileForm.value.password.pass;

    this.apiService.addUser(this.userModel).subscribe(
      (res) => {},
      (err) => alert('Something went wrong')
    );
  }
}
