import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [SideBarComponent, NavBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, SideBarComponent, NavBarComponent],
})
export class SharedModule {}
