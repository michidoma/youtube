import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LibraryComponent } from './library/library.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsResolver } from './subscriptions/subscriptions.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  {
    title: 'Subscriptions',
    path: 'subscriptions',
    component: SubscriptionsComponent,
    resolve: { subFilteredData: SubscriptionsResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  { title: 'Library', path: 'library', component: LibraryComponent },
  { title: 'Shorts', path: 'shorts', component: ShortsComponent },
];

@NgModule({
  declarations: [SubscriptionsComponent, LibraryComponent, ShortsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class FeedModule {}
