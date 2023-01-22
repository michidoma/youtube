import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentSectionComponent } from './home/content-section/content-section.component';
import { FilterComponent } from './home/filter/filter.component';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import { DetailsComponent } from './watch/details/details.component';
import { SideRecommendComponent } from './watch/side-recommend/side-recommend.component';
import { SideVideoCardComponent } from './watch/side-video-card/side-video-card.component';
import { CommentComponent } from './watch/details/comment/comment.component';
import { ResultsComponent } from './results/results.component';
import { CategoriesComponent } from './categories/categories.component';

import { RequestInterceptor } from './request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ContentSectionComponent,
    FilterComponent,
    HomeComponent,
    WatchComponent,
    DetailsComponent,
    SideRecommendComponent,
    SideVideoCardComponent,
    CommentComponent,
    ResultsComponent,
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
