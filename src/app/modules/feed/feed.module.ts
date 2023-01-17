import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LibraryComponent } from './library/library.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SideVideoCardComponent } from '../../side-video-card/side-video-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'shorts', component: ShortsComponent },
];

@NgModule({
  declarations: [
    SubscriptionsComponent,
    LibraryComponent,
    ResultsComponent,
    ShortsComponent,
    SideVideoCardComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeedModule {}
