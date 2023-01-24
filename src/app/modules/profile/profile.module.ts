import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account',
    component: AccountComponent,
  },
];

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class ProfileModule {}
