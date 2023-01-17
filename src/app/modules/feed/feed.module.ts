import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LibraryComponent } from './library/library.component';
import { RouterModule, Routes } from '@angular/router';
import { ShortsComponent } from './shorts/shorts.component';

const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'shorts', component: ShortsComponent },
];

@NgModule({
  declarations: [SubscriptionsComponent, LibraryComponent, ShortsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeedModule {}
