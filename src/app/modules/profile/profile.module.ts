import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChooseAccountComponent } from './choose-account/choose-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'signinchooser', pathMatch: 'full' },
  {
    title: 'Sign in',
    path: 'signin',
    component: SignInComponent,
  },
  {
    title: 'Create your Google Account',
    path: 'signup',
    component: SignUpComponent,
  },
  {
    title: 'Sign in',
    path: 'signinchooser',
    component: ChooseAccountComponent,
  },
];

@NgModule({
  declarations: [SignInComponent, SignUpComponent, ChooseAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ProfileModule {}
