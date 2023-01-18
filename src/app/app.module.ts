import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { SharedModule } from './modules/shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { RequestInterceptor } from './request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
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
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
