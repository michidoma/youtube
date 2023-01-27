import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VideoCardComponent } from './video-card/video-card.component';

import { DatePipe } from './date.pipe';
import { NumberFormatPipe } from './number-format.pipe';

@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent,
    VideoCardComponent,
    DatePipe,
    NumberFormatPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    SideBarComponent,
    NavBarComponent,
    VideoCardComponent,
    DatePipe,
    NumberFormatPipe,
  ],
})
export class SharedModule {}
