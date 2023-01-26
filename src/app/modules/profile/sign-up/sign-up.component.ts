import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/shared/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
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

  checkbox: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    if (this.profileForm.valid) {
      this.router.navigate(['/profile/signin']);
    }
    console.log('this.profileForm :>> ', this.profileForm);
  }
}
