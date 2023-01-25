import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  profileForm = new FormGroup({
    fullName: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    }),
    username: new FormControl(''),
    password: new FormGroup({
      pass: new FormControl(''),
      confirmPass: new FormControl(''),
    }),
  });

  onSubmit() {
    // this.profileForm.patchValue({
    //   fullName: {
    //     lastName: 'Puje',
    //   },
    // });
  }
}
