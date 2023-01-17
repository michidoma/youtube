import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { FilterComponent } from './filter/filter.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import { DetailsComponent } from './details/details.component';
import { SideRecommendComponent } from './side-recommend/side-recommend.component';
import { SideVideoCardComponent } from './side-video-card/side-video-card.component';
import { CommentComponent } from './comment/comment.component';
import { ColorDirective } from './color.directive';
import { ResultsComponent } from './results/results.component';
import { DatePipe } from './date.pipe';
import { NumberFormatPipe } from './number-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    ContentSectionComponent,
    FilterComponent,
    VideoCardComponent,
    HomeComponent,
    WatchComponent,
    DetailsComponent,
    SideRecommendComponent,
    SideVideoCardComponent,
    CommentComponent,
    ColorDirective,
    ResultsComponent,
    DatePipe,
    NumberFormatPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
