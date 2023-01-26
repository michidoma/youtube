import { AbstractControl, FormControl } from '@angular/forms';

export class CustomValidators {
  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('pass')?.value;
    const confirmPassword: string = control.get('confirmPass')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPass')?.setErrors({ NoPasswordMatch: true });
    }
  }

  static noSpace(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpace: true };
    }
    return null;
  }
}
