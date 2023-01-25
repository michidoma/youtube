import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  profileForm = this.fb.group({
    fullName: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    }),
    username: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(30)],
    ],
    password: this.fb.group({
      pass: ['', Validators.required],
      confirmPass: ['', Validators.required],
    }),
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    console.log('this.profileForm :>> ', this.profileForm);
    console.log('this.profileForm.status :>> ', this.profileForm.status);

    // this.router.navigate(['/home']);

    // this.profileForm.patchValue({
    //   fullName: {
    //     lastName: 'Puje',
    //   },
    // });
  }
}
